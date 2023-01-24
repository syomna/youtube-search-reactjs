import React from "react";

const Video = () => {
  return (
    <div>
      <div className="video">
        <div className="video-thumb">
          <img
            src="https://i.ytimg.com/vi/MqaPocXcB64/mqdefault.jpg"
            alt="thumb"
          />
          <div className="duration">5:00</div>
          <div className="loader"></div>
        </div>

        <div>
          <h3>SpongeBob | Nickelodeon Arabia | سبونج بوب | حب الجيران</h3>
          <div className="video-infos">
            <p>
              Nickelodeon Arabia
              <span>
                <i className="fa fa-circle-check"></i>
              </span>
            </p>
            <p>50M views</p>
            <p className="time-ago">1 year ago</p>
          </div>
          <p className="video-description">
            Wie zijn de allerbeste vrienden in heel Bikinibroek? Abonneer je nu
            voor nog meer van je favoriete Nickelodeon-series, zoals ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
