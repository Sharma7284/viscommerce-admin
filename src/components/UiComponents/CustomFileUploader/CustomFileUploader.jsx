import React, { useRef, useState } from "react";
import "./CustomFileUploader.scss";
import { FaFileUpload } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FiMaximize } from "react-icons/fi";
import { FiMinimize } from "react-icons/fi";
import CustomButton from "../CustomButton/CustomButton";
import CustomPreview from "../CustomPreview/CustomPreview";
import { postEmailTemplates } from "../../../api/apiEndpoints";

const CustomFileUploader = ({ onCloseDialog }) => {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [uploadFilesPayload, setUploadFilesPayload] = useState([]);
  const [isPreview, setIsPreview] = useState(false);
  const [filePreviewUrl, setFilePreviewUrl] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(true);

  const handleAnchorClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileOnChange = (event) => {
    const file = Array.from(event?.target?.files);
    if (file.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        // Store into db
        console.log(e);
        setUploadFilesPayload((prevFilesPayload) => [
          ...prevFilesPayload,
          {
            subject: file[0]?.name.split(".")[0].toUpperCase(),
            email_content: e?.target?.result,
            type: file[0]?.type,
          },
        ]);
      };
      fileReader.readAsText(file[0]);

      setFiles((prevFiles) => [...prevFiles, ...file]);
    }
  };

  const handlePreview = (item) => {
    setIsPreview(true);
    console.log(item);
    if (item) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const blob = new Blob([e?.target?.result], { type: item?.type });
        const url = URL.createObjectURL(blob);
        // Store into db

        setFilePreviewUrl(url);
      };
      fileReader.readAsText(item);
    }
  };

  const handleRemoveFile = (item) => {
    setFiles(files?.filter());
  };

  const handleUploadFiles = async () => {
    for (const item of uploadFilesPayload) {
      const { data } = await postEmailTemplates(item);
      console.log(data);
    }
  };

  return (
    <>
      {!isPreview ? (
        <div className="custom-file-uploader">
          <h2>Upload email template</h2>
          <div className="file-uploader-input">
            <FaFileUpload size={48} color="red" />
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileOnChange}
              name=""
              accept=".html"
              id=""
            />
            <p className="file-uploader-text">
              <a href="#" onClick={handleAnchorClick}>
                Click to upload
              </a>{" "}
              or drag and drop
            </p>
            <p className="file-uploader-helper-text">
              Maximum file size 50 MB.
            </p>
          </div>
          {files &&
            files.length > 0 &&
            files?.map((item, index) => (
              <div key={index} className="files">
                <div className="files-left">
                  <CiFileOn size={24} color="red" />
                  <p>{item?.name}</p>
                </div>
                <div className="files-right">
                  <FaEye
                    onClick={() => handlePreview(item)}
                    size={16}
                    color="red"
                  />
                  <IoClose size={16} color="red" />
                </div>
              </div>
            ))}

          <div className="file-uploader-actions">
            <CustomButton
              variant={"cancel"}
              onClick={() => onCloseDialog(false)}
              label={`Cancel`}
            />
            <CustomButton
              onClick={handleUploadFiles}
              isDisabled={uploadFilesPayload?.length === 0}
              label={`Upload`}
            />
          </div>
        </div>
      ) : (
        <div
          className={`file-uploader-preview ${
            isFullscreen ? "is-fullscreen" : ""
          }`}
        >
          <div className="file-uploader-preview-header">
            {!isFullscreen ? (
              <FiMaximize
                onClick={() => setIsFullscreen(true)}
                size={16}
                color="red"
              />
            ) : (
              <FiMinimize
                onClick={() => setIsFullscreen(false)}
                size={16}
                color="red"
              />
            )}
            <IoClose
              onClick={() => setIsPreview(false)}
              size={24}
              color="red"
            />
          </div>
          {filePreviewUrl && <CustomPreview fileUrl={filePreviewUrl} />}
        </div>
      )}
    </>
  );
};

export default CustomFileUploader;
