import React from "react";
import MAHeader from "../../component/Detail/MAHeader";
import DetailFooter from "./../../component/Detail/DetailFooter";

const MA = ({title, sub}) => {
  return (
    <div id="ma">
      <MAHeader title={title} sub={sub} />
      <DetailFooter />
    </div>
  );
};

export default MA;
