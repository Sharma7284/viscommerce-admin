import React, { useState } from "react";
import "./CustomInput.scss";

const CustomInput = ({ Prefix, PostFix, value }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className="form-input">
      {Prefix && <img src="" alt="" />}
      <input type="text" value={value} disabled={isDisabled} />
      {PostFix && <PostFix onClick={() => setIsDisabled(!isDisabled)} />}
    </div>
  );
};

export default CustomInput;
