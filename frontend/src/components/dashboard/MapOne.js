import React from "react";

const MapOne = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Region labels
      </h4>
      <div className="h-90">
        <iframe
          title="Google Maps"
          style={{
            width: "100%",
            height: "100%",
            border: "0",
            overflow: "hidden",
          }}
          src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=karachi,Pakistan+(My%20website)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Population Estimator map</a>
        </iframe>
      </div>
    </div>
  );
};

export default MapOne;
