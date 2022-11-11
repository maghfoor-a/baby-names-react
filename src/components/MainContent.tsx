import babyNamesData from "../data/babyNamesData.json";

export default function MainContent(): JSX.Element {
  interface babyDataTypes {
    id: number;
    name: string;
    sex: string;
  }

  const allTheNames = babyNamesData.map((babyData: babyDataTypes) => {
    return <p key={babyData.id}>{babyData.name}</p>;
  });

  return (
    <>
      <p>This is where baby names data will go eg:</p>
      <div className="namesList">
        <p> {allTheNames} </p>
      </div>
    </>
  );
}
