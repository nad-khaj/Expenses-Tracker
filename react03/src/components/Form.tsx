// import React from 'react'
// import { produce } from "immer";
// import { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
interface props {
  categories: string[];
  onSubmitButton : (data:FieldValues)=>void
}
const Form = ({ categories,onSubmitButton}: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (data: FieldValues) => {
    onSubmitButton(data)
    }
  // if (categories.length === 0)
  return (
    <form action="" onSubmit={handleSubmit(submitHandler)}>
      <label htmlFor="description" className="form-label">
        Description:
      </label>
      <input
        {...register("description", { required: true })}
        id="description"
        type="text"
        className="form-control"
      />
      {errors.description?.type === "required" && (
        <p className="text-danger">Description is Required</p>
      )}
      <label htmlFor="amount" className="form-label">
        Amount :
      </label>
      <input
        {...register("amount", { required: true, min: 0 })}
        id="amount"
        type="number"
        className="form-control"
      />
      {errors.amount?.type === "required" && (
        <p className="text-danger">Amount is Required</p>
      )}
      {errors.amount?.type === "min" && (
        <p className="text-danger">Amount should be higher than 0</p>
      )}
      <label htmlFor="category" className="form-label">
        Category:
      </label>
      <select
        {...register("category", { required: true })}
        id="category"
        className="form-select mt-2"
      >
        <option defaultValue=""> </option>
        {categories.map((item,index) => (<option value = {index} key={index}> {item}</option>))}
      </select>

      {errors.category?.type === "required" && (
        <p className="text-danger">Category is required</p>
      )}

      <button  className="btn btn-primary mt-5 me-0">Submit</button>
    </form>
  );
};

export default Form;

