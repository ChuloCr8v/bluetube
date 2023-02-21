import React from "react";
import Image from "next/image";
import avatar from "../assets/avatar.jpg";

const Avatar = () => {
  return <Image src={avatar} height="32" width="32" alt="avatar" />;
};

export default Avatar;
