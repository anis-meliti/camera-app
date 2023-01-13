import { useState } from 'react';
import 'tui-image-editor/dist/tui-image-editor.css';
import './App.css';
import CameraComponent from './Components/CameraComponent';
import ImageEditor from '@toast-ui/react-image-editor';
function App() {
  const [image, setImage] = useState(null);

  return (
    <div className="App">
      {!image ?
        <CameraComponent setImage={setImage} /> :
        <div className="row" style={{ height: '100vh' }}>
          <ImageEditor
            includeUI={{
              loadImage: {
                path: image,
                name: 'SampleImage',
              },

            }}
            selectionStyle={{
              cornerSize: 20,
              rotatingPointOffset: 70,
            }}
          />
        </div>
      }
    </div>
  );
}

export default App;
