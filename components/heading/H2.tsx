import React from "react";

type H2props = {
  children: React.ReactNode;
  classnames?: string;
};

const H2 = ({ children, classnames }: H2props) => {
  return <h2 className={classnames}>{children}</h2>;
};

export default H2;
