import GeneralA from "./GeneralA";
import GeneralB from "./GeneralB";
import Table from "./Table";
import Teams from "./Teams";
import Type from "./Type";
import { useState, useEffect } from "react";
import "../App.css";

const getLocalData = () => {
  const data = localStorage.getItem("data");


  if (data) {
    return JSON.parse(data);
  } else {
      return [];
  }
};

function Form() {
  const [page, setPage] = useState(1);
  const [items, setitems] = useState(getLocalData());

  const [formData, setFormData] = useState({
    matchType: "",
    startDate: "",
    endDate: "",
    matchLocation: "",
    tournament: "",
    comments: "",
    teamOneName: "",
    teamOneType: "",
    teamTwoName: "",
    teamTwoType: "",
  });

  const FormTitles = ["Type", "General", "Teams"];

  const setData = () => {
    const newData = {
        id: new Date().getTime().toString(),
        name: formData,
      };
    setitems([...items, newData]);

  }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(items));
  }, [items]);

  const PageDispalay = () => {
    if (page === 1) {
      return <Type formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      if (formData.matchType === "Friendly") {
        return <GeneralA formData={formData} setFormData={setFormData} />;
      } else {
        return <GeneralB formData={formData} setFormData={setFormData} />;
      }
    } else {
      return <Teams formData={formData} setFormData={setFormData} />;
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
              className={page === 1 ? "d-none" : "btn btn-danger me-3 px-5"}
              onClick={() => {
                if (page === 1) {
                }
                setPage((currentPage) => currentPage - 1);
              }}
            >
              Back
            </button>
            <button
              className="btn btn-danger px-5"
              onClick={() => {
                if (page === FormTitles.length) {
                  alert("Form Submitted");
                  setData()
                  setPage(1)
                } else {
                  setPage((currentPage) => currentPage + 1);
                }
              }}
            >
              {page === FormTitles.length ? "Submit" : "Next"}
            </button>
          </div>
        </div>
        <div>
          <Table data = {items} />
          
        </div>
      </div>
    </>
  );
}

export default Form;
