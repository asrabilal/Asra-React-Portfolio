/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";

function SocialLinks() {
  return (
    <div className="row">
      <div className="row">
        <div className="col-sm-12 text-center fluid">
          <h5 className="email">asra596@gmail.com</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-sm" />
        <div className="col-sm text-center">
          <a href="https://www.github.com/asrabilal" target="_blank"><i class="fab fa-github-square fa-3x" /></a>
          <a href="https://www.linkedin.com/in/AsraPervez" target="_blank"><i class="fab fa-linkedin fa-3x" /></a>
        </div>
        <div className="col-sm" />
      </div>
    </div>
  )
}

export default SocialLinks;