"use client";
import { Logo } from "@/components/Logo/Logo";
import React, { use, useContext, useEffect, useRef, useState } from "react";
import "./HomePage.scss";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { LoaderContext } from "@/providers/LoaderProvider/LoaderProvider";
import { ease } from "@/helpers/ease";
import { presenceAnim, TitlePresence } from "@/helpers/anim";

export default function HomePage() {
  const { loaderFinished, setLoaderFinished } = useContext(LoaderContext);

  return (
    <div className="home">
      <div className="container">
        <div className="left">
          <div className="top-title">
            <motion.h1 {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 0, duration: 1 }}>Typography is the</motion.h1>
            <motion.h1 {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 1, duration: 1 }}>technique</motion.h1>
          </div>

          <div className="bottom">
            <div className="text-wrapper">
              <motion.p {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 2, duration: 1 }}>Our team</motion.p>
              <motion.p {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 3, duration: 1 }}>The origins of typography date back</motion.p>
            </div>
            <div className="text-wrapper">
              <div className="text-top">
                <motion.h2 {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 2, duration: 1 }}>Fruit boxes</motion.h2>
                <motion.span {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 2.4, duration: 1 }}>Cosmetic</motion.span>
                <motion.span {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 2.8, duration: 1 }}>Types</motion.span>
              </div>
              <motion.p {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 3, duration: 1 }}>Typography is the art and technique</motion.p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div className="text-wrapper">
              <motion.p {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 2, duration: 1 }}>as</motion.p>
              <motion.p {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 2.4, duration: 1 }} className="bold">such</motion.p>
              <motion.p {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 2.8, duration: 1 }}>left-aligned</motion.p>
            </div>
            <motion.p {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 3, duration: 1 }} className="text">playing a crucial role in graphic design and</motion.p>
          </div>
          <div className="bottom">
            <motion.h1 {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 2, duration: 1 }}>1997</motion.h1>
            <motion.h1 {...presenceAnim(TitlePresence, loaderFinished)}
                custom={{ id: 3, duration: 1 }}>Bi Sheng</motion.h1>
          </div>
        </div>
      </div>
      <Icon setLoaderFinished={setLoaderFinished}/>
    </div>
  );
}

const Icon = ({ setLoaderFinished }) => {
  const iconRef = useRef();
  const iconInit = useAnimation();
  const starAnim = useAnimation();
  const verticalLine1Anim = useAnimation();
  const verticalLine2Anim = useAnimation();
  const horizontal1LineAnim = useAnimation();
  const horizontal2LineAnim = useAnimation();

  useEffect(() => {
    const iconAnim = async () => {
      await iconInit.set({
        opacity: 1,
      });
      await starAnim.set({
        rotate: "45deg",
        scale: 1.2,
        opacity: 0,
        filter: "blur(0.5vw)",
      });
      verticalLine1Anim.set({
        clipPath: "inset(0% 60% 0% 40%)",
      });
      verticalLine2Anim.set({
        clipPath: "inset(60% 0% 40% 0%)",
      });
      horizontal1LineAnim.set({
        clipPath: "inset(0% 0% 100% 0%)",
      });
      horizontal2LineAnim.set({
        clipPath: "inset(0% 0% 100% 0%)",
      });

      await starAnim.start({
        rotate: "45deg",
        scale: 1,
        opacity: 1,
        filter: "blur(0vw)",
        transition: {
          duration: 1,
          ease: ease.inOutExpo,
        },
      });

      starAnim.start({
        rotate: "0deg",
        transition: {
          duration: 1.5,
          ease: ease.inOutExpo,
          onUpdate: (progress) => {
            if (progress < "30deg") {
              setLoaderFinished(true);
            }
          },
        },
      });

      const lineTransition = {
        duration: 1.7,
        delay: .3,
        ease: ease.inOutExpo,
      }

      verticalLine1Anim.start({
        clipPath: "inset(0% 0% 0% 0%)",
        transition: lineTransition,
      });
      verticalLine2Anim.start({
        clipPath: "inset(0% 0% 0% 0%)",
        transition: lineTransition,
      });
      horizontal1LineAnim.start({
        clipPath: "inset(0% 0% 0% 0%)",
        transition: lineTransition,
      });
      horizontal2LineAnim.start({
        clipPath: "inset(0% 0% 0% 0%)",
        transition: lineTransition,
      });
    };

    if (iconRef) {
      iconAnim();
    }
  }, [iconRef]);

  return (
    <motion.svg
      width="1094"
      height="1080"
      className="icon-wrapper"
      viewBox="0 0 1094 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={iconRef}
      animate={iconInit}
    >
      <motion.g
        clip-path="url(#clip0_1190_750)"
        className="icon-anim"
        animate={starAnim}
      >
        <path
          d="M499.36 742.447L430.142 661.771L418.684 673.23L499.36 742.447Z"
          fill="black"
        />
        <path
          d="M349.453 592.541L418.684 673.23L430.142 661.771L349.453 592.541Z"
          fill="black"
        />
        <path
          d="M349.1 742.814L430.116 673.203L418.711 661.798L349.1 742.814Z"
          fill="black"
        />
        <path
          d="M499.714 592.2L418.711 661.798L430.116 673.203L499.714 592.2Z"
          fill="black"
        />
        <path
          d="M424.277 725.386L428.814 667.49L420.013 667.511L424.277 725.386Z"
          fill="black"
        />
        <path
          d="M424.55 609.615L420.013 667.511L428.814 667.49L424.55 609.615Z"
          fill="black"
        />
        <path
          d="M366.528 667.637L424.403 671.901L424.424 663.1L366.528 667.637Z"
          fill="black"
        />
        <path
          d="M482.299 667.364L424.424 663.1L424.403 671.901L482.299 667.364Z"
          fill="black"
        />
      </motion.g>
      <g clip-path="url(#clip0_1190_750)">
        <motion.line
          opacity="0.7"
          x1="2.64645"
          y1="1090.65"
          x2="1093.65"
          y2="-0.354501"
          stroke="black"
          animate={verticalLine1Anim}
        />
        <motion.rect
          y="667.5"
          width="290"
          height="1"
          fill="black"
          animate={horizontal1LineAnim}
        />
        <motion.line
          opacity="0.7"
          x1="424.5"
          y1="83"
          x2="424.5"
          y2="1091"
          stroke="black"
          animate={verticalLine2Anim}
        />
        <motion.rect
          x="558"
          y="667.5"
          width="290"
          height="1"
          fill="black"
          animate={horizontal2LineAnim}
        />
      </g>
      <defs>
        <clipPath id="clip0_1190_750">
          <rect width="1094" height="1080" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};
