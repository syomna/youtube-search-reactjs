import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Filter from "./components/Filter/Filter";
import Channel from "./components/Channel/Channel";
import Video from "./components/Video/Video";
import Spinner from "./components/Spinner/Spinner";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Filter />
        <section className="videos">
          <Channel />
          <div id="video"></div>
          <Video />
        </section>
        <Spinner />
      </main>
    </div>
  );
}

export default App;
