import React, { useEffect, useState } from "react";
import CustomSearchBox from "../../UiComponents/CustomSearchBox/CustomSearchBox";
import "./Header.scss";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <div id="header" className="header">
      <CustomSearchBox disabled={false}></CustomSearchBox>
      <div>
        <p className="avatar">{user?.email?.charAt(0).toUpperCase()}</p>
      </div>
    </div>
  );
};

export default Header;
