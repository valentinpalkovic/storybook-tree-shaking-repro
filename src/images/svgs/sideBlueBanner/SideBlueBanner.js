import React from "react";
import { Image } from "../../../components/common";
import SideBlueBannerImg from "./SideBlueBanner.svg";

const SideBlueBanner = (props) => (
  <Image src={SideBlueBannerImg} alt="SideBlueBannerImg" {...props} />
);

export default SideBlueBanner;
