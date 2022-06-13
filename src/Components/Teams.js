import React from "react";

function Teams() {
  return (
    <>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="teamone"
              id="teamone"
              placeholder="Team one name"
              className="form-control"
            />
          </div>
          <div className="col">
            <select id="team1" name="team" className="form-select">
              <option value="Home or Away">Home or Away</option>
              <option value="Home">Home</option>
              <option value="Away">Away</option>
            </select>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="teamone"
              id="teamone"
              placeholder="Team one name"
              className="form-control mt-4"
            />
          </div>
          <div className="col">
            <select id="team1" name="team" className="form-select mt-4">
              <option value="Home or Away">Home or Away</option>
              <option value="Home">Home</option>
              <option value="Away">Away</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
}

export default Teams;
