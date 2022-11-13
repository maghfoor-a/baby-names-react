import babyNamesData from "../data/babyNamesData.json";
import "./MainContentStyles.css";
import { useState } from "react";

export default function MainContent(): JSX.Element {
  const [text, setText] = useState("");

  interface babyDataTypes {
    id: number;
    name: string;
    sex: string;
  }

  const allTheNames = babyNamesData
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .filter((babyData: babyDataTypes) =>
      babyData.name.toLocaleLowerCase().includes(`${text.toLocaleLowerCase()}`)
    )
    .map((babyData: babyDataTypes) => {
      return (
        <>
          <button key={babyData.id} className={babyData.sex}>
            {babyData.name}
          </button>
        </>
      );
    });

  return (
    <>
      <div className="searchBarWrapper">
        <input
          className="searchBar"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </div>
      <hr />
      <div className="namesWrapper">
        <div className="namesList">
          <p> {allTheNames} </p>
        </div>
      </div>
    </>
  );
}
