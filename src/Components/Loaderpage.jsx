import React, { useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".char", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out"
    });

    tl.to(".char", {
      y: -60,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
      ease: "power4.in"
    });

    tl.to(".Loaderpage", {
      y: -1200,
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => {
        navigate("/RegisterForm");
      }
    });
  }, [navigate]);

  return (
    <div className="Loaderpage">
      <h1>
        {"Career-Hunt".split("").map((char, i) => (
          <span key={i} className="char">{char}</span>
        ))}
      </h1>
    </div>
  );
};

export default Loader;
