import React from "react";
import headingStyle from "./Heading.css";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={headingStyle.wrapper}>
      <div className={center ? headingStyle.center : ""}>
        <div className={headingStyle.title}>{title}</div>
        <div className={headingStyle.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
};

export default Heading;
