import React from "react";
import { RotatingLines } from "react-loader-spinner";
import loadingStyle from "./Loading.css";

interface LoadingProps {
  basic?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ basic }) => {
  if (basic) {
    <div className={loadingStyle.basicWrapper}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="30"
        visible
      />
    </div>;
  }

  return (
    <div className={loadingStyle.wrapper}>
      <div className={loadingStyle.loader}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible
        />
      </div>
    </div>
  );
};

export default Loading;
