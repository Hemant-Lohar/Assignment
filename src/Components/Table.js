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
      <div className="table-responsive">
          <table className="table my-4 table-light table-bordered">
            <thead>
              <tr>
                {TableTitile.map((curelem) => {
                  return <th className="col-sm-1" >{curelem.title}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {Data.map((curelem) => {
                return (
                  <tr height="100px" key={curelem.id}>
                    <td >{curelem.name.teamOneName}({curelem.name.teamOneType})</td>
                    <td >{curelem.name.teamTwoName}({curelem.name.teamTwoType})</td>
                    <td >{curelem.name.matchType}</td>
                    <td >{curelem.name.tournament}</td>
                    <td >{curelem.name.startDate}</td>
                    <td >{curelem.name.endDate}</td>
                    <td >{curelem.name.matchLocation}</td>
                    <td className="overflow-scroll " >{curelem.name.comments}</td>
                  
                  </tr>
                );
              })}
            </tbody>
          </table>
      </div>
    </>
  );
}

export default Table;
