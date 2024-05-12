import { Component } from "react";
import { Link } from "react-router-dom";

const ErrorBoundary = () => {
  return (
    <div>
        <h1> Error occured while doing something please go back to home page </h1>
        <Link to="/">
         <h3>You can go back to the home page by clicking here, though!</h3>
      </Link>
    </div>
  );
};

export default ErrorBoundary;