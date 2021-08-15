import React from "react";
import styles from "../Filter/Filter.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contact-actions";

const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = (e) => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label className={styles.label}>
      Find contacts by name
      <input className={styles.input} type="text" onChange={onChangeFilter} />
    </label>
  );
};

export default Filter;
