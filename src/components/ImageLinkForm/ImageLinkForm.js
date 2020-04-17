import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="white f3">
        {"This app will detect faces in your pictures. Give it a try."}
      </p>
      <div className="center">
        {/* make it smaller, add another div */}
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center bg-light-gray"
            type="text"
            onChange={onInputChange}
          />
          {/*size of 4, padding of 2, width 70%*/}
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-blue"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
