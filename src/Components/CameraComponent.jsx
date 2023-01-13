import React, { useState, useRef } from 'react';
import { Camera } from 'react-camera-pro';
import logo from '../assets/diaphragm.png';
const CameraComponent = ({setImage}) => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="row">
          <Camera
            ref={camera}
            numberOfCamerasCallback={setNumberOfCameras}
          />

        </div>
      </div>
      <div className="col-md-6">
        <div className="row" style={{position: 'absolute', bottom: 0, right: '50%'}}>
          <button
            onClick={() => {
              const photo = camera.current.takePhoto();
              setImage(photo);
            }}
          >
            <img src={logo} alt="take" />
          </button>
          <button
            hidden={numberOfCameras <= 1}
            onClick={() => {
              camera.current.switchCamera();
            }}
          />
        </div>
      </div>
     
    </div>
  );
};

export default CameraComponent;
