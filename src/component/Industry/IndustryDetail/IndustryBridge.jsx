import React from "react";
import {Link} from "react-router-dom";

const IndustryBridge = ({lists}) => {
  return (
    <Link to={"/industry/trade/detail/:" + lists.id} id="IndustryBridge">
      <div></div>
    </Link>
  );
};

export default IndustryBridge;
