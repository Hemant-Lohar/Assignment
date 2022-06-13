import React from "react";

function Teams({ formData, setFormData }) {
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
              value={formData.teamOneName}
              onChange={(event) =>
                setFormData({ ...formData, teamOneName: event.target.value })
              }
            />
          </div>
          <div className="col">
            <select
              id="teamOneType"
              name="teamOneType"
              className="form-select"
              value={formData.teamOneType}
              onChange={(event) =>
                setFormData({ ...formData, teamOneType: event.target.value })
              }
            >
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
              name="teamTwoName"
              id="teamTwoName"
              placeholder="Team Two Name"
              className="form-control mt-4"
              value={formData.teamTwoName}
              onChange={(event) =>
                setFormData({ ...formData, teamTwoName: event.target.value })
              }
            />
          </div>
          <div className="col">
            <select
              id="teamTwoType"
              name="teamTwoType"
              className="form-select mt-4"
              value={formData.teamTwoType}
              onChange={(event) =>
                setFormData({ ...formData, teamTwoType: event.target.value })
              }
            >
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
