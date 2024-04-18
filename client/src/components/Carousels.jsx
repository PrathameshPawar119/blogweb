import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carousels = () => {
  const slides = [
    {
      title: "Web Dev",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis fugiat quidem, dolor, sed optio nostrum saepe ipsum debitis tempore natus",
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      title: "Web Dev",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis fugiat quidem, dolor, sed optio nostrum saepe ipsum debitis tempore natus",
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      title: "Web Dev",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis fugiat quidem, dolor, sed optio nostrum saepe ipsum debitis tempore natus",
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      title: "Web Dev",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis fugiat quidem, dolor, sed optio nostrum saepe ipsum debitis tempore natus",
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];
  return (
    <div className="h-full container m-auto sm:py-16 py-6 sm:px-4 px-2 relative group rounded-3xl flex items-center justify-center ">
      <Carousel className="flex items-center justify-center h-[80vh] overflow-hidden w-full rounded-3xl">
        {slides.map((img, index) => (
          <Carousel.Item
            className="w-full h-[80vh] rounded-3xl bg-center bg-cover duration-500"
            style={{ backgroundImage: `url(${img.url})` }}
            key={index}
          >
            <Carousel.Caption className="space-y-3">
              <h3 className="font-bold text-5xl">{img.title}</h3>
              <p className="text-lg">{img.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
