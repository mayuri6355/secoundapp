import React,{useState} from 'react';

function Min() {
  const [name, setName] = useState("");
  
  const filtered = data
    .filter(obj => obj.obj.info.some(n => n.name === name))
    .map(obj => Number(obj.obj.total));
    
  const min = filtered.length !== 0 ? Math.min(...filtered) : "";

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <div>The result is: {min}</div>
    </div>
  );
}

const data = [
  {
    obj: {
      no: "1",
      info: [ { name: "maya" }, { name: "mina" } ],
      total: "2000"
    }
  },
  {
    obj: {
      no: "2",
      info: [ { name: "maya" } ],
      total: "1000"
    }
  },
  {
    obj: {
      no: "3",
      info: [ { name: "maya" }, { name: "Mike" } ],
      total: "1000"
    }
  }
];
export default Min;

