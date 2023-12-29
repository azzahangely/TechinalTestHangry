import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import ayamkoplo from "../assets/ayamkoplo.jpeg";
import sangyu from "../assets/sangyu.jpeg";
import budesari from "../assets/budesari.jpeg";
import kopi from "../assets/kopi-dari-pada.jpeg";
import logo_ayam from "../assets/logo_ayamkoplo.png";
import logo_san from "../assets/logo_sangyu.png";
import logo_budesari from "../assets/logo_budesari.png";
import logo_kopi from "../assets/logo_daripada.svg";
import gofood from "../assets/gofood.svg";
import grabfood from "../assets/grabfood.png";
import zomato from "../assets/zomato.png";
import eat from "../assets/Eats.png";
import bulk_order_image from "../assets/image_promo.jpeg";
import { FiCheck } from "react-icons/fi";

const Content = () => {
  return (
    <div className="bg-white mx-8 lg:mx-[165px] mt-10 lg:mt-14">
      <p className="w-[286px] text-zinc-800 text-2xl font-bold font-['Inter'] leading-9 lg:w-[1110px] lg:text-[40px] lg:leading-[60px]">
        Hangry! adalah restoran dengan beragam brand
      </p>

      <div className="w-[328px] lg:w-[1110px] text-base lg:text-2xl font-normal font-['Inter'] leading-[21px lg:leading-9]">
        Kami menyajikan beragam brand untuk menemani setiap waktu santapmu
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-[30px] mt-6 lg:mt-8">
        <div className="flex flex-col w-[156px] lg:w-[350px] mb-4">
          <img
            src={ayamkoplo}
            alt="Ayam Koplo"
            className="w-[156px] h-[167px] lg:w-[350px] lg:h-[350px] rounded-2xl shadow"
          />
          <h1 className="text-zinc-800 text-sm lg:text-[32px] font-bold font-inter mt-2 lg:mt-6">
            Ayam Koplo
          </h1>
          <div className="flex items-center">
            <p className="text-zinc-600 text-[10px] lg:text-2xl font-normal font-inter">
              Ayam Geprek · Indonesia
            </p>
            <FiArrowRightCircle className="text-rose-800 text-base lg:text-2xl font-black ml-2" />
          </div>
        </div>

        <div className="flex flex-col w-[156px] lg:w-[350px] mb-4">
          <img
            src={sangyu}
            alt="sangyu"
            className="w-[156px] h-[167px] lg:w-[350px] lg:h-[350px] rounded-2xl shadow"
          />
          <h1 className="text-zinc-800 text-sm lg:text-[32px] font-bold font-inter mt-2 lg:mt-6">
            San Gyu
          </h1>
          <div className="flex items-center">
            <p className="text-zinc-600 text-[10px] lg:text-2xl font-normal font-inter">
              Beef Bowl · Jepang
            </p>
            <FiArrowRightCircle className="text-rose-800 text-base lg:text-2xl font-black ml-2" />
          </div>
        </div>

        <div className="flex flex-col w-[156px] lg:w-[350px] mb-4">
          <img
            src={budesari}
            alt="budesari"
            className="w-[156px] h-[167px] lg:w-[350px] lg:h-[350px] rounded-2xl shadow"
          />
          <h1 className="text-zinc-800 text-sm lg:text-[32px] font-bold font-inter mt-2 lg:mt-6">
            Bude Sari
          </h1>
          <div className="flex items-center">
            <p className="text-zinc-600 text-[10px] lg:text-2xl font-normal font-inter">
              Nasi Ayam · Indonesia
            </p>
            <FiArrowRightCircle className="text-rose-800 text-base lg:text-2xl font-black ml-2" />
          </div>
        </div>

        <div className="flex flex-col w-[156px] lg:w-[350px] mb-4 lg:hidden">
          <img
            src={kopi}
            alt="kopi"
            className="w-[156px] h-[167px] lg:w-[350px] lg:h-[350px] rounded-2xl shadow"
          />
          <h1 className="text-zinc-800 text-sm lg:text-[32px] font-bold font-inter mt-2 lg:mt-6">
            Kopi Dari|Pada
          </h1>
          <div className="flex items-center">
            <p className="text-zinc-600 text-[10px] lg:text-2xl font-normal font-inter">
              Minuman · Indonesia
            </p>
            <FiArrowRightCircle className="text-rose-800 text-base lg:text-2xl font-black ml-2" />
          </div>
        </div>
      </div>

      {/* FIND US FRAME*/}
      <div className="my-14 lg:my-32">
        <div className="text-center text-zinc-600 text-[10px] lg:text-xl font-normal font-['Inter'] leading-9">
          Hangry! dapat kamu temukan di
        </div>
        <div className="flex justify-between mt-4 lg:mt-8">
          <div className="flex items-center justify-center w-[78px] h-5 lg:w-60 lg:h-16">
            <img src={gofood} alt="Logo 1" className="object-cover" />
          </div>
          <div className="flex items-center justify-center w-[78px] h-5 lg:w-60 lg:h-16 ">
            <img src={grabfood} alt="Logo 1" />
          </div>
          <div className="flex items-center justify-center w-[78px] h-5 lg:w-60 lg:h-16 ">
            <img src={zomato} alt="Logo 1" />
          </div>
          <div className="flex items-center justify-center w-[78px] h-5 lg:w-60 lg:h-16">
            <img src={eat} alt="Logo 1" />
          </div>
        </div>
      </div>

      {/*  BULK ORDER*/}
      <div className="flex flex-col lg:flex-row w-[328px] h-[528px] lg:w-[1110px] lg:h-[534px] relative mb-14 lg:mb-32">
        {/* Left Column */}
        <div className="lg:w-1/2">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-2xl lg:text-[40px] font-bold text-gray-800">
              Makin rame, makin hemat!
            </h2>
            <p className="mt-4 w-[328px] lg:w-[540px] text-sm font-normal font-['Inter'] lew-[540px] text-zinc-600 lg:text-2xl leading-[21px]  lg:leading-9">
              Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja.
              Cocok untuk hidangan segala acara!
            </p>
            <div class="text-zinc-800 text-sm lg:text-2xl font-bold font-['Inter'] leading-9 mt-4">
              Beragam pilihan menu
            </div>
            <div class="text-zinc-800 text-sm lg:text-2xl font-bold font-['Inter'] leading-[21px] lg:leading-9">
              Semua menu diskon 20%
            </div>
            <div class="text-zinc-800 text-sm lg:text-2xl font-bold font-['Inter'] leading-[21px] lg:leading-9">
              Gratis biaya kirim
            </div>
            <div class="text-zinc-600 text-xs font-normal font-['Inter'] leading-[18px]">*Syarat & ketentuan berlaku</div>
            <div class="w-[328px] h-12 relative my-8 ">
              <div class="w-[328px] h-12 left-0 top-0 absolute bg-rose-800 rounded-lg"></div>
              <div class="left-[109px] top-[13px] absolute text-center text-white text-sm lg:text-base font-bold font-['Inter'] leading-[21px]">
                Pesan Sekarang
              </div>
              
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2">
          {/* Image Content */}
          <div className="flex justify-center items-center">
            <img
              className="w-full h-auto lg:w-auto lg:h-full rounded-lg"
              src={bulk_order_image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
