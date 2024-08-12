import React from 'react'
function Chai(){
  return(
    <div className=" flex justify-around ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6Dmtr4-SBi78he6RRossByFMxGKpNM0IUA&s" alt="Description of the image" ></img>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH5HOGBIxxI4K8BQ2Ecmoz2YcxpX5ClL4JJA&s" alt="Description of the image"></img>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrKGfJn0ohHQ2WMNeNiSNAKVaKSUCORJxS6w&s" alt="Description of the image"></img>
     </div>
  )
}
export default Chai;
/*import { useState } from "react";


function Chai() {
  const [name, set] = useState("");
  const [mail, sett] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, {name, mail}]);
    // console.log(title)
    // console.log(desc)
    set("");
    sett("");
    console.log(mainTask);
  };
  let renderTask = <h2>No Details</h2>;

 if(mainTask.length > 0)
 {
  renderTask= mainTask.map((t,i)=>{
    return (
      <li>
    <div className="flex justify-between">
    <h5 className="text-xl font-semibold">{t.name}</h5>
    <h6 className="text-xl font-semibold">{t.mail }</h6>
    </div>
    </li>
    ); 
  })
 }
  return (
    <>

      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
       T0-Do List </h1>
       <div className="bg-red-200  m-20 flex justify-around border-style: dotted border-width: 2px  bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&s")]">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className=" bg-gray-300 text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded-xl"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            //console.log(e.target.value)}//two way binding
            set(e.target.value)
          }
        />

        <input
          type="text"
          className="text-2xl   bg-gray-300 rounded-xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="E-mail"
          value={mail}
          onChange={(e) =>
            //console.log(e.target.value)}//two way binding
            sett(e.target.value)
          }
        />

        <button className="bg-black   text-white px-4 py-2 text-2xl font-bold rounded-xl m-5">
         + Add Task
        </button>
      </form>
</div>
    
      <div className="m-20 rounded-xl">
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
      </div>
    </>
  );
}

export default Chai;*/

