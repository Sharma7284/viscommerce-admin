import React, { useEffect, useState } from "react";
import CustomViewCard from "../../components/UiComponents/CustomViewCard/CustomViewCard";
import GridLayout from "../../components/layout/GridLayout/GridLayout";

import { FaUsers, FaBell } from "react-icons/fa";
import { MdUnsubscribe } from "react-icons/md";
import { fetchUsersCount } from "../../api/apiEndpoints";

const Dashboard = () => {
  const [usersCardData, setUsersCardData] = useState(null);

  useEffect(() => {
    const getUserCount = async () => {
      const { data } = await fetchUsersCount();
      setUsersCardData([
        {
          icon: <FaUsers size={52} />,
          number: data[0]["subscribeuser"] + data[0]["unsubscribeuser"],
          title: `All Users`,
          color: `#FFEFE7`,
        },
        {
          icon: <FaBell size={52} />,
          number: data[0]["subscribeuser"],
          title: `Subscribe`,
          color: `#E8F0FB`,
        },
        {
          icon: <MdUnsubscribe size={52} />,
          number: data[0]["unsubscribeuser"],
          title: `Unsubscribe`,
          color: `#FDEBF9`,
        },
      ]);
    };
    getUserCount();
  }, []);

  return (
    <div>
      <GridLayout cols={3}>
        {usersCardData &&
          usersCardData.map((item, index) => (
            <CustomViewCard key={index} data={item}></CustomViewCard>
          ))}
      </GridLayout>
    </div>
  );
};

export default Dashboard;
