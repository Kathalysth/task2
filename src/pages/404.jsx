import React from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="container-fluid app mx-auto h-100 text-center">
        <h1 className="fw-bolder ">NOT FOUND</h1>
        <small>The page you are requesting does not exist.</small>
      </div>
    </div>
  );
};

export default NotFound;
