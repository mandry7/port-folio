import { IoHandRightSharp } from "react-icons/io5";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";

import { ProjectList } from "data/data";
import me7 from "assets/image/me7.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ContactLink from "components/ContactLink";
import HomeDescription from "components/HomeDescription";
import CardProject from "components/CardProject";

const Home = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    centerMode: true,
  };

  return (
    <div className="relative z-10 text-gray-900 dark:text-white px-6 md:px-12 pt-20 md:pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex flex-col items-center gap-6 lg:w-1/4">
          <img
            src={me7}
            alt="me"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-4 border-[#F4991A] shadow-lg shadow-[rgba(244,153,26,0.3)]"
            loading="lazy"
          />
          <ContactLink />
        </div>
        <div className="flex-1 bg-gradient-to-r from-gray-100 to-[#344F1F]/90 dark:bg-gradient-to-r dark:from-gray-900 dark:to-[#344F1F] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-3">
            Hello!{" "}
            <IoHandRightSharp className="text-[#F4991A] text-4xl animate-waving-hand" />
          </h1>

          <div className="flex flex-wrap gap-2 items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200">
              I am
            </h2>
            <Typewriter
              options={{
                strings: ["Mandrindra", "Software Developer", "Freelancer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                wrapperClassName:
                  "text-[#F4991A] text-2xl md:text-3xl font-bold",
                cursorClassName:
                  "text-[#F4991A] text-2xl md:text-3xl font-bold",
              }}
            />
          </div>

          <HomeDescription />
        </div>

        {/* Right Column (Projects) */}
        <div className="lg:w-1/3 flex flex-col items-center">
          <Link
            className="text-[#F4991A] text-lg md:text-xl font-semibold underline hover:text-[#F4991A]/80 transition"
            to="/project"
          >
            All Projects →
          </Link>
          <div className="mt-6 w-full max-w-md project-slider">
            <Slider {...settings}>
              {ProjectList.map((project) => (
                <div
                  key={project.id}
                  onClick={() => navigate(`/project/?id=${project.id}`)}
                  className="cursor-pointer transition-transform hover:scale-[1.02]"
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
