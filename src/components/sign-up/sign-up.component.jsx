import React from 'react';

import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state= {
            displayName :'',
            email : '',
            password :'',
            confirmPassword:''
        }
    }
    handleChange= event =>{
        const {value,name} = event.target;
        this.setState({[name] : value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({displayName:'',email:'',password:'',confirmPassword:''})
    }
    render(){
       const {displayName,email,password,confirmPassword} = this.state;
        return(
            
            <div className='sing-up'>
                <h2 className='title'> I do not have a account </h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput name="displayName" 
                   type='text'
                   value={displayName}
                   handleChange={this.handleChange}
                   label='Display Name'
                  required/>

                <FormInput name="email" type='email'
                   value={email}
                   handleChange={this.handleChange}
                   label='Email'
                  required/>

                <FormInput name="password" type='password'
                  handleChange={this.handleChange}
                  value={password}
                  label='Password'
                  required/>

                <FormInput name="confirmPassword" type='password'
                  handleChange={this.handleChange}
                  value={confirmPassword}
                  label='Confirm Password'
                  required/>

                <CustomButton type='submit'>Submit</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;