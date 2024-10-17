import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bellImage from "../assets/Bell Image.png";
import qrCodeImage from "../assets/qrCode.png";
// import { BsQrCodeScan } from "react-icons/bs";
import { LuQrCode } from "react-icons/lu";

import ApplicationDownload from "../components/WelcomePage/ApplicationDownload";

const Welcome = () => {
  const navigate = useNavigate();
  const handleStartScan = () => {
    navigate("/scan");
  };
  useEffect(() => {
    console.log("Welcome Page");
  }, []);
  return (
    <div className="flex flex-col justify-between h-full relative ">
      {/* <header className="h-[10%]"></header> */}
      <section className="flex flex-col items-center justify-evenly h-full pb-10 px-4">
        <h1 className="text-center text-3xl font-bold">
          Welcome to <br /> FUDRING
        </h1>
        <p className="text-center text-xl font-normal">
          Waiting is over! we will let you know the time your food is ready
        </p>
        <div className="w-90 absolute top-[20%] items-center  flex justify-center">
          <img
            src={bellImage}
            alt=""
            className="opacity-10  "
            height={500}
            width={500}
          />
        </div>
        {/* <p className="text-center text-xl font-normal">Web site has only limited features. Download our free mobile app</p> */}
        <ApplicationDownload />
      </section>
      <footer className="h-[15%]  flex items-end">
        <div className="bg-lightBlue h-20 flex justify-center relative w-full">
          <div className="w-20 h-20 border border-lightBlue rounded-full absolute -top-10 overflow-hidden bg-white flex justify-center items-center">
            {/* <img src={qrCodeImage} alt="" className="scale-125" /> */}
            <LuQrCode size={60} color="#5A88FF" />

          </div>
        </div>
      </footer>

      {/* <p onClick={handleStartScan}>Click on the Scan button to start scanning.</p> */}
    </div>
  );
};

export default Welcome;
