import Head from "components/layout/Head";
import Header from "components/layout/Header";
import React from "react";
import Footer from "./Footer";

// TODO: add stuff
const Page = (props) => (
  <>
    <Head
      title="Hieronta&Kauneus KristaN"
      description="Hieronta& Kauneus KristaN on monipuolinen vuodesta 2006 toiminut hieronta- ja kosmetologipalveluja tarjoava yritys.
Hieronta valikoimassamme on urheiluhieronta, klassinen hieronta, lisäksi rentouttavat kuumakivihieronta, aromaterapiahieronta, sekä intialainen päähieronta. Kaulan, pään ja purentalihasten jumeihin auttaa H.A.A.- hieronta menetelmä.
Kosmetologipalveluina tarjolla on kasvohoito, ihonpuhdistus, mikroneulaus, jalkahoito, karvanpoisto sokeroinnilla, kestovärjäykset, ripsien kestotaivutus. Teemme myös näyttävät meikit, niin arkeen kuin juhlaankin. Uutuus sarjana niin hoitolakäytössä, kuin kotihoidossa on kotimainen Unna Nordic."
    />
    <Header />
    <main className={"flex-grow flex items-center justify-center bg-gray-100"}>
      <div className={"container h-full mx-auto py-16 " + props.className}>
        {props.children}
      </div>
    </main>
    <Footer />
  </>
);

export default Page;
