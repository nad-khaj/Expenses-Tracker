// import { useState } from "react";
// import { produce } from "immer";

interface props {
  categories: string[];
  data: [{ desc: ""; amnt: 0; cat: "" },];
  onDelete :(desc1:string,amnt1:number,cat1:string)=>void;
  onSelect : (cat1:string)=>void;

}
const Table = ({ categories, data,onDelete,onSelect }: props) => {
  return (
    <>
      <select
      onClick={evt => {
          onSelect(categories[evt.target.value])
          }}
          
        id="category"
        className="form-select mt-2"
      >
        <option defaultValue=""> </option>
        {categories.map((item, index) => (
          <option value={index} key={index}>
            {" "}
            {item}
          </option>
        ))}
      </select>
      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th scope="col-5">Description</th>
            <th scope="col-1">Amount</th>
            <th scope="col-2">Category</th>
            <th scope="col-1"> </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="align-middle">
              <td key={item.desc}>{item.desc}</td>
              <td key={item.amnt}>{item.amnt}$</td>
              <td key={item.cat}>{item.cat}</td>
              <td className="w-25">
               
                <button
                  onClick={()=>
                   onDelete(item.desc,item.amnt,item.cat)}
                  className="btn btn-outline-danger ms-5"
                >
            
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
