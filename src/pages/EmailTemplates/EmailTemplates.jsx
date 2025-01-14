import { useEffect, useState } from "react";
import { fetchEmailTemplates } from "../../api/apiEndpoints";
import CustomFileInput from "../../components/UiComponents/CustomFileInput/CustomFileInput";
import CustomButton from "../../components/UiComponents/CustomButton/CustomButton";
import CustomDialog from "../../components/UiComponents/CustomDialog/CustomDialog";
import CustomFileUploader from "../../components/UiComponents/CustomFileUploader/CustomFileUploader";
import GridLayout from "../../components/layout/GridLayout/GridLayout";
import CustomPreview from "../../components/UiComponents/CustomPreview/CustomPreview";
import { IoMdRefreshCircle } from "react-icons/io";
import "./EmailTemplates.scss";
import CustomInput from "../../components/UiComponents/CustomInput/CustomInput";
import { FaEdit } from "react-icons/fa";

const EmailTemplates = () => {
  const [emailTemplates, setEmailTemplates] = useState(null);
  const [isDialog, setIsDialog] = useState(false);

  useEffect(() => {
    const getEmailTemplates = async () => {
      const { data } = await fetchEmailTemplates();
      setEmailTemplates(data);
    };

    getEmailTemplates();
  }, []);

  const handleClosedDialog = (data) => {
    console.log(data);
    setIsDialog(data);
  };

  return (
    <div>
      <div className="email-templates-header">
        <CustomButton
          onClick={() => setIsDialog(!isDialog)}
          label={`UPLOAD NEW TEMPLATE`}
        />
        <IoMdRefreshCircle size={32} color="red" />
        {isDialog && (
          <CustomDialog
            content={<CustomFileUploader onCloseDialog={handleClosedDialog} />}
          />
        )}
      </div>

      <GridLayout margin={`12px 0`} cols={5}>
        {emailTemplates?.map((item, index) => (
          <div key={index}>
            <CustomPreview
              height={`300px`}
              fileUrl={item?.email_content}
              isSrcDoc={true}
            />
            {/* <CustomInput value={item?.subject} PostFix={FaEdit} /> */}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default EmailTemplates;
