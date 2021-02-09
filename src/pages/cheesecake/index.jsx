import DevChallenges from "../../components/DevChallenges";
import Header from "../../components/Header";
import Page from "../../components/Page";
import Preparation from "../../components/Preparation";
import Ingredients from "../../components/Preparation/Ingredients";
import Instructions from "../../components/Preparation/Instructions";
import Times from "../../components/Preparation/Times";
import RecipeImage from "../../components/RecipeImage";

export const getStaticProps = async () => {
  const raw = await fetch("https://api.jsonbin.io/b/6022d9f8435c323ba1c3e3db");
  const data = await raw.json();
  return {
    props: {
      data,
    },
  };
};

const Cheesecake = ({ data }) => (
  <Page>
    <Header
      title="Classic Cheesecake Recipe"
      description="Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath."
    />
    <RecipeImage src="/images/photo1.png" alt="Classic Cheesecake Recipe Image" />
    <Preparation>
      <Ingredients Ingredients={data.ingredients} />
      <Times alltimes={data.times} />
      <Instructions instructions={data.instructions} />
    </Preparation>
    <footer>
      <DevChallenges />
    </footer>
  </Page>
);

export default Cheesecake;
