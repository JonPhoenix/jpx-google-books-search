import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
    <div className="form-row">
      <div className="col-md-9">
        <input
          name="q"
          list="book"
          type="text"
          onChange={handleInputChange}
          className="form-control"
          placeholder="Find a Book"
          id="book"
        />
      </div>
      <div className="col-md-3">
        <button className="btn btn-primary btn-sm form-control" type="submit" onClick={handleFormSubmit}>
          Search
        </button>
      </div>
    </div>
  </form>
  );
}

export default Form;
