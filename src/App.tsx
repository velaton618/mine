import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div className="App">
      <div className="sticky top-0 z-50 navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">velaton618</button>
      </div>

      <div
        className="hero"
        style={{
          backgroundImage: "url(main.jpg)",
          height: "90vh",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello</h1>
            <TypeAnimation
              sequence={[
                "I'm Alexander",
                800,
                "I'm 16 y.o",
                800,
                "I'm a developer 🧑‍💻",
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={0}
            />
          </div>
        </div>
      </div>
      <div
        className="hero"
        style={{ height: "180vh", backgroundImage: "url(second.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <Parallax speed={-50} style={{ marginRight: "68%" }}>
          <div className="card bg-base-200 shadow-lg w-96">
            <div className="card-body">
              <h2 className="card-title">About me</h2>
              <p>
                I'm a <b>16 y.o</b> developer from <b>Ukraine</b>.
                <br />
                I'm passionate about
                <b>programming</b>.
              </p>
            </div>
          </div>
        </Parallax>
        <Parallax speed={-20} style={{ marginLeft: "68%" }}>
          <div className="card bg-base-200 shadow-lg w-96">
            <div className="card-body">
              <h2 className="card-title">What do I do?</h2>
              <p>
                <ul>
                  <li>- Web applications</li>
                  <li>- Discord bots</li>
                  <li>- Telegram bots</li>
                </ul>
              </p>
            </div>
          </div>
        </Parallax>
        <Parallax speed={10}>
          <div className="card bg-base-200 shadow-lg w-96">
            <div className="card-body">
              <h2 className="card-title">My projects</h2>
              <p>
                I have made different projects. Such as:
                <ul>
                  <li>- ChatGPT Desktop App</li>
                  <li>- Telegram Automation System</li>
                  <li>- Xray and mihmo GUI app</li>
                  <li>... And more</li>
                </ul>
              </p>
              <a
                href="https://github.com/velaton618"
                className="btn btn-primary mt-4"
              >
                My Github
              </a>
            </div>
          </div>
        </Parallax>
      </div>
      <div
        className="hero"
        style={{ height: "100vh", backgroundImage: "url(third.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Contact me</h1>
            <p>
              If you want to contact me, you can do it by:
              <ul>
                <li>
                  - Email:
                  <a
                    href="mailto:velaton618@gmail.com"
                    className="text-primary"
                  >
                    {" "}
                    velaton618@gmail.com
                  </a>
                </li>
                <li>
                  - Telegram:{" "}
                  <a href="https://t.me/velaton618" className="text-primary">
                    @velaton618
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="hero">Yes, I ❤️ Airports</div>
    </div>
  );
}

export default App;
