// src/components/Form.tsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addItem, updateItem } from "../redux/itemsSlice";
import { cancelEdit } from "../redux/formSlice";
import { Item } from "../types";
import { v4 as uuidv4 } from "uuid";

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const currentItem = useSelector((state: RootState) => state.form.currentItem);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  // При редактировании заполняем форму данными
  useEffect(() => {
    if (currentItem) {
      setTitle(currentItem.title);
      setPrice(currentItem.price.toString());
    } else {
      setTitle("");
      setPrice("");
    }
  }, [currentItem]);

  const handleSave = () => {
    if (!title.trim() || !price.trim()) return;

    const priceValue = parseFloat(price);
    if (isNaN(priceValue)) return;

    const item: Item = {
      id: currentItem ? currentItem.id : uuidv4(),
      title,
      price: priceValue,
    };

    if (currentItem) {
      dispatch(updateItem(item));
      dispatch(cancelEdit());
    } else {
      dispatch(addItem(item));
    }

    setTitle("");
    setPrice("");
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
    setTitle("");
    setPrice("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="save" onClick={handleSave}>
        Save
      </button>
      {currentItem && (
        <button className="cancel" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </div>
  );
};

export default Form;
