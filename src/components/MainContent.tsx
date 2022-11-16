import babyNamesData from "../data/babyNamesData.json";
import "./MainContentStyles.css";
import { useState } from "react";

export default function MainContent(): JSX.Element {
  interface babyDataTypes {
    id: number;
    name: string;
    sex: string;
  }
  const [text, setText] = useState("");

  const [favourite, setFavourite] = useState<number[]>([]);

  const [genderFilter, SetGenderFilter] =
    useState<babyDataTypes[]>(babyNamesData);

  const handleFemaleOnly = () => {
    SetGenderFilter(
      babyNamesData.filter((babyData: babyDataTypes) => babyData.sex === "f")
    );
  };

  const handleMaleOnly = () => {
    SetGenderFilter(
      babyNamesData.filter((babyData: babyDataTypes) => babyData.sex === "m")
    );
  };

  const handleShowEveryone = () => {
    SetGenderFilter(babyNamesData);
  };

  const favouriteNames = favourite.map((idNumber) => {
    for (const babyObject of babyNamesData) {
      if (babyObject.id === idNumber) {
        return (
          <button
            key={babyObject.id}
            className={babyObject.sex}
            onClick={() =>
              setFavourite(
                favourite.filter(
                  (numberToRemove) => numberToRemove !== babyObject.id
                )
              )
            }
          >
            {babyObject.name}
          </button>
        );
      }
    }
    return idNumber;
  });

  const allTheNames = genderFilter
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .filter((babyData: babyDataTypes) =>
      babyData.name.toLocaleLowerCase().includes(`${text.toLocaleLowerCase()}`)
    )
    .filter(
      (babyData: babyDataTypes) => favourite.includes(babyData.id) === false
    )
    .map((babyData: babyDataTypes) => {
      return (
        <>
          <button
            key={babyData.id}
            className={babyData.sex}
            onClick={() => setFavourite([...favourite, babyData.id])}
          >
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
        <button onClick={handleShowEveryone}>All</button>
        <button onClick={handleFemaleOnly}>Girls</button>
        <button onClick={handleMaleOnly}>Boys</button>
      </div>
      <hr />
      <p>FAVOURITES: {favouriteNames}</p>
      <hr />
      <div className="namesWrapper">
        <div className="namesList">
          <p> {allTheNames} </p>
        </div>
      </div>
    </>
  );
}
