
import React, { Component } from 'react';
import '../css_files/StyleUserTable.css';

class UserTable extends Component {
   constructor () {
       super()
      this.state = {
         name:'',
         email: '',
         address:'',
      }
   }

   changenameHandler=event=>{
       this.setState({
           name:event.target.value
       });
   }

   changeEmailHandler = event => {
      this.setState({
         email: event.target.value
      });
   }

   changeAddressHandler = event => {
    this.setState({
       address: event.target.value
    });
 }


   render () {
const submithandler=()=>{

}
return (

<div>   
     <form>
            <label>Name:</label>
            <input type="text"
               name="name"
               value={this.state.name}
               onChange={this.changenameHandler}
            /><br></br>
           
             <lable>Email:</lable>
            <input type="email"
               name="email"
               value={this.state.email}
               onChange={this.changeEmailHandler}
            /><br></br>

            <lable>Address:</lable>
            <input type="text"
               name="text"
               value={this.state.address}
               onChange={this.changeAddressHandler}
            /><br></br><br></br>
          
         </form>

         <input type="button" value='submit'  onclik={submithandler}/>

         <div className='container'>
            
                <table>
                    
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                          
                        </tr>
                    </thead>
                    <tbody >
                        {
                                                     
                        }
                    </tbody>
                </table>
            </div>
         </div>
      );
   }
}
export default UserTable;