import React, { FC } from "react";

type TitleProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children?: React.ReactNode;
};

const Title: FC<TitleProps> = ({ tag, className, children }) => {
  const TagName = tag;
  return <TagName className={className}>{children}</TagName>;
};

export default Title;