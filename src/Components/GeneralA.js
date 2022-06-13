import React from "react";
import "../App.css";

function GeneralA({ formData, setFormData }) {
  return (
    <>
      <form>
        <div className="row">
          <div className="col">
            <label for="start-date" className="form-label ">
              Start Date and Time :
            </label>
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
            <label for="type" className="form-label mt-4">
              Match Location :
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter Match Location"
              className="form-control"
              value={formData.matchLocation}
              onChange={(event) =>
                setFormData({ ...formData, matchLocation: event.target.value })
              }
            />
          </div>
          <div class="col d-flex flex-column">
            <label for="type" className="form-label">
              End Date and Time
            </label>
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
            <label for="type" className="form-label mt-4">
              Comments :
            </label>
            <textarea
              name="comments"
              id="comments"
              cols="30"
              rows="10"
              placeholder="Enter Comments"
              className="form-control"
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
