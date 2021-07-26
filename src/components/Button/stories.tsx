import React from "react";
import { Button } from "./index";

export default {
  title: "Button",
};

export const DefaultButton = () => (
  <div style={{ padding: "25px" }}>
    <Button size="small" label="My Button" classNames="" type="primary" />
  </div>
);

DefaultButton.story = {
  decorators: [],
  parameters: {},
};
