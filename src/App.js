import React from "react";
import "./style.css";
import DataProvider from "./components/DataProvider";
import PhotoGallery from "./components/PhotoGallery";

const App = () => {
  return (
    <>
      <main>
        <div id="landing">
          <div id="landing-text">
            <div id="landing-text-inner">
              <h1>Jill Morrow Photography</h1>
              <h2>Beautiful Natural Photography</h2>
              <a href="#images" className="btn" id="view-work">
                View Gallery
              </a>
            </div>
          </div>
          <div id="landing-image" />
        </div>
        <div id="images">
          <div id="header">
            <h2>My Work</h2>
          </div>
          <DataProvider render={data => <PhotoGallery data={data} />} />
        </div>
      </main>
      <footer>
        <h3>Thanks for Viewing!</h3>
        <p>
          Format inspired by{" "}
          <a href="http://www.traversymedia.com/">Traversy Media</a>
        </p>
      </footer>
    </>
  );
};

export default App;
