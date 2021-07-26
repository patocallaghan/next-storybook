import React from "react";
import { Button, IProps } from "./index";
import inPercy from "@percy-io/in-percy";

export default {
  title: "Button",
};

export const DefaultButton = (args: IProps) => (
  <div style={{ padding: "25px" }}>
    <Button {...args} />
  </div>
);

DefaultButton.story = {
  decorators: [],
  parameters: {},
};

DefaultButton.args = {
  size: "small",
  label: "My Button",
  classNames: inPercy() ? "storybook-button--percy" : "",
  type: "primary",
};
