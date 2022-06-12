import React from "react";

function Type() {
  return (
    <>
      <form>
        <select id="type" name="type" placeholder="Match Type">
          <option value="Match type">Match Type</option>
          <option value="Friendly">Friendly</option>
          <option value="Tournament">Tournament</option>
        </select>
        <button> Next</button>
      </form>
    </>
  );
}

export default Type;
