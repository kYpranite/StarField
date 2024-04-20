import React from "react";
import Card from "./Card";

const SideBar = () => {

  return (
    <div className="w-1/3 bg-white h-screen flex justify-center">
      <div className="flex flex-wrap w-[90%] h-[50%] my-5 gap-y-7 gap-10 overflow-y-auto">
        <Card text="abcd" image="images/95.png" />
        <Card text="abcd" image="images/95.png" />
        <Card text="abcd" image="images/95.png" />
        <Card text="abcd" image="images/95.png" />
        <Card text="abcd" image="images/95.png" />
        <Card text="abcd" image="images/95.png" />
        <Card text="abcd" image="images/95.png" />
        <Card text="abcd" image="images/95.png" />
      </div>
    </div>
  );
};

export default SideBar;
