import React from "react";

function Teams({ formData, setFormData }) {
  return (
    <>
      <form>
        <div className="row">
          <div className="col">
            <label for="teamTwoName" className="form-label mt-4">
              Team one name :
            </label>
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
            <label for="teamTwoName" className="form-label mt-4">
              Team one type :
            </label>
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
        <hr className="mt-5" />
        <p className="text-center">VS</p>
        <hr />
        <div className="row">
          <div className="col">
            <label for="teamTwoName" className="form-label mt-4">
              Team two name :
            </label>
            <input
              type="text"
              name="teamTwoName"
              id="teamTwoName"
              placeholder="Enter Team Two Name"
              className="form-control"
              value={formData.teamTwoName}
              onChange={(event) =>
                setFormData({ ...formData, teamTwoName: event.target.value })
              }
            />
          </div>
          <div className="col">
            <label for="teamTwoType" className="form-label mt-4">
              Team two type :
            </label>
            <select
              id="teamTwoType"
              name="teamTwoType"
              className="form-select"
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
