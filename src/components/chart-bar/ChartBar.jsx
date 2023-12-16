import React from "react";

const ChartBar = ({ barWidth }) => {
  return (
    <div className={"w-[" + barWidth + "px] h-5 bg-[#FFA500] rounded"}></div>
  );
};

export default ChartBar;
