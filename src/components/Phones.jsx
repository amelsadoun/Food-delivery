import Phone1 from "../assets/Phone1.png";
import Phone2 from "../assets/Phone2.png";
import Phone3 from "../assets/Phone3.png";


export default function Phones() {
  return (
    <div className="flex-column items-center justify-center">
        <hr className="my-10"/>
        <h3 className="font-bold color-black text-5xl my-10 text-center mx-0">How the app works</h3>
      <PhoneOnLeft
        image={Phone1}
        orangeTitle="Create an account"
        blackTitle="Create/login to an existing
account to get started"
        phrase="An account is created with your email
and a desired password"
      ></PhoneOnLeft>
      <PhoneOnRight
        image={Phone2}
        orangeTitle="Explore varieties"
        blackTitle="Shop for your favorites
        meal as e dey hot."
        phrase="Shop for your favorite meals or drinks
        and enjoy while doing it."
      ></PhoneOnRight>
      <PhoneOnLeft
        image={Phone3}
        orangeTitle="Checkout"
        blackTitle="When you done check out
        and get it delivered."
        phrase="When you done check out and get it 
        delivered with ease."
      ></PhoneOnLeft>
    </div>
  );
}

function PhoneOnLeft(props) {
  return (
    <div className="flex flex-row mx-44 justify-between gap-5">
      <div className="flex self-start align-middle ml-10">
        <img src={props.image} alt="image :)" />
      </div>
      <div className="flex-column flex-1 align-center items-center self-center ml-20 justify-between">
        <h3 className=" font-bold text-orange">{props.orangeTitle}</h3>
        <h2 className="my-6 font-bold text-dark-blue text-5xl ">
          {props.blackTitle}
        </h2>
        <h4 className="font-light text-2xl text-gray">{props.phrase}</h4>
      </div>
    </div>
  );
}

function PhoneOnRight(props) {
    return (
      <div className="flex flex-row mx-44 justify-between gap-5">
        <div className="flex-column flex-1 align-center items-center self-center ml-0 justify-between">
          <h3 className=" font-bold text-orange">{props.orangeTitle}</h3>
          <h2 className="my-6 font-bold text-dark-blue text-5xl ">
            {props.blackTitle}
          </h2>
          <h4 className="font-light text-2xl text-gray">{props.phrase}</h4>
        </div>
        <div className="flex mx-10 self-start align-middle">
          <img src={props.image} alt="image :)" />
        </div>
      </div>
    );
  }