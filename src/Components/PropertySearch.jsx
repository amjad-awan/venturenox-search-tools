import React from "react";
import "../css/allstyles.css";
import PropertyTable from "./PropertyTable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { propertyAddress } from "../Redux/propertySearchSlice/Slice";
import { propertiesList } from "../API/Data.jsx";
import { useState } from "react";
import { useEffect } from "react";
const PropertySearch = () => {
  const [query, setQuery] = useState("");
  const state = useSelector((state) => state);
  const propertyReduxData = useSelector(
    (state) => state.propertySlice.propertyAddress
  );
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const filterDate = propertyReduxData.filter((item) =>
      ["Address"].some((key) =>
        item[key].toLowerCase().includes(query.toLowerCase())
      )
    );
    dispatch(propertyAddress(filterDate));
    setQuery("");
  };
  useEffect(() => {
    dispatch(propertyAddress(propertiesList));
  }, []);
  const handleChange = (e) => {
    setQuery(e.target.value);
    dispatch(propertyAddress(propertiesList));
  };

  return (
    <div className="property-wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Search</label>
        <div className="box-wrapper">
          <input type="text" className="input" onChange={handleChange} />
          <button className="search-btn">Search</button>
        </div>
      </form>
      <div className="table-wrapper">
        <label htmlFor="">Selected Properties</label>
        {state.propertySlice.isLoaded ? (
          <PropertyTable propertyReduxData={propertyReduxData} />
        ) : null}
      </div>
    </div>
  );
};

export default PropertySearch;
