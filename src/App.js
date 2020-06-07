import React from 'react';
import images from "./images.json";
import ImageContainer from "./components/ImageContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        {
          images.map(image => {
            return (
                <div key={image.id} className={"wrapper"}>
                  <ImageContainer
                    src={image.urls.regular}
                    thumb={image.urls.thumb}
                    height={image.height}
                    width={image.width}
                    alt={image.alt_description}
                  />
                </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
