import Footer from "./features/Footer";
import Links from "./features/Links";
import Profile from "./features/Profile";
import Socials from "./features/Socials";

function App() {
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
  );
}

export default App;