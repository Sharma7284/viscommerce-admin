import React, { useEffect, useRef } from "react";
import "./CustomPreview.scss";
import UploadToastify from "../../toastify/UploadToastify/UploadToastify";

const CustomPreview = ({ fileUrl, height, isFullscreen, isSrcDoc = false }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeDocument = iframeRef?.current?.contentDocument;

    if (iframeDocument) {
      const style = document.createElement("style");

      style.textContent = `
        ::-webkit-scrollbar {
          width: 0px;
        }
        ::-webkit-scrollbar:horizontal {
          height: 0px;
        }
        ::-webkit-scrollbar-track {
          background: #fff;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #ff0000;
          border-radius: 6px;
          border: 2px solid #f0f0f0;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
      `;

      iframeDocument.head.appendChild(style);
    }
  }, [iframeRef]);

  return (
    <>
      {isSrcDoc ? (
        <iframe
          ref={iframeRef}
          className="file-previewer"
          srcDoc={fileUrl}
          style={{ width: isFullscreen ? "100%" : "", height: height }}
          title="File Preview"
        ></iframe>
      ) : (
        <iframe
          ref={iframeRef}
          className="file-previewer"
          src={fileUrl}
          style={{ width: isFullscreen ? "100%" : "", height: height }}
          title="File Preview"
        ></iframe>
      )}
    </>
  );
};

export default CustomPreview;
