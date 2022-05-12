 
 
  
// import { useState } from "react";



//  const Store =()=>{
//     const [fname, setfName] = useState("");
//     const [lname, setlName] = useState("");
//     const [email, setemail] = useState("");
//     const [address, setaddress] = useState("");
//     const [add,setAdd] = useState("ADD");
//     const [list , setList] = useState([]);
    
//     const handleSubmit = (e) =>
//     {
//         setAdd("ADD");
//          const data = {fname ,lname, email,address};
//         setList((ls)=>[...ls,data]);
//         setfName("");
//         setlName("");
//         setemail("");
//         setaddress("");
           
//     }

//     const handleEdit = (e) =>{

//         setAdd("UDATE");

//         let xFName = e.target.getAttribute('editfname');
//         let xLName = e.target.getAttribute('editlname');
//         let xEmail = e.target.getAttribute('editemail');
//         let xAddress= e.target.getAttribute('editaddress');

//         // console.log(name);
//         // document.getElementById("fname").value = xFName;
//         // document.getElementById("lname").value = xLName;
//         // document.getElementById("email").value = xEmail;
//         // document.getElementById("address").value = xAddress;
        
//         setfName(xFName);
//         setlName(xLName);
//         setemail(xEmail);
//         setaddress(xAddress);

//         let x = e.target.getAttribute('editdata');
//         setList(list.filter(itemes => itemes.id !== x));
 
//     }


//      return(
//         <div>
//         <form>
//          FirstName: <input
//             type="text"
//             value={fname}
//             onChange={(e)=>{setfName(e.target.value)}} 
//             placeholder=" Enter your Firstname"
//           /><br/>
//           LastName: <input type="text"
//           value={lname} onChange={(e)=>{setlName(e.target.value)}} placeholder="Enter your lastname"></input><br/>

//           Email: <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your Email"></input><br/>
//           Address: <input type="text" value={address} onChange={(e)=>setaddress(e.target.value)} placeholder="Enter your Address"></input><br/>

//           <input type="button"  value="submit"  onClick={handleSubmit} ></input>
//         </form>
//         <div className='container'>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>FirstName</th>
//                             <th>LastName</th>
//                             <th>Email</th>
//                             <th>Address</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody >
//                         {
//                             list.map((a,i)=>
                        
//                             <tr>
//                                 <td>{i}</td>
//                                 <td>{a.fname}</td>
//                                 <td>{a.lname}</td>
//                                 <td>{a.email}</td>
//                                 <td>{a.address}</td>
//                                 <td>
//                                 <td>
//                                     <button className='btn_edit' onClick={handleEdit} editdata={a.id} editfname={a.fname} editemail={a.email} editlname={a.lname} editaddress={a.address}>Edit</button>
//                                     <button className='btn_delete'  removedata={a.id}>Delete</button>
//                                 </td>
                                    
//                                 </td>
//                             </tr>  
//                         )                            
//                         }
//                     </tbody>
//                 </table>
//             </div>


            
//       </div>
        
//      )
//   }

 
//  export default Store;

import React, { useState } from "react";

export default function Store() {
  const [entries, setEntries] = useState([
    { name: "Name 1" },
    { name: "Name 1" }
  ]);
  const [indexToEdit, setIndexToEdit] = useState(-1);
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Button</td>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, recordIdx) => (
          <tr>
            <td>
              <input
                type="text"
                value={entry.name}
                disabled={recordIdx !== indexToEdit}
                onChange={(val) => {
                  let _entries = [...entries];
                  _entries[indexToEdit] = val;
                  setEntries(_entries);
                }}
                onBlur={() => {
                  setIndexToEdit(-1);
                }}
              />
            </td>
         
            <td>
              <button
                onClick={() => {
                  setIndexToEdit(recordIdx);
                }}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}