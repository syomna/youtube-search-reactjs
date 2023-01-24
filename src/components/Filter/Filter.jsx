import React from "react";
import FilterIcon from "../../assets/filter.svg";

const Filter = () => {
  return (
    <div>
      <section className="filtered-results">
        <h3>About 13,000,000 filtered results</h3>
        <div className="filter">
          <img src={FilterIcon} alt="filter" />
          <p>FILTER</p>
        </div>
      </section>
      <section className="filtered-results-min">
        <select name="all" id="all" className="select-lists">
          <option value="all">All</option>
          <option value="all">All</option>
        </select>
        <select name="anytime" id="anytime" className="select-lists">
          <option value="anytime">Anytime</option>
        </select>
      </section>
      <hr />
    </div>
  );
};

export default Filter;
