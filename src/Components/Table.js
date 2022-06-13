import React from "react";

const TableTitile = [
  {
    title: "Team 1",
  },
  {
    title: "Team 2",
  },
  {
    title: "Match Type",
  },
  {
    title: "Tournament Name",
  },
  {
    title: "Start Date & Time",
  },
  {
    title: "End Date & Time",
  },
  {
    title: "Loaction",
  },
  {
    title: "Comments",
  },
];
function Table({ data }) {
  const Data = data;
  console.log(Data)
  return (
    <>
      <table className="table my-4">
        <thead>
          <tr>
            {TableTitile.map((curelem) => {
              return <th scope="col">{curelem.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Data.map((curelem) => {
            return (
              <tr key={curelem.id}>
                <td scope="col">{curelem.name.teamOneName}({curelem.name.teamOneType})</td>
                <td scope="col">{curelem.name.teamTwoName}({curelem.name.teamTwoType})</td>
                <td scope="col">{curelem.name.matchType}</td>
                <td scope="col">{curelem.name.tournament}</td>
                <td scope="col">{curelem.name.startDate}</td>
                <td scope="col">{curelem.name.endDate}</td>
                <td scope="col">{curelem.name.matchLocation}</td>
                <td scope="col">{curelem.name.comments}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
