import Editor from "./Editor/Editor";
import Poster from "./Poster/Poster";

function App() {
  return (
    <div style={{ display: "grid", gap: 25 }}>
      <Editor />

      <Poster
        title={"Storm King's Thunder"}
        subtitle={"The Doom of the Desert II"}
        image={
          <img src="the-doom-of-the-dessert-II/OIG3.mAduM2jU0JEaJH.BkQ6g.jpeg" />
        }
        when={"Wednesday, <strong>June 05</strong> at <strong>19h</strong>"}
        where={"World's End Comics & Games"}
        fontColor={"#FDEBC4"}
        backgroundColor={"#61250D"}
      />

      <Poster
        title={"Storm King's Thunder"}
        subtitle={"Release the Kraken!"}
        image={
          <img
            src="release-the-kraken/OIG3.mAduM2jU0JEaJH.BkQ6g 1.png"
            style={{ marginTop: -120 }}
          />
        }
        when={"Saturday, <strong>May 01</strong> at <strong>19h</strong>"}
        where={"World's End Comics & Games"}
        fontColor={"#C8E9F9"}
        backgroundColor={"#13305B"}
      />

      <Poster
        title={"Storm King's Thunder"}
        subtitle={"Besieged!"}
        image={<img src="besieged/Hero image.png" />}
        when={"Wednesday, <strong>September 9</strong> at <strong>19h</strong>"}
        where={"World's End Comics & Games"}
        fontColor={"#FEE6E6"}
        backgroundColor={"#750404"}
      />

      <Poster
        title={"D&D Gent presents"}
        subtitle={"Free RPG Day"}
        image={<img src="free-rpg-day/Hero image-2.jpg" />}
        when={"<strong>June 22-23</strong> from <strong>11h to 23h</strong>"}
        where={"Outpost Game Center Ghent"}
        fontColor={"#E5FFFE"}
        backgroundColor={"#0A5C47"}
      />
    </div>
  );
}

export default App;
