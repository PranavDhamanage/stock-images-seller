import { useState, useRef, useEffect } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  function mouseEnter() {
    setIsHovered(true);
  }

  function mouseLeave() {
    setIsHovered(false);
  }

  useEffect(() => {
    const domEle = ref.current;
    domEle.addEventListener("mouseenter", mouseEnter);
    domEle.addEventListener("mouseleave", mouseLeave);

    //cleanup function
    return () => {
      domEle.removeEventListener("mouseenter", mouseEnter);
      domEle.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return [ref, isHovered];
}

export default useHover;
