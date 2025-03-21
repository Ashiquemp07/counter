import React,{useState} from "react";

// this is my first edit
function App() {
  const[count,setcount] =useState(0);
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>counter app</h1>
          <div classname="my-5">
            <h2 className="my-5">{count}</h2>
            <button className="btn btn-success mx-3" onClick={()=> setcount(count+1)}>increment</button>
            <button className="btn btn-danger mx-3" onClick={()=> setcount(count-1)}>decrement</button>
            <button className="btn btn-secondary mx-3" onClick={()=>setcount(0)} disabled={count===0}>reset</button>

          </div>

        </div>  
      </div>
    </div>
  );
}

export default App;
