import bgimage from "../assets/background-image.png";
import Spline from "@splinetool/react-spline";
import Phone1 from "../assets/Phone1.png";

export default function Hero() {
  return (
    <div
      className="flex-column text-center items-center justify-center py-20 px-32"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <h5 className="text-2xl font-bold text-subtle-white">Food app</h5>
      <h2 className="text-6xl font-bold text-subtle-white mx-10">
        Why stay hungry when you can order form Bella Onojie?
      </h2>
      <h6 className="text-subtle-white font-medium text-2xl my-7">
        Download the bella onoje’s food app now on
      </h6>
      <div className="flex-row justify-between my-7">
        <button className="px-10 py-4 text-subtle-white border-solid border-white bg-orange rounded-3xl font-bold text-2xl mx-4">
          Playstore
        </button>
        <button className="px-10 py-4 text-subtle-white border-solid border-white border rounded-3xl font-bold text-2xl mx-4">
          App store
        </button>
      </div>
      <Spline
        className="absolute top-21 center left-0 right-0"
        scene="https://prod.spline.design/xlF4bLfMPHlsFSng/scene.splinecode"
      ></Spline>
    </div>
  );
}
