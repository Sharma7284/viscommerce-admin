import React, { useEffect, useState } from "react";
import CustomTables from "../../components/UiComponents/CustomTables/CustomTables";
import { fetchSubscribedUser } from "../../api/apiEndpoints";
import CustomTabs from "../../components/UiComponents/CustomTabs/CustomTabs";
import { FaUsers, FaBell } from "react-icons/fa";
import { MdUnsubscribe } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import "./MailingSystem.scss";
import CustomSearchBox from "../../components/UiComponents/CustomSearchBox/CustomSearchBox";

const MailingSystem = () => {
  const [userData, setUserData] = useState(null);
  const MailTabsData = [
    {
      label: `All Users`,
      startIcon: <FaUsers size={16} />,
    },
    {
      label: `Subscribe`,
      startIcon: <FaBell size={16} />,
    },
    {
      label: `Unsubscribe`,
      startIcon: <MdUnsubscribe size={16} />,
    },
    {
      label: `Schedular Controls`,
      isDisable: true,
      startIcon: <IoMdTimer size={16} />,
    },
  ];

  useEffect(() => {
    const getSubscribeUsers = async () => {
      const data = await fetchSubscribedUser();
      if (data) {
        setUserData(data.filter((f) => f.isSubscribe || !f.isSubscribe));
      }
    };

    getSubscribeUsers();
  }, []);

  const handleTabButton = async (event) => {
    if (MailTabsData[event]?.label === "All Users") {
      const data = await fetchSubscribedUser();
      setUserData(data);
    }
    if (MailTabsData[event]?.label === "Subscribe") {
      const data = await fetchSubscribedUser();
      setUserData(data.filter((f) => f.isSubscribe));
    }
    if (MailTabsData[event]?.label === "Unsubscribe") {
      const data = await fetchSubscribedUser();
      setUserData(data.filter((f) => !f.isSubscribe));
    }
  };

  const handleSelectCheckbox = (event) => {
    const checkRowByDropdown = userData?.map((m) =>
      m?.email === event?.email
        ? { ...m, isChecked: true, emailId: event.emailId }
        : m
    );
    setUserData(checkRowByDropdown);
  };

  const handleSelectAllCheckBox = (event) => {
    const selectAllCheckbox = userData?.map((m) => ({
      ...m,
      isChecked: event.target.checked ? true : false,
    }));
    console.log(selectAllCheckbox);
    setUserData(selectAllCheckbox);
  };

  return (
    <div className="mailing-system">
      {
        <CustomTabs
          orientaion={"horizontal"}
          tabsData={MailTabsData}
          handleTabButton={handleTabButton}
        ></CustomTabs>
      }
      <CustomSearchBox disabled={true}></CustomSearchBox>
      {userData && (
        <CustomTables
          tableData={userData}
          handleSelectAllCheckBox={handleSelectAllCheckBox}
          handleSelectCheckbox={handleSelectCheckbox}
        ></CustomTables>
      )}
    </div>
  );
};

export default MailingSystem;
