import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-grow-1 bg-white ">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary m-auto" />
    </div>
  );
};

export default LoadingScreen;
