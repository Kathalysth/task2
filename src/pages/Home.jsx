import { Helmet } from "react-helmet-async";
import Footer from "../features/Footer";
import Links from "../features/Links";
import Profile from "../features/Profile";
import Socials from "../features/Socials";

const Home = () => {
  return (
    <main className="container app">
      <Helmet>
        <title>Linktree App - Home</title>
      </Helmet>
      <Profile />
      <br />
      <Links />
      <br />
      <Socials />
      <br />
      <br />
      <Footer />
    </main>
  );
};

export default Home;
