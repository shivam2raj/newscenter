import React from "react";
import { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Carousel() {
  const slides = [
    {
      url: "https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=1024x1024&w=is&k=20&c=S9FBe3KUvooZHZktJzr8Nt94wtg56BQTQiqAz8zUK8M=",
    },

    {
      url: "https://media.istockphoto.com/id/1407335249/photo/professional-female-presenter-reporting-on-current-events-television-cable-channel.jpg?s=1024x1024&w=is&k=20&c=WKCc6QsGEVSbWzpMh4m12bw8AbMXCjmPEaQChzgW2_w=",
    },

    {
      url: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const [currentIndex, setcurrentIndex] = useState(0);
  let slideInterval;
  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();

    return () => {
      clearInterval(slideInterval);
    };
  });

  const startSlider = () => {
    slideInterval = setInterval(() => {
      nextIndex();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const prevIndex = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
    slideRef.current.classList.add("fade-anim");
  };

  const nextIndex = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div>
      <div className="max-w-[1440px] h-[720px] w-full m-auto py-4 px-4 relative">
        <div
          ref={slideRef}
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          {/* left button */}
          {/* <div className="'absolute top-[50%] -translate-x-0 translate-y-[700%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
    <BsChevronCompactLeft onClick={prevIndex} />
</div> */}

          {/* right button */}
          {/* <div className="'absolute top-[50%] -translate-x-[-97%] translate-y-[600%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
<BsChevronCompactRight onClick={nextIndex}/>
 </div> */}
        </div>
      </div>
    </div>
  );
}
