import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const places = [
  "Los Frailes",
  "El Almirante",
  "La Ureña",
  "El Bonito",
  "Los Mameyes",
  "Prado Oriental",
  "Brisa Orienta",
  "Nuevo Amanecer"
]

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Planes Internet Fibra
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Disfruta de Streaming, descargas de videos en HD, juegos en líneas sin fallas, videoconferencias, fotos, videos, redes sociales y mucho más.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="h-6/8 flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/wifi.png"
                    width={145}
                    height={145}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Plan Básico 20Mbps/5Mbps
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Impuestos incluidos
                  </li>
                  <li className="relative check custom-list my-2">
                    Instalación en 24 horas
                  </li>
                  {/*                   <li className="relative check custom-list my-2">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li> */}
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                    Free
                  </p> */}
                  <ButtonOutline>LO QUIERO</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="h-6/8 flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/wifi.png"
                    width={145}
                    height={145}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Plan Intermedio 35Mbps/15Mbps
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Impuestos incluidos
                  </li>
                  <li className="relative check custom-list my-2">
                    Instalacion en 24 horas
                  </li>
                  {/* <li className="relative check custom-list my-2">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                  <li className="relative check custom-list my-2">
                    Connect Anyware{" "}
                  </li> */}
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                    $9 <span className="text-black-500">/ mo</span>
                  </p> */}
                  <ButtonOutline>LO QUIERO</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="h-6/8 flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/wifi.png"
                    width={145}
                    height={145}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Plan Avanzado 50Mbps/20Mbps
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Impuestos incluidos
                  </li>
                  <li className="relative check custom-list my-2">
                    Instalación en 24 horas
                  </li>

                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                    $12 <span className="text-black-500">/ mo</span>
                  </p> */}

                  <ButtonOutline>LO QUIERO</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="h-6/8 flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/wifi.png"
                    width={145}
                    height={145}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Plan Avanzado Plus 70Mbps/30Mbps
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Impuestos incluidos
                  </li>
                  <li className="relative check custom-list my-2">
                    Instalación en 24 horas
                  </li>

                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                    $12 <span className="text-black-500">/ mo</span>
                  </p> */}

                  <ButtonOutline>LO QUIERO</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="h-6/8 flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/wifi.png"
                    width={145}
                    height={145}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Plan Max 100Mbps/50Mbps
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Impuestos incluidos
                  </li>
                  <li className="relative check custom-list my-2">
                    Instalación en 24 horas
                  </li>

                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                    $12 <span className="text-black-500">/ mo</span>
                  </p> */}

                  <ButtonOutline>LO QUIERO</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="h-6/8 flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/wifi.png"
                    width={145}
                    height={145}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Plan Max Plus 200Mbps/75Mbps
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Impuestos incluidos
                  </li>
                  <li className="relative check custom-list my-2">
                    Instalación en 24 horas
                  </li>

                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  {/* <p className="text-2xl text-black-600 text-center mb-4 ">
                    $12 <span className="text-black-500">/ mo</span>
                  </p> */}

                  <ButtonOutline>LO QUIERO</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Cobertura
            </motion.h3>
            <motion.p className="text-justify leading-normal  mx-auto my-4 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              Contamos con una robusta infraestructura en fibra óptica en los siguientes sectores:


              {/* <div className="sm:w-5/6 md:w-5/6 flex w-4/6 m-auto mt-5">
              <ul className="list-disc flex flex-col list-inside pl-6 xl:pl-0 items-right justify-start text-left text-black-500 flex-grow">
                <li className="relative my-1">
                  Los Frailes
                </li>
                <li className="relative custom-list my-1">
                  El Almirante
                </li>
                <li className="relative custom-list my-1">
                  La Ureña
                </li>
                <li className="relative custom-list my-1">
                  El Bonito
                </li>
              </ul>
              <ul className="list-disc flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative custom-list my-1">
                  Los Mameyes
                </li>
                <li className="relative custom-list my-1">
                  Prado Oriental
                </li>
                <li className="relative custom-list my-1">
                  Brisa Oriental
                </li>
              </ul>

            </div> */}

            <div className="flex flex-row w-full items-center justify-center"> 

            <ul className="text-black-300 self-start list-inside ml-8 mt-8">
                {places.slice(0, 4).map((place, index) => (
                  <motion.li
                    className="relative circle-check custom-list mr-2"

                    custom={{ duration: 2 + index }}
                    variants={scrollAnimation}
                    key={place}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: .2
                      }
                    }}>
                    {place}
                  </motion.li>
                )
                )}
              </ul>
              <ul className="text-black-300 self-start list-inside ml-8 mt-8">
                {places.slice(4).map((place, index) => (
                  <motion.li
                    className="relative circle-check custom-list"

                    custom={{ duration: 2 + index }}
                    variants={scrollAnimation}
                    key={place}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: .2
                      }
                    }}>
                    {place}
                  </motion.li>
                )
                )}
              </ul>


            </div>



            </motion.p>

          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-0" variants={scrollAnimation}>
              {/* <Maps className="w-full h-auto" /> */}
              <Image
                src="/assets/final.png"
                className="rounded-lg"
                width={1392}
                height={735}
                fill={true}
                alt="Free Plan"
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="hidden w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              {/* <Netflix className="h-18 w-auto" /> */}
              <img
                src="/assets/Icon/amazon.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="hidden flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with great
              pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
