import { Option } from "../../shared/option.model";

export type FormControlProps = {
  control: string;
  label?: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  options?: Option[];
  value?: string;
  optionName?: string;
  rows?: string;
};
