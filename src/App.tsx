import Editor from "./Editor/Editor";
import Poster from "./Poster/Poster";

function App() {
  return (
    <div style={{ display: "grid", gap: 25 }}>
      <Editor />

      <Poster
        title={"Storm King's Thunder"}
        subtitle={"The Doom of the Desert II"}
        image={"the-doom-of-the-dessert-II/OIG3.mAduM2jU0JEaJH.BkQ6g.jpeg"}
        imageOffset={[0, 0]}
        when={"Wednesday, <strong>June 05</strong> at <strong>19h</strong>"}
        where={"World's End Comics & Games"}
        fontColor={"#FDEBC4"}
        backgroundColor={"#61250D"}
      />

      <Poster
        title={"Storm King's Thunder"}
        subtitle={"Release the Kraken!"}
        image={"release-the-kraken/OIG3.mAduM2jU0JEaJH.BkQ6g 1.png"}
        imageOffset={[-120, 0]}
        when={"Saturday, <strong>May 01</strong> at <strong>19h</strong>"}
        where={"World's End Comics & Games"}
        fontColor={"#C8E9F9"}
        backgroundColor={"#13305B"}
      />

      <Poster
        title={"Storm King's Thunder"}
        subtitle={"Besieged!"}
        image={"besieged/Hero image.png"}
        when={"Wednesday, <strong>September 9</strong> at <strong>19h</strong>"}
        where={"World's End Comics & Games"}
        fontColor={"#FEE6E6"}
        backgroundColor={"#750404"}
      />

      <Poster
        title={"D&D Gent presents"}
        subtitle={"Free RPG Day"}
        image={"free-rpg-day/Hero image-2.jpg"}
        when={"<strong>June 22-23</strong> from <strong>11h to 23h</strong>"}
        where={"Outpost Game Center Ghent"}
        fontColor={"#E5FFFE"}
        backgroundColor={"#0A5C47"}
      />
    </div>
  );
}

export default App;
