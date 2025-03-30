import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filterSlice";
import { RootState } from "../redux/store";

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Фильтр по названию..."
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
