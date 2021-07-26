export { Button } from "./component";

export interface IProps {
  size: "small" | "medium" | "large";
  label: string;
  classNames?: string[];
  type: "primary" | "secondary";
}
