import { useState } from "react";
import ClassesBox from "../components/ClassesBox/ClassesBox";
import Footer from "../components/Footer/Footer";

function Classes() {
  const [load, setLoad] = useState(true);

  const loadMore = () => {
    setLoad(!load);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="login-section text-center ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Classes
          </h1>
        </div>

        {/* boxes 1*/}
        <div
          className={`container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1  grid-cols-3 grid-rows-3 text-left ${
            load ? "grid" : "hidden"
          }`}
        >
          <ClassesBox
            bgImg="cycling-bg"
            title="Cycling"
            trainer="Vikas Sharma"
            date="Wed: 9:00 am"
          />
          <ClassesBox
            bgImg="meditaion-bg"
            title="Meditation"
            trainer="Mukesh Khanna"
            date="Fri: 7:00 am"
          />
          <ClassesBox
            bgImg="mma-bg"
            title="Boxing"
            trainer="John Abhrahim"
            date="Tue: 4:00 pm"
          />
          <ClassesBox
            bgImg="karate-bg"
            title="Karate"
            trainer="Daksesh Joshipura"
            date="Sat: 9:00 pm"
          />
          <ClassesBox
            bgImg="powerlift-bg"
            title="Power Lifting"
            trainer="Lorentz Carpenter"
            date="Mon: 8:00 pm"
          />
          <ClassesBox
            bgImg="workout-bg"
            title="Workout"
            trainer="Shikhar Pawan"
            date="Sun: 10:00 am"
          />
          <ClassesBox
            bgImg="crossfit-bg"
            title="Crossfit"
            trainer="Jenifer Jegam"
            date="Wen: 9:00 am"
          />
          <ClassesBox
            bgImg="running-bg"
            title="Running"
            trainer="Zeel Patel"
            date="Fri: 6:00 am"
          />
        </div>

        {/* boxes 2*/}
        <div
          className={`container gap-12 page-padding py-[10rem] grid-cols-3 md1000:grid-cols-2 min620:grid-cols-1  grid-rows-3 text-left  ${
            load ? "hidden" : "grid"
          }`}
        >
          <ClassesBox
            bgImg="cycling-bg"
            title="Cycling"
            trainer="Vikas Sharma"
            date="Wed: 9:00 am"
          />
          <ClassesBox
            bgImg="meditaion-bg"
            title="Meditation"
            trainer="Mukesh Khanna"
            date="Fri: 7:00 am"
          />
          <ClassesBox
            bgImg="mma-bg"
            title="Boxing"
            trainer="John Abhrahim"
            date="Tue: 4:00 pm"
          />
          <ClassesBox
            bgImg="karate-bg"
            title="Karate"
            trainer="Daksesh Joshipura"
            date="Sat: 9:00 pm"
          />
          <ClassesBox
            bgImg="powerlift-bg"
            title="Power Lifting"
            trainer="Lorentz Carpenter"
            date="Mon: 8:00 pm"
          />
          <ClassesBox
            bgImg="workout-bg"
            title="Workout"
            trainer="Shikhar Pawan"
            date="Sun: 10:00 am"
          />
          <ClassesBox
            bgImg="crossfit-bg"
            title="Crossfit"
            trainer="Jenifer Jegam"
            date="Wen: 9:00 am"
          />
          <ClassesBox
            bgImg="running-bg"
            title="Running"
            trainer="Zeel Patel"
            date="Fri: 6:00 am"
          />
          <ClassesBox
            bgImg="bodybuilding-bg"
            title="Body Building"
            trainer="Jyan Khan"
            date="Mon: 8:00 pm"
          />
          <ClassesBox
            bgImg="box-bg"
            title="Mma"
            trainer="Ramesh Pokhriyal"
            date="Fri: 6:00 am"
          />
          <ClassesBox
            bgImg="yoga-bg"
            title="Yoga"
            trainer="Anushka Dubey"
            date="Wen: 8:00 am"
          />
          <ClassesBox
            bgImg="fitness-bg"
            title="Fitness"
            trainer="Aadh Verma"
            date="Sun: 5:00 pm"
          />
        </div>

        <button
          className="text-[1.5rem] text-white bg-slate-600 px-14 py-6 font-medium uppercase shadow-2xl mb-14"
          onClick={() => {
            loadMore();
            goTop();
          }}
        >
          {load ? "show more" : "show less"}
        </button>

        <Footer />
      </section>
    </>
  );
}

export default Classes;
