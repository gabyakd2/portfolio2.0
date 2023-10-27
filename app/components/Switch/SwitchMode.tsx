import { Switch } from "@nextui-org/react";
import React from "react";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcons";

function SwitchMode() {
  return (
    <Switch
      defaultSelected
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
}

export default SwitchMode;
