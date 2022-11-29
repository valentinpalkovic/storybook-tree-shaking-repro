import React from "react";
import Image from "../../../components/common/atoms/image";
import TrialExpiredImg from "./TrialExpired.svg";

const TrialExpired = (props) => (
  <Image src={TrialExpiredImg} alt="TrialExpiredImg" {...props} />
);

export default TrialExpired;
