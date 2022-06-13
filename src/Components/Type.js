import React from "react";
import "../App.css";

function Type({formData, setFormData}) {
  return (
    <>
      <form>
        <div className="d-flex flex-column align-items-center ">
          <div>
            <select
              id="type"
              name="type"
              placeholder="Match Type"
              className="form-select"
              value={formData.matchType}
              onChange={(event) => setFormData({...formData, matchType: event.target.value })}
            >
              <option selected>Match Type</option>
              <option value="Friendly">Friendly</option>
              <option value="Tournament">Tournament</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
}

export default Type;
