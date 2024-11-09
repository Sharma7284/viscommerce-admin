import React, { useEffect, useState } from "react";
import "./CustomTables.scss";
import { fetchEmailTemplates, postSendMail } from "../../../api/apiEndpoints";
import { CircularProgress } from "@mui/material";

const CustomTables = ({
  tableData,
  handleSelectCheckbox,
  handleSelectAllCheckBox,
}) => {
  const [userEmail, setUserEmail] = useState([]);
  const [sendBtn, setSendBtn] = useState(false);

  const [options, setOptions] = useState(null);
  const [selectOption, setSelectedOption] = useState("");

  const [allChecked, setAllChecked] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSendMail = async (email) => {
    setSendBtn(true);

    setTimeout(() => {
      setSendBtn(false);
    }, 1000);
    // console.log(data);
  };

  const handleCheckbox = (event, item) => {
    setChecked(event.target.checked);
    handleSelectCheckbox({ email: item });
  };

  const handleSelectEmailTemplate = (event, item) => {
    const emailId = event.target.value;
    const emailObj = {
      emailId,
      email: item?.email,
    };
    handleSelectCheckbox(emailObj);
    setUserEmail([emailObj]);
  };

  useEffect(() => {
    const getEmailTemplates = async () => {
      const { data } = await fetchEmailTemplates();
      setOptions(data);
    };

    getEmailTemplates();
    console.table(tableData);
  }, []);

  const handleSelectAllCheckedBox = (event) => {
    setAllChecked(event.target.checked);
    handleSelectAllCheckBox(event);
  };

  return (
    <div className="custom-table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allChecked}
                onChange={handleSelectAllCheckedBox}
              />
            </th>
            <th>User Details</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Email Template</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={item?.isChecked}
                  onChange={(event) => handleCheckbox(event, item.email)}
                />
              </td>
              <td>
                <div className="profile-details">
                  <div>
                    <p className="avatar">
                      {item?.email?.charAt(0).toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <p className="username">{item?.email?.split("@")[0]}</p>
                    <p className="email">{item?.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="date-time">
                  <p className={`bagde`}>
                    {new Date(item?.created_at).toDateString()},
                    {new Date(item?.created_at).toLocaleTimeString()}
                  </p>
                </div>
              </td>
              <td>
                <div className="status">
                  <p
                    className={`bagde ${
                      item?.isSubscribe ? "success" : "danger"
                    }`}
                  >
                    {item?.isSubscribe ? "Subscribed" : "Unsubscribed"}
                  </p>
                </div>
              </td>
              <td>
                <div className="email-templates">
                  <select
                    name=""
                    id=""
                    onChange={(event) => handleSelectEmailTemplate(event, item)}
                  >
                    {selectOption === "" && (
                      <option value={""}>Select an email template</option>
                    )}
                    {options &&
                      options?.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.subject}
                        </option>
                      ))}
                  </select>
                </div>
              </td>
              <td>
                <div className="action">
                  <button
                    disabled={!item?.isChecked}
                    onClick={() => handleSendMail(item?.email)}
                    className="btn"
                  >
                    <span>
                      {sendBtn ? (
                        <CircularProgress
                          size={12}
                          thickness={5}
                          color="#fff"
                        ></CircularProgress>
                      ) : (
                        `Send Mail`
                      )}
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTables;
