import React, { FC } from "react";
import Title from "../title/Title";

export type TypographyProps = {
  typography: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
};

const Typography: FC<TypographyProps> = ({
  typography,
  title,
}) => {
  return (
    <Title tag={typography} className={typography}>
        {title}
    </Title>
  );
};

export default Typography;
