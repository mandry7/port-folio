import { IoHandRightSharp } from "react-icons/io5";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";

import { ProjectList } from "data/data";
import me7 from "assets/image/me7.png";

import "assets/scss/home.scss";
import "assets/scss/about.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ContactLink from "components/ContactLink";
import HomeDescription from "components/HomeDescription";
import ClockView from "components/ClockView";
import CardProject from "components/CardProject";

const Home = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
  };

  return (
    <div className="home-container">
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center">
          <img
            src={me7}
            alt="me"
            className="w-40 h-40 rounded-full border-2 border-yellow-500"
            loading="lazy"
          />
          <ContactLink />{" "}
          <div className="flex">
            <ClockView />
            <div className="meteo"></div>
          </div>
        </div>

        <div className="description mt-2">
          <div className="greeting flex items-center gap-3">
            <div className="flex flex-col">
              <h1 className="title mb-8">
                Hello !! <IoHandRightSharp className="icon " />
              </h1>

              <div className="flex gap-2">
                <h1 className="title">I am </h1>
                <Typewriter
                  options={{
                    strings: [
                      "Mandrindra",
                      "Software Developer",
                      "a Freelancer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: "wrapper",
                    cursorClassName: "cursor",
                  }}
                />
              </div>
            </div>
          </div>

          <HomeDescription />
        </div>
        <div className="slick ml-16">
          <Link className=" text-yellow-500 title underline" to="/project">
            ALL PROJECT HERE
          </Link>
          <div className="mt-5">
            <Slider {...settings}>
              {ProjectList.map((project) => (
                <div
                  key={project.id}
                  onClick={() => navigate(`/project/?id=${project.id}`)}
                  className="project-item"
                >
                  <CardProject {...project} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
