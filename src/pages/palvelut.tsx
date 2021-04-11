import React from "react";
import Page from "../components/layout/Page";
import Services from "../components/base/Services";

const Palvelut = () => {
  const services = [
    {
      title: "kasvot",
      desc:
        "Kasvohoidot räätälöimme juuri sinun kasvojesi ihoa ja kuntoa ajatellen. Teemme suunnitelman sen hoidosta ja keskitymme niiden hyvinvointiin niin hoidon aikana, että kotihoitotuotteiden kanssa.",
    },
    {
      title: "mikroneulaus",
      desc:
        "DermaStamp Pen- mikroneulauskynää käytetään ihon uudistamiseen, juonteiden silottamiseen, arpien ja pigmenttimuutosten hoitamiseen. Se tasoitaa ihon epätasaisuuksia nopeammin, tehokkaammin ja kivuttomammin. Mikroneulaus luo ihoon pieniä kanavia (ns mikrovaurioita), minkä avulla aktiiviaineet pääsevät imeytymään ihossa syvemmälle. Mikroneulaus myös stimuloi kollageeni- ja elastiinisynteesiä, mikä itsessään jo korjaa ja kiinteyttää juonteita asteittain.",
    },
    {
      title: "Lash Lift/ kestotaivitus",
      desc:
        "Ripsien kestotaivutus sopii jäykkä-ja suoraripsisille helpottamaan päivittäistä meikkaamista. Taivutin ei ole tarpeellinen,kestotaivutus pysyy ripsissä 4-8 viikkoa,riippuen ripsien uusiutumis ajasta. Kestotaivutuksessa ripset taivutetaan silikonimuottien avulla. Koko valitaan ripsien pituuden ja halutun kaarevuuden mukaan.",
    },
    {
      title: "klassinen hieronta",
      desc:
        "Hieronta on psykofyysinen hoitotapahtuma, jossa käsin suoritetuilla, pehmeisiin kudoksiin kohdistuvilla, liikkuvilla, sujuvan rytmisillä ja voimakkuudeltaan oikein säädetyillä otteilla kudoksia painaen ja/tai venyttäen pyritään edistämään tai rauhoittamaan erilaisten kudosten toimintoja tietyn tavoitteen suuntaisesti. Klassinen hieronta on erilaisista otteista muodostunut yksilöllinen kokonaisuus jossa asiakkaan kunto ja elämäntilanne otetaan huomioon. Vaikka hierontaotteet kohdistuvat kudoksiin, vaikuttaa hieronta ihmiseen aina myös kokonaisvaltaisesti – kosketus, fyysinen konkreettinen hoitaminen ja hierojan läsnäolo vaikuttaa hoitotulokseen merkittävästi. Klassinen hieronta on hyvin vanha perinteinen hoitomuoto, jolla tarkoitetaan käsin tehtyä pehmeiden kudosten erilaista liikkuvaa muokkausta – esimerkiksi painelua tai sivelyä. Hieronta tehdään joko kokovartalo- tai jonkin osa-alueen, niskan tai vaikkapa hartioiden hierontana.",
    },
  ];

  return (
    <Page
      title={"Palvelut"}
      desciption={"Kristan eri palvelut"}
      className="mb-4"
    >
      <h1 className="mt-4 text-xl font-semibold sm:text-3xl">Palvelut</h1>
      <Services services={services} />
    </Page>
  );
};

export default Palvelut;
