import React, { useState } from "react";
import Page from "../components/layout/Page";
import { pricingHead, services } from "data";

interface state {
  key: number;
  open: boolean;
}

const initialState: state = {
  key: null,
  open: false,
};

const Hinnasto = () => {
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

  const shortenText = (text: string) => {
    let maxLength = 100;

    return text.length > maxLength
      ? text.substr(0, maxLength - 1) + "..."
      : text;
  };

  return (
    <Page title="Hinnasto" desciption="Palveluiden hinnasto" className="mb-4">
      <h1 className="text-3xl text-center font-bold m-5">Hinnasto</h1>
      <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-white text-gray-800">
        <tbody>
          <tr className="text-left border-b-2 border-gray-300">
            {pricingHead.map((item, index: number) => (
              <th className="px-4 py-3 text-gray" key={index}>
                <h2 className="p-0 m-0 text-xl">{item.title}</h2>
              </th>
            ))}
          </tr>

          {services.map((item, index: number) => (
            <tr className="bg-gray-100 border-b border-gray-200" key={index}>
              <td className="px-4 py-3 text-left">
                <h3 className="p-0 m-0 text-lg">{item.title}</h3>
                {state.map((i) => {
                  if (i.key === index && i.open) {
                    return (
                      <div
                        className="hover: cursor-pointer"
                        onClick={() => clickHandler(index)}
                        key={index}
                      >
                        <br />
                        {item.desc}
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="hover: cursor-pointer"
                        onClick={() => clickHandler(index)}
                        key={index}
                      >
                        <br />
                        {shortenText(item.desc)}
                      </div>
                    );
                  }
                })}
              </td>
              <td className="px-4 py-3">{item.price}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  );
};

export default Hinnasto;
