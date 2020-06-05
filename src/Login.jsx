import React, { Component } from 'react';
import Users from './JSONs/Registrations.json';
import Textbox from './Components/input';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = { 
            errorFlag : false,
            uName : "",
            uPass : "",
            loginFlag : false,
            allUsers : Users,
            errorMsg : ""
        }
    }



    onLogin = () =>{
        let users = this.state.allUsers.users, uFlag = false;
        users.forEach((eachSet) => {
            if(eachSet.username === this.state.uName){
                uFlag = true;
                if(eachSet.password === this.state.uPass){
                    this.props.checkLogin(true);
                }
                else{
                    this.setState({
                        errorFlag:true,
                        errorMsg: "Incorrect Password"
                    });
                }
                
            }
        });
        if(!uFlag){
            
                this.setState({
                    errorFlag:true,
                    errorMsg: "Username does not exists"
                });
            
        }


        
    }

    onUserType = (e) =>{
        let name = e.target.value;
        this.setState({
            uName : name
        })
        
    }

    onPassType = (e) =>{
        let pass = e.target.value;
        this.setState({
            uPass : pass
        })
        
    }
    render() { 
        return ( <div>
            <div className='loginContainer'>
                <div className='topHeading'>
                    Login
                </div>
                <div className='loginDetails'>
                    Infy Movies is an online application where you can book tickets for your favourite movie. Please login to book your tickets.
                    <div className='loginboxes'>
                        <Textbox type={"text"} label={"Username"} onChange={this.onUserType}/>
                        <Textbox type={"password"} label={"Password"} onChange={this.onPassType}/>
                    </div>
                    <div className='logSubmit' onClick={this.onLogin}>
                        Login
                    </div>
                </div>
            </div>
        {this.state.errorFlag ? <div className='errorTxt'>{this.state.errorMsg}</div> : null}
        </div> );
    }
}
 
export default Login;