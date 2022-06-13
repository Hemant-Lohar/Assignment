import { useState } from "react";
import "./App.css";
import GeneralA from "./Components/GeneralA";
import GeneralB from "./Components/GeneralB";
import Table from "./Components/Table";
import Teams from "./Components/Teams";
import Type from "./Components/Type";

function App() {
  const [page, setPage] = useState(1);

  const FormTitles = ["Type", "General", "Teams"];

  const PageDispalay = () => {
    if (page === 1) {
      return <Type />;
    } else if (page === 2) {
      return <GeneralA />;
    } else {
      return <Teams />;
    }
  };

  return (
    <>
      <div className="container">
        <div className="titlebar">
          <p className="bg-danger p-2 fs-5 fw-semibold text-black">
            {FormTitles[page - 1]} {page}/3
          </p>
        </div>
        <div className="container d-flex flex-column position-relative form-div">
          <div>{PageDispalay()}</div>
          <div className="position-absolute bottom-0 end-0 ">
            <button
              className={page === 1 ? "d-none" : "btn btn-primary me-3 px-5"}
              onClick={() => {
                if (page === 1) {
                }
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Back
            </button>
            <button
              className="btn btn-primary px-5"
              onClick={() => {
                setPage((currentPage) => currentPage + 1);
              }}
            >
              {page === FormTitles.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>
        <div>
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;
