import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { deleteItem } from "../redux/itemsSlice";
import { startEdit, cancelEdit } from "../redux/formSlice";

const ItemList: React.FC = () => {
  const items = useSelector((state: RootState) => state.items);
  const filter = useSelector((state: RootState) => state.filter); // 👈 фильтр
  const currentItem = useSelector((state: RootState) => state.form.currentItem);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    if (currentItem?.id === id) {
      dispatch(cancelEdit());
    }
    dispatch(deleteItem(id));
  };

  // 🔍 применим фильтр (без учёта регистра)
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id}>
          <span className="item-title">
            {item.title} {item.price}
          </span>
          <div style={{ display: "flex", gap: "6px" }}>
            <button className="edit" onClick={() => dispatch(startEdit(item))}>
              ✎
            </button>
            <button className="delete" onClick={() => handleDelete(item.id)}>
              ✕
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
