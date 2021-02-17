import React, { Component } from 'react';
import './sign-in.styles.scss';
import  FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button'

class SignIn extends Component {
    constructor(props){
        super(props);
    
        this.state={
            'email': '',
            "password": '',
        }
    }
    handleSubmit = e=>{
        e.preventDefault();
        this.setState({email : '', password:''})
    };

    handleChange=e=>{
        const {value,name}=e.target;
        this.setState({[name]:value});
    };
    
    render() {
        return (
            <div className="sign-in">
                  <h2>Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form action=""onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} name="email" type="email" value={this.state.email} label='email' required />
                    {/* <label htmlFor="">Email</label> */}
                    <FormInput handleChange={this.handleChange} name="password" type="password" value={this.state.password} label='password' required />
                    {/* <label htmlFor="">Password</label> */}

                    <CustomButton type="submit"  value='Submit Form' >Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
