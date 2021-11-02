import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Util} from './Util';
import {submitUserDetail} from './service/ApiService';

class App extends Component {
  render() {
    return (
      <Register />
    );
  }
}

//Registration Page
class Register extends Component {
constructor(props){
super(props);
this.state={ fullName:'',email:'',password:''}
this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}

handleChange = e=> {
const { name,value }=e.target;
this.setState({
[name]:value
});
}

handleSubmit(event){
event.preventDefault()
if(this.isValidInput()){
 const user = {
      name: this.state.fullName
    };
//Call aPI here
 submitUserDetail(user,response=>{
 alert("User Registered Successfully");
 },(error)=>{
 alert(error)
 })
}
}

isValidInput(){
const {fullName,email,password} =this.state
var isValidInput=false;
if(Util.isEmpty(fullName)){
alert('Please enter full Name.')
}else if(Util.isEmpty(email)){
 alert('Please enter valid EmailId.')
}else if(Util.isEmpty(password)){
 alert('Please enter Password.')
}else{
  isValidInput=true;
 }
return isValidInput;
}


  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit} >
            <div className='fullName'>
              <label htmlFor="fullName">Full Name</label>
              <input type='text' name='fullName' onChange={this.handleChange} value={this.state.fullName}  />
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' value={this.state.email}  onChange={this.handleChange}  />
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' value={this.state.password}  onChange={this.handleChange}  />
            </div>
            <div className='info'>
              <small>Password must be eight characters in length.</small>
            </div>
            <div className='submit'>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
