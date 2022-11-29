import React from "react";
import Image from "../../../components/common/atoms/image";
import SelectTemplateModalEmptyStateImg from "./SelectTemplateModalEmptyState.svg";

const SelectTemplateModalEmptyState = (props) => (
  <Image
    src={SelectTemplateModalEmptyStateImg}
    alt="SelectTemplateModalEmptyStateImg"
    {...props}
  />
);

export default SelectTemplateModalEmptyState;
