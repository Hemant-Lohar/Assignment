import React from "react";
import "../App.css";

function GeneralB() {
  return (
    <>
      <form>
        <div class="row">
          <div class="col">
            <input
              type="text"
              name="start date"
              id="start-date"
              placeholder="Start Date & Time"
              className="form-control"
            />
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Match Location"
              className="form-control mt-4"
            />
            <input
              type="text"
              name="turnament"
              id="turnament"
              placeholder="Turnament Name"
              className="form-control mt-4"
            />
          </div>
          <div class="col d-flex flex-column">
            <input
              type="text"
              name="end date"
              id="end-date"
              placeholder="End Date & Time"
              className="form-control"
            />

            <textarea
              name="comments"
              id="comments"
              cols="30"
              rows="10"
              placeholder="Comments"
              className="form-control mt-4"
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
}

export default GeneralB;
