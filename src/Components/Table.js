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
function Table() {
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

        </tbody>
      </table>
    </>
  );
}

export default Table;
