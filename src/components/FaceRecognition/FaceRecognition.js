import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, listBox }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputImage" alt="" src={imageUrl} width="500px" heigh="auto" />
        {listBox.map((box) => (
          <div
            key={`box${box.topRow}${box.rightCol}`} //not necesarry, included to elimiminate warning
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
