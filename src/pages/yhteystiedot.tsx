import React, { useEffect, useState } from "react";
import ContactForm from "components/contact/ContactForm";
import Page from "components/layout/Page";
import axios from "axios";
import textProcessor from "lambdas/mdProcessor";

interface contactPageData {
  nimi: string;
  puhelin_numero: string;
  osoite: string;
  leipa_teksti: string;
}

const Yhteystiedot = () => {
  const [data, setData] = useState<contactPageData>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:1337/yhteystiedot")
      .then((r) => {
        setData(r.data);
      })
      .catch((e) => console.error(e));
  };
  return (
    <Page
      title={"Yhteystiedot"}
      description={"This is the contact Page"}
      className="mb-8 lg:mb-0"
    >
      <div className="flex flex-col-reverse md:flex-row md:justify-center">
        <div className="text-left w-full lg:w-1/2">
          <h2 className="mt-16">Ota Yhteyttä!</h2>
          <ContactForm />
        </div>
        <div className="text-left w-full lg:w-1/2">
          <h2 className="mt-16">Yhteystiedot</h2>
          <div className="text-gray-700 mt-8 text-xs">
            {textProcessor(data?.leipa_teksti)}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Yhteystiedot;
