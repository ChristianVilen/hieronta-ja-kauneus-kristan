import React from "react";
import { useState } from "react";

interface state {
  key: number;
  open: boolean;
}

const initialState: state = {
  key: null,
  open: false,
};

const Services = ({ services }: any) => {
  const [state, setState] = useState([initialState]);

  const clickHandler = (key: number) => {
    state.map((service) => {
      if (service.open === false) {
        let newState = {
          key,
          open: true,
        };
        setState([newState]);
      } else {
        let newState = {
          key,
          open: false,
        };
        setState([newState]);
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5 sm:pt-12 lg:pb-4 sm:my-auto">
      {services.map((item, index) => (
        <div
          className={
            "text-left py-2 px-8 bg-white shadow-lg rounded-lg my-5 hover:shadow-2xl cursor-pointer w-11/12 md:w-full lg:w-9/12"
          }
          onClick={() => clickHandler(index)}
          key={index}
        >
          <div className="inline-flex flex-col">
            <h3 className="text-left text-gray-800 text-2xl mt-1">
              {item.title}
            </h3>
            {state.map((i) => {
              if (i.key === index && i.open) {
                return (
                  <p
                    className="fade-in mt-2 text-left text-gray-600"
                    key={i.key}
                  >
                    {item.desc}
                  </p>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
