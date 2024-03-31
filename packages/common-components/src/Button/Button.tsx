import React, { FC, PropsWithChildren } from "react";

type Props = {
  type: "primary" | "secondary";
  className?: string;
};

const buttonClasses =
  "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600";

const Button: FC<PropsWithChildren<Props>> = ({
  type = "primary",
  className = "",
  children,
}) => {
  return <button className={buttonClasses + className}>{children}</button>;
};

export default Button;
