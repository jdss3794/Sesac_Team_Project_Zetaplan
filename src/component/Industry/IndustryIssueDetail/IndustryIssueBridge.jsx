import React from "react";
import {Link} from "react-router-dom";

const IndustryIssueBridge = ({lists}) => {
  return (
    <Link to={"/industry/detail/:" + lists.id} id="IndustryBridge">
      <div></div>
    </Link>
  );
};

export default IndustryIssueBridge;
