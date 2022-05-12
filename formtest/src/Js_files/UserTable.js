import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css_files/StyleUserTable.css';




function UserTable() {

    const [mainitems,setItems]=useState([]);
    const [nameVal , setNameVal] = useState("");
    const [emailVal, setEmailVal] = useState("");
    const [numberVal,setNumberVal] = useState("");
    const [ageVal,setAgeVal] = useState("");
    const [add,setAdd] = useState("ADD");
    const [isEdit, setEdit] = useState(false);
    const [isEdit1, setEdit1] = useState('');
    const[search,setSearch]=useState('');
   
    const handleSubmit=()=>{
        const obj={
            name:nameVal,
            email:emailVal,
            number:numberVal,
            age:ageVal
        }
        
        if(isEdit){
            const updatedObject=mainitems.map((user,ind)=>
            ind===isEdit1?obj:user
            );
            setItems(updatedObject);
        }
        else{
             setItems([...mainitems,obj]);
        }
        setItems((ls)=>[...ls,obj]);
        setAgeVal("");
        setEmailVal("");
        setNameVal("");
        setNumberVal("");
    }
    const handleDelete=(i)=>{

        mainitems.splice(i,1);
        setItems([...mainitems]);
    }

    const handleEdit=(i)=>{
        setEdit(true)
        setEdit1(i);
            const getdata=mainitems[i];
            setNameVal(getdata.name);
            setEmailVal(getdata.email);
            setNumberVal(getdata.number);
            setAgeVal(getdata.age);
    }

    const searchhandle=(name)=>{
        setSearch(name);
        mainitems.filter((item)=>{
            setItems(...mainitems.values(item).includes(name))
        })
    }

    return (
        <>
            <div className='container'>
                    <div className='row g-0'>
                        <label>Name :</label><br></br>
                        <input type={'text'} name='name' id='name' placeholder='Please Enter Your UserName' value={nameVal} onChange={(e) => setNameVal(e.target.value)}></input>
                    </div>
                    <div className='row g-0'>
                        <label>Email :</label><br></br>
                        <input type={'text'} name='email' id='email' placeholder='Please Enter Your Email-Address' value={emailVal} onChange={(e) => setEmailVal(e.target.value)}></input>
                    </div>
                    <div className='row g-0'>
                    <label>Mobile No. :</label><br></br>
                        <input type={'text'} name='number' id='number' placeholder='Please Enter Your Contact number' value={numberVal} onChange={(e) => setNumberVal(e.target.value)}></input>
                    </div>
                    <div className='row g-0'>
                        <label>Age :</label><br></br>
                        <input type={'number'} name='age' id='age' placeholder='Please Enter Your Age' value={ageVal} onChange={(e) => setAgeVal(e.target.value)}></input>
                    </div>
                    <div className='row btn_row g-0 justify-content-center'>
                        <button className='btn_submit' onClick={handleSubmit}>submit</button>
                    </div>
            </div>
            <div className='container'>
            <tr>
                <td>
                search:  <input type="" value={search}  onChange={(e)=>{searchhandle(e.target.value)}}></input>                       </td>
               </tr>
                <table>
                    
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            mainitems.map((a,i)=>
                            <tr>
                                <td>{i}</td>
                                <td>{a.name}</td>
                                <td>{a.email}</td>
                                <td>{a.number}</td>
                                <td>{a.age}</td>
                                <td>
                                    <button className='btn_edit' onClick={handleEdit} >Edit</button>
                                    <button className='btn_delete' onClick={handleDelete}>Delete</button>
                                </td>
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