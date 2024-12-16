import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Themetoggle from "../../components/themetoggle/index.js";

export const Home = () => {
  const storedTheme = "/photo/S__8544260_0.jpg";
  const ThemetoggleImage = storedTheme === "dark"? "/photo/S__8544261_0.jpg" : "/photo/S__8544260_0.jpg";

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + storedTheme})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                <a href="https://docs.google.com/document/d/19zpXyvMV7WigohgY5q-LYSauVNiwAMwpfmhplCzPy6A/export?format=pdf" 
                  class="text_2 download-link" 
                  download="resume.pdf" 
                  target="_blank" 
                  rel="noreferrer">
                 <div id="button_p" class="ac_btn btn">
                       Resume
                    <div class="ring one"></div>
                    <div class="ring two"></div>
                    <div class="ring three"></div>
                 </div>
                </a>
                  <Link to="/portfolio">
                    <div id="button_h" className="ac_btn btn">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me 
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
