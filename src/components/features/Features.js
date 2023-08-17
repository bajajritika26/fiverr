import React from "react";
import "./Features.css";
import Check from "../../img/check.png";
const Features = () => {
  return (
    <div className="features">
      <div className="featuresContainer">
        <div className="featuresleft">
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className="featuresList">
            <div className="featuresTitle">
              <img src={Check} alt="ckeck" />
              The best for every budget
            </div>
            <p>
              Find high quality services at every price point. No hourly rates,
              Just project based pricing
            </p>
          </div>

          <div className="featuresList">
            <div className="featuresTitle">
                <img src={Check} alt="ckeck" />
                Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
          </div>

          <div className="featuresList">
            <div className="featuresTitle">
                <img src={Check} alt="ckeck" />
                Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
          </div>

          <div className="featuresList">
            <div className="featuresTitle">
                <img src={Check} alt="ckeck" />
                24/7 support
            </div>
            <p>
              Find high quality services at every price point. No hourly rates,
              Just project based pricing
            </p>
          </div>
        </div>
        <div className="featuresright">
          {/* <img src={}/> */}
          <video src="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
