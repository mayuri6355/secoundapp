import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function UserTable() {

    const [mainitems,setItems]=useState([]);
    const [nameVal , setNameVal] = useState("");
    const[rollnoVal,setRollNOVal]=useState("");
    const[sub1Val,setSub1Val]=useState("");
    const[sub2Val,setSub2Val]=useState("");
    const[sub3Val,setSub3Val]=useState("");
    const[sub4Val,setSub4Val]=useState("");
    const[sub5Val,setSub5Val]=useState("");
    const[minVal,setMinVal]=useState("");
    const[maxVal,setMaxVal]=useState("");
    const[totalVal,setTotalVal]=useState({});
    const[PerVal,setPerVal]=useState("");
    const[resultVal,setResultVal]=useState("");
  
    const handleSubmit=()=>{

        const x = Math.max(sub1Val,sub2Val,sub3Val,sub4Val,sub5Val);

        const y=Math.min(sub1Val,sub2Val,sub3Val,sub4Val,sub5Val);

        const total = +sub1Val + +sub2Val + +sub3Val + +sub4Val + +sub5Val;

        const p= total/5; 


    var grade;

    if (sub1Val>=35) {
    grade = 'pass';
    } 
    else if(sub2Val>=35){
    grade = 'pass';
    }
    else if(sub3Val>=35){
    grade = 'pass';
    }

    else if(sub4Val>=35){
    grade = 'pass';
    }

    else if(sub5Val>=35){
    grade = 'pass';
    }
    else{
    grade = "fail";
    }
    
const obj={
            name:nameVal,
            rollno:rollnoVal,
            sub1:sub1Val,
            sub2:sub2Val,
            sub3:sub3Val,
            sub4:sub4Val,
            sub5:sub5Val,
            max:x,
            min:y,
            Total:total,
            Per:p,
            Result:grade,              
        }
    setItems([...mainitems,obj]);
    setNameVal("");
    setRollNOVal("");
   setSub1Val("");
    setSub2Val("");
    setSub3Val("");
    setSub4Val("");
    setSub5Val("");
    setMinVal("");
    setMaxVal("");
    setTotalVal("");
    setPerVal("");
    setResultVal("");
    }
    
    return (
    
        <>
            <div className='container'>
                    <div className='row g-0'>
                        <label>Student Name :</label>
                        <input type={'text'} name='name' id='name' placeholder='Please Enter Your Name' value={nameVal} onChange={(e) => setNameVal(e.target.value)}></input>
                    </div>
                    <div className='row g-0'>
                        <label>RollNo :</label>
                        <input type={'number'} name='number' id='number' placeholder='Please Enter Your RollNo' value={rollnoVal} onChange={(e) => setRollNOVal(e.target.value)}></input>
                    </div>
                    <div className='row g-0'>
                    <label>SUb1 :</label><br></br>
                        <input type={'number'} name='number' id='number' placeholder='Please Enter Your Marks' value={sub1Val} onChange={(e) => setSub1Val(e.target.value)}></input>
                    </div>
                    <div className='row g-0'>
                    <label>SUb2 :</label><br></br>
                        <input type={'number'} name='number' id='number' placeholder='Please Enter Your Marks' value={sub2Val} onChange={(e) => setSub2Val(e.target.value)}></input>
                    </div>
                    <div className='row g-0'>
                    <label>SUb3 :</label><br></br>
                        <input type={'number'} name='number' id='number' placeholder='Please Enter Your Marks' value={sub3Val} onChange={(e) => setSub3Val(e.target.value)}></input>
                    </div>
                    <div className='row g-0'>
                    <label>SUb4:</label><br></br>
                        <input type={'number'} name='number' id='number' placeholder='Please Enter Your Marks' value={sub4Val} onChange={(e) => setSub4Val(e.target.value)}></input>
                    </div>
                    <div className='row g-0'>
                    <label>SUb5 :</label><br></br>
                        <input type={'number'} name='number' id='number' placeholder='Please Enter Your Marks' value={sub5Val} onChange={(e) => setSub5Val(e.target.value)}></input>
                    </div>
                    <div className=' justify-content-center'>
                        <button className='btn_submit' onClick={handleSubmit}>submit</button>
                    </div>
            </div>
  
            <div className='container'>
       
                <table>
                    
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>StudentName</th>
                            <th>RollNo</th>
                            <th>SUb1</th>
                            <th>SUb2</th>
                            <th>SUb3</th>
                            <th>SUb4</th>
                            <th>SUb5</th>
                            <th>MAX</th>
                            <th>MIN</th>
                            <th>TOTAL</th>
                            <th>PER</th>
                            <th>RESULT</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            mainitems.map((a,i)=>
                            <tr>
                                <td>{i}</td>
                                <td>{a.name}</td>
                                <td>{a.rollno}</td>
                                <td>{a.sub1}</td>
                                <td>{a.sub2}</td>
                                <td>{a.sub3}</td>
                                <td>{a.sub4}</td>
                                <td>{a.sub5}</td>
                                <td>{a.max}</td>
                                <td>{a.min}</td>
                                <td>{a.Total}</td>
                                <td>{a.Per}</td>
                                <td>{a.Result}</td>
                                
                            </tr>  
                        )                            
                        }
                
                    </tbody>
                </table>
            </div>

            
        </>
 
    )
}


export default UserTable;