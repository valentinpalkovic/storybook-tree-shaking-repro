import React from "react";
import Image from "../../../components/common/atoms/image";
import DoodleWhiteBackgroundImg from "./DoodleWhiteBackground.png";

const DoodleWhiteBackground = (props) => (
  <Image
    src={DoodleWhiteBackgroundImg}
    alt="DoodleWhiteBackgroundImg"
    {...props}
  />
);

export default DoodleWhiteBackground;
