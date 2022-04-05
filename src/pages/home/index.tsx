import Promo from "../../components/promo";
import NewExperience from "../../components/new-experience";
import SignatureDish from "../../components/signature-dish";
import DefaultLayout from "../../layout/defaultLayout";
import MenuList from "../../components/menu-list";

const styles = {
  section: {
    backgroundPosition: "top",
  },
};

const Home = () => (
  <DefaultLayout>
    <Promo
      particle="is"
      title="An Extraordinery Experience"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus."
      style={styles.section}
    />

    <NewExperience />

    <SignatureDish />

    <MenuList title="The Menu" subtitle="5 Stars" />
  </DefaultLayout>
);

export default Home;
