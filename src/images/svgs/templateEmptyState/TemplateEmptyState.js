import React from "react";
import Image from "../../../components/common/atoms/image";
import TemplateEmptyStateImg from "./TemplateEmptyState.svg";

const TemplateEmptyState = (props) => (
  <Image src={TemplateEmptyStateImg} alt="TemplateEmptyStateImg" {...props} />
);

export default TemplateEmptyState;
