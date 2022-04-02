import { FC } from "react";

type InputProps = {
    onChange: Function;
};

export const SearchInput: FC<InputProps> = ({onChange}) => {
  return <input type="text" className="rounded" onChange={(e) => onChange(e)} />;
};
