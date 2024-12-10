import React from "react";

const LoadingCircle = () => {
	return (
		<div className="flex justify-center w-full items-center h-full flex-grow-1 bg-white ">
			<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary m-auto"></div>
		</div>
	);
};

export default LoadingCircle;