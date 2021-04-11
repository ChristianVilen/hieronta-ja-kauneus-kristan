import React from "react";
import Page from "components/layout/Page";
import LinkButton from "components/base/LinkButton";
import Image from "next/image";

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

const Index = () => (
  <Page
    className="flex flex-col items-center justify-center mt-16 sm:pt-24 lg:pb-4 sm:my-auto"
    title="Hieronta&Kauneus"
  >
    {frontPageImg()}
    <h2 className="mt-4 text-xl font-semibold sm:text-4xl">
      Hieronta&Kauneus KristaN
    </h2>
    <h3 className="mt-4 text-sm sm:text-lg">
      <i>-Kokonaisvaltaista hyvinvointia-</i>
    </h3>
    <p className="mt-6 text-gray-700">
      Hieronta& Kauneus KristaN on monipuolinen vuodesta 2006 toiminut hieronta-
      ja kosmetologipalveluja tarjoava yritys.
      <br />
      Hieronta valikoimassamme on <b>urheiluhieronta</b>, klassinen hieronta,
      lisäksi rentouttavat <b>kuumakivihieronta</b>, <b>aromaterapiahieronta</b>
      ,
      <br />
      sekä <b>alainen</b> päähieronta. Kaulan, pään ja purentalihasten jumeihin
      auttaa H.A.A.- hieronta menetelmä. <br />
      Kosmetologipalveluina tarjolla on mm. <b>kasvohoito</b>,{" "}
      <b>ihonpuhdistus</b>, <b>jalkahoito</b> ja <b>kestovärjäykset</b>.
    </p>

    <div className="mt-10">
      <p>
        Tervetuloa hoitolaamme nauttimaan kokonaisvaltaisesta kauneudenhoidosta
        ja hyvinvoinnista!
      </p>
    </div>
    <div className="flex flex-col mt-10 mb-20 text-sm text-white sm:flex-row">
      <LinkButton color="primary" href="/palvelut" className="mx-2">
        Palvelut
      </LinkButton>
      <LinkButton color="primary" href="/" className="mx-2 mt-3 sm:mt-0">
        Varaa
      </LinkButton>
    </div>
  </Page>
);

export default Index;
