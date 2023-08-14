import React from "react";
import HeroImg from "../assets/images/hero.jpg";
import CountUp from "react-countup";

const Hero = () => {
  const openResumeInNewTab = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* Hero left content*/}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello and Welcome,
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Hung (Dan) Nguyen <br />
              Full-Stack Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <button
                onClick={openResumeInNewTab}
                className="flex items-center gap-2 bg-primaryColor text-white font-[500] hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] "
              >
                <i class="ri-mail-line"> My Resume</i>
              </button>

              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-solid border-smallTextColor"
              >
                See my portfolio
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-command-line"></i>
              </span>
              Welcome to my portfolio website! Explore a showcase of my creative
              endeavors and professional work, and discover the passion and
              dedication I bring to each project.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Connect me:
              </span>
              <span>
                <a
                  className="flex items-center justify-center gap-2 text-smallTextColor text-[18px] font-[600]"
                  href="https://www.linkedin.com/in/dan-nguyen0626/"
                >
                  <i class="ri-linkedin-box-fill"> Linkedin</i>
                </a>
              </span>

              <span>
                <a
                  className="flex items-center justify-center gap-2 text-smallTextColor text-[18px] font-[600]"
                  href="https://github.com/Dan1Nguyen01"
                >
                  <i class="ri-github-fill"> GitHub</i>
                </a>
              </span>

              {/* <span>
                <a
                  className="flex items-center justify-center gap-2 text-smallTextColor text-[18px] font-[600]"
                  href="https://leetcode.com/dannguyen062601/"
                >
                  <AiFillCodepenCircle /> LeetCode
                </a>
              </span> */}
            </div>
          </div>
          {/* Hero left end*/}
          {/* Hero img start*/}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center ">
              <img src={HeroImg} className="rounded-xl" alt="" />
            </figure>
          </div>
          {/* Hero img end*/}
          {/* Hero content right */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={2} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of experience
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={10} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={99.99} duration={3} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success Rate
              </h4>
            </div>
          </div>
          {/* Hero content right end */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
