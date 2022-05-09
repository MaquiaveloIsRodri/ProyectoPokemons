import React from "react";
import '../styles/Loader.css';

const SpinnerLoader = () => {
  return (
    <div className="Container-Spinner">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  );
}

export default SpinnerLoader;