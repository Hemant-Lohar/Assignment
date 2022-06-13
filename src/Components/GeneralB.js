import React from "react";
import "../App.css";

function GeneralB({ formData, setFormData }) {
  return (
    <>
      <form>
        <div class="row">
          <div class="col">
            <label for="start-date" className="form-label ">
              Start Date and Time :
            </label>
            <input
              type="datetime-local"
              name="start date"
              id="start-date"
              placeholder="Start Date & Time"
              className="form-control"
              value={formData.startDate}
              onChange={(event) =>
                setFormData({ ...formData, startDate: event.target.value })
              }
            />
            <label for="location" className="form-label mt-4">
              Match Location :
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Emter Match Location"
              className="form-control"
              value={formData.matchLocation}
              onChange={(event) =>
                setFormData({ ...formData, matchLocation: event.target.value })
              }
            />
            <label for="tournament" className="form-label mt-4">
              Tournament :
            </label>
            <input
              type="text"
              name="tournament"
              id="tournament"
              placeholder="Enter Turnament Name"
              className="form-control"
              value={formData.tournament}
              onChange={(event) =>
                setFormData({ ...formData, tournament: event.target.value })
              }
            />
          </div>
          <div class="col d-flex flex-column">
            <label for="end-date" className="form-label">
              End Date and Time :
            </label>
            <input
              type="datetime-local"
              name="end date"
              id="end-date"
              placeholder="End Date & Time"
              className="form-control"
              value={formData.endDate}
              onChange={(event) =>
                setFormData({ ...formData, endDate: event.target.value })
              }
            />
            <label for="comments" className="form-label mt-4">
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

export default GeneralB;
