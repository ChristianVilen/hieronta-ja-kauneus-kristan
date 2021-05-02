import React, { useEffect, useState } from "react";
import Page from "components/layout/Page";
import LinkButton from "components/base/LinkButton";
import Image from "next/image";
import axios from "axios";
import textProcessor from "lambdas/mdProcessor";

// import InstagramEmbed from "react-instagram-embed";

interface frontPageData {
  otsikko: string;
  ala_otsikko: string;
  leipa_teksti: string;
  alin_otsikko: string;
  nappi1: string;
  nappi2: string;
}

const frontPageImg = () => {
  return (
    <Image
      src="/static/images/kauneusjahieronta.png"
      className="relative"
      height="264"
      width="264"
      alt="Kauneus ja hieronta KristaN"
    />
  );
};

const Index = () => {
  const [data, setData] = useState<frontPageData>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:1337/etusivu")
      .then((r) => {
        setData(r.data);
      })
      .catch((e) => console.error(e));
  };

  return (
    <Page
      className="flex flex-col items-center justify-center mt-16 sm:pt-24 lg:pb-4 sm:my-auto"
      title="Hieronta ja Kauneus KristaN"
    >
      {frontPageImg()}
      <h2 className="mt-4 text-xl font-semibold sm:text-4xl">
        {data?.otsikko}
      </h2>
      <h3 className="mt-4 text-sm sm:text-lg">
        <i>{data?.ala_otsikko}</i>
      </h3>
      <div className="mt-6 text-gray-700">
        {textProcessor(data?.leipa_teksti)}
      </div>
      <div className="mt-10">
        <p>{data?.alin_otsikko}</p>
      </div>
      <div className="flex flex-col mt-10 mb-20 text-sm text-white sm:flex-row">
        <LinkButton color="primary" href="/palvelut" className="mx-2">
          {data?.nappi1}
        </LinkButton>
        <LinkButton color="primary" href="/" className="mx-2 mt-3 sm:mt-0">
          {data?.nappi2}
        </LinkButton>
      </div>
    </Page>
  );
};

export default Index;
