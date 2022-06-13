import React from "react";
import "../App.css";
function Type() {
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
              aria-label="Default select example"
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
