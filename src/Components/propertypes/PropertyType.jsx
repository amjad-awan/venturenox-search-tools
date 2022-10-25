import React from "react";
import TypeTable from "./TypeTable";
import { propertyType } from "../../Redux/propertySearchSlice/Slice";
import { propertiesList } from "../../API/PropertyTypeData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const PropertyType = () => {
  const state = useSelector((state) => state);
  const reduxPropertyType = state.propertySlice.propertyType;
  const dispatch = useDispatch();
  const handleClick = (term) => {
    if (term === "All") {
      dispatch(propertyType(propertiesList));
    } else {
      const filterData = propertiesList.filter((item) => {
        return item.Type.toUpperCase() === term.toUpperCase();
      });
      dispatch(propertyType(filterData));
    }
  };
  useEffect(() => {
    dispatch(propertyType(propertiesList));
  }, []);
  return (
    <div className="type-wrapper">
      <div className="inner-wrapper">
        <label htmlFor="">Properties types</label>
        <ul>
          <li onClick={() => handleClick("All")}>All</li>
          {[...new Set(propertiesList.map((item) => item.Type))].map(
            (property, index) => {
              return (
                <li onClick={() => handleClick(property)} key={index}>
                  {property}
                </li>
              );
            }
          )}
        </ul>
      </div>
      <div className="inner-wrapper">
        <label htmlFor="">Search results</label>
        {state.propertySlice.isLoaded ? (
          <TypeTable reduxPropertyType={reduxPropertyType} />
        ) : null}
      </div>
    </div>
  );
};

export default PropertyType;
