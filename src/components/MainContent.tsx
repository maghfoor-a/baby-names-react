import babyNamesData from "../data/babyNamesData.json";

export default function MainContent(): JSX.Element {
  interface babyDataTypes {
    id: number;
    name: string;
    sex: string;
  }

  const allTheNames = babyNamesData.map((babyData: babyDataTypes) => {
    return (
      <button key={babyData.id} className={babyData.sex}>
        {babyData.name}
      </button>
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
    <>
      <p>This is where baby names data will go:</p>
      <div className="namesList">
        <p> {allTheNames} </p>
      </div>
    </>
  );
}
