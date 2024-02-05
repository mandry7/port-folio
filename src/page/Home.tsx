import { IoHandRightSharp } from "react-icons/io5";
import Typewriter from "typewriter-effect";

import me7 from "assets/image/me7.png";

import "assets/scss/home.scss";
import ContactLink from "components/ContactLink";

const Home = () => {
  return (
    <div className="home-container">
      <div className="flex flex-col items-center gap-8">
        <img
          src={me7}
          alt="me"
          className="w-40 h-40 rounded-full border-2 border-yellow-500"
        />
        <div className="description">
          <div className="flex items-center gap-3">
            <h1 className="title">Hello !!</h1>
            <IoHandRightSharp className="icon " />
          </div>
          <div className="flex gap-2">
            <h1 className="title">I am </h1>
            <Typewriter
              options={{
                strings: [
                  "Mandrindra RANARIJAONA",
                  "Software Developer",
                  "Freelancer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                wrapperClassName: "wrapper",
                cursorClassName: "cursor",
              }}
            />
          </div>
          <div className="mt-8">
            <p className="text-2xl text-gray-300">
              I love to resolve problem that's why I chose programming
            </p>
            <p className="text-2xl text-gray-300">
              I am really good in{" "}
              <span className="text-yellow-500 font-medium uppercase">
                javascript{" "}
              </span>
              and his framework{" "}
              <span className="text-yellow-500 font-medium uppercase">
                REACT
              </span>{" "}
              and{" "}
              <span className="text-yellow-500 font-medium uppercase">VUE</span>{" "}
              but <br />I have already worked in{" "}
              <span className="text-yellow-500 font-medium uppercase">
                JAVA{" "}
              </span>
              and{" "}
              <span className="text-yellow-500 font-medium uppercase">
                NODE
              </span>
            </p>
            <p className="text-2xl text-gray-300">
              I am a friendly guy and good in communication
            </p>
            <p className="text-2xl text-gray-300">
              I am punctual and honest
            </p>
          </div>
        </div>
        <ContactLink />

      </div>
    </div>
  );
};

export default Home;
