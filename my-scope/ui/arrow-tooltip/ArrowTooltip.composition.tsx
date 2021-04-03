import React from "react";
import ArrowTooltip from "./ArrowTooltip";

export const ArrowTooltipWithShortText = () => {
  return (
    <ArrowTooltip title="For federal tax purposes">
      <span>Short Tooltip</span>
    </ArrowTooltip>
  );
};

export const ArrowTooltipWithLargeText = () => {
  return (
    <ArrowTooltip title="For federal tax purposes, you are considered a U.S. person if you are an individual who is a U.S. citizen or U.S. resident alien">
      <span>Large Tooltip</span>
    </ArrowTooltip>
  );
};
