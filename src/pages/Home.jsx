import Footer from "../features/Footer";
import Links from "../features/Links";
import Profile from "../features/Profile";
import Socials from "../features/Socials";

const Home = () => {
  return (
     <main className="container app">
      <Profile />
      <br />
      <Links />
      <br />
      <Socials />
      <br />
      <br />
      <Footer />
    </main>
  )
}

export default Home