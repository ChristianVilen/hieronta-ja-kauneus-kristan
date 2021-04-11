import React from "react";

// interface serviceType {
//   services: [
//     {
//       title: string;
//       desc: string;
//     }
//   ];
// }

const Services = ({ services }: any) => {
  return (
    <>
      {services.map((item, index) => (
        <div className="inline-flex flex-col w-10/12 lg:w-3/4" key={index}>
          <h3 className="text-left text-xl mt-5 mb-3 text-gray-700">
            {item.title}
          </h3>
          <p className="ml-10 text-left text-xs text-gray-600">{item.desc}</p>
        </div>
      ))}
    </>
  );
};

export default Services;
