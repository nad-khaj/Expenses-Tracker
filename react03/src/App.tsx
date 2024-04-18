import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { produce } from "immer";
import Form from "./components/Form";

import Table from "./components/Table";

function App() {
  const list = ["cat1", "cat2", "cat3", "cat4", "cat5"];
  const [selectedCategory, setSelectedCategory] = useState("");

  // const data = [{ desc: "", amnt: 0, cat: "" }];
  const [mainData,setMainData] = useState([
    { desc: "description1", amnt: 100, cat: "cat1" },
    { desc: "description2", amnt: 200, cat: "cat2" },
    { desc: "description3", amnt: 300, cat: "cat3" },
    { desc: "description1", amnt: 100, cat: "cat1" },
    { desc: "description5", amnt: 200, cat: "cat1" },
    { desc: "description6", amnt: 300, cat: "cat3" },
  ]);
  const [ShowData, setShowData] = useState([...mainData]);

  const handleSubmit = (desc:string,amnt:number,cat:string) => {
    setMainData(
       produce((draft) => {
        draft.push( {desc:desc,amnt:amnt,cat:cat});
     })
    );
    if ((cat === selectedCategory) || (!selectedCategory)) setShowData(
      produce((draft) => {
       draft.push( {desc:desc,amnt:amnt,cat:cat});
    })
   );
    // console.log("select=",selectedCategory, mainData);
    
  };

  const handleDelete = (desc1: string , amnt1:number , cat1:string) => {
    setShowData(
      produce((draft) => {
        const index = draft.findIndex((item) => (item.desc === desc1) && (item.amnt ===amnt1) && (item.cat === cat1));
        console.log(draft);

        if (index !== -1) {
          draft.splice(index, 1);
        }
      })
    );
    setMainData(
      produce((draft) => {
        const index = draft.findIndex((item) => item.desc === desc1);
        // console.log(draft);

        if (index !== -1) {
          draft.splice(index, 1);
        }
      })
    );
  };
  const handleselect = (cat1: string) => {
    setSelectedCategory(cat1);
    // console.log(selectedCategory);
    
    let newData = [...mainData];
    if (cat1)
      newData = mainData.filter((item) => item.cat === cat1);
    setShowData(newData);
  };

  return (
    <div className="container w-50 mt-5 text-primary">
      <Form categories={list} onSubmitButton={(data)=> handleSubmit(data.description,data.amount,list[data.category])}>
      </Form>
      <Table
        categories={list}
        data={ShowData}
        onDelete={(desc,amnt,cat) => handleDelete(desc,amnt,cat)}
        onSelect={(cat) => handleselect(cat)}
      />
    </div>
  );
}

export default App;
