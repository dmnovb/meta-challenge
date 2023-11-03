import { useState } from "react";
// import ChangeEventHandler<HTMLInputElement>;

interface InitialValueProps {
  name: string;
  password: string;
  number: number;
}

export const getSelectedItem = (initialValues: InitialValueProps) => {
  const [values, setValues] = useState<InitialValueProps | any>(initialValues);

  return [
    values,
    (e: any) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
  ];
};
