import React from "react";

type H2props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  classnames?: string;
};

const H2 = ({ children, classnames, ...rest }: H2props) => {
  return (
    <h2 className={classnames} {...rest}>
      {children}
    </h2>
  );
};

export default H2;
