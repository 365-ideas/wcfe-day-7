import { ease } from "./ease";

export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

export const presenceAnim = (variants, state) => {
  return {
    initial: "initial",
    animate: state ? "animate" : "initial",
    variants,
  };
};

export const TitlePresence = {
  initial: {
    clipPath: "inset(0% -20% 100% -20%)",
    y: "70%",
  },
  animate: ({id, duration}) => ({
    clipPath: "inset(-20% -20% -20% -20%)",
    y: "0%",
    transition: {
      duration,
      ease: ease.outExpo,
      delay: ((id + 1) * 0.15),
    },
    transitionEnd: {
      clipPath: "none",
      y: "auto",
    }
  }),
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    y: "100%",
  },
}

export const IconAnim = {
  star: {
   
  }
}
