import React from "react";

const EditotWrapper = ({ children, languageName }) => {
  return (
    <div className="editor__editors">
      <div className="topSection">
        <p>{languageName}</p>
        <button>O/C</button>
      </div>
      {children}
    </div>
  );
};

export default EditotWrapper;
