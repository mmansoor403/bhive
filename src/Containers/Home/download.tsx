import React from "react";
import playStore from "../../Assets/Images/play-store.png";
import appStore from "../../Assets/Images/app-store.png";
import download from "../../Assets/Images/download.png";

const Download: React.FC = () => {
  return (
    <section className="download-wrapper wrapper">
      <h3>Download our app now</h3>
      <div className="download-card-wrapper">
        <div>
          <img src={download} alt="download" />
        </div>
        <div>
          <p>
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </p>
          <div className="download-buttons">
            <span>
              <img src={playStore} alt="play-store" />
            </span>
            <span>
              <img src={appStore} alt="app-store" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
