import React from "react";
import "../App.css";

function GeneralA({ formData, setFormData }) {
  return (
    <>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="datetime-local"
              name="startDate"
              id="start-date"
              placeholder="Start Date & Time"
              className="form-control"
              value={formData.startDate}
              onChange={(event) =>
                setFormData({ ...formData, startDate: event.target.value })
              }
            />
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Match Location"
              className="form-control mt-4"
              value={formData.matchLocation}
              onChange={(event) =>
                setFormData({ ...formData, matchLocation: event.target.value })
              }
            />
          </div>
          <div class="col d-flex flex-column">
            <input
              type="datetime-local"
              name="endDate"
              id="end-date"
              placeholder="End Date & Time"
              className="form-control"
              value={formData.endDate}
              onChange={(event) =>
                setFormData({ ...formData, endDate: event.target.value })
              }
            />

            <textarea
              name="comments"
              id="comments"
              cols="30"
              rows="10"
              placeholder="Comments"
              className="form-control mt-4"
              value={formData.comments}
              onChange={(event) =>
                setFormData({ ...formData, comments: event.target.value })
              }
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
}

export default GeneralA;
