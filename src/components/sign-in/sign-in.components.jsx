
import React from 'react';

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }

    }
    handleChange= event =>{
        const {value,name} = event.target;
        this.setState({[name] : value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    render(){
        return (
        
            <div className='sing-in'>
              <h2>I already have an account</h2>
              <span>Sing in with your email and password</span> 
              <form onSubmit={this.handleSubmit}>
                  <FormInput name="email" type='email'
                   value={this.state.email}
                   handleChange={this.handleChange}
                   label='Email'
                  required/>

                  
                  <FormInput name="password" type='password'
                  handleChange={this.handleChange}
                  value={this.state.password}
                  label='Password'
                  required/>

                  <CustomButton type='submit'>Sign In</CustomButton>
              </form> 
            </div>

        )
    }

}

export default SignIn;