import babyNamesData from "../data/babyNamesData.json";
import "./MainContentStyles.css"

export default function MainContent(): JSX.Element {
  interface babyDataTypes {
    id: number;
    name: string;
    sex: string;
  }

  const allTheNames = babyNamesData
  .sort((a, b) => a.name > b.name ? 1 : -1)
  .map((babyData: babyDataTypes) => {
    return (
        <>
            <button key={babyData.id} className={babyData.sex}>
                {babyData.name}
            </button>
        </>
    );
  });
  //   const femaleNames = babyNamesData.map((babyData: babyDataTypes) => {
  //     let name = "";
  //     if (babyData.sex === "f") {
  //         name = babyData.name
  //     }
  //     return <p key={babyData.id}>{name}</p>
  //   })

  return (
    <body id="body">
        <div className="wrapper">
        <div className="namesList">
            <p> {allTheNames} </p>
        </div>
      </div>
    </body>
  );
}
