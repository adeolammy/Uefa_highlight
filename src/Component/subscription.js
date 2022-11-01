import React, { Component } from 'react';
import { json } from 'react-router-dom';

class subscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: false,
            success: false
        }
    }

    saveSubscription = (email) => {
        const URL_EMAIL =   'http://localhost:3004/subcriptions'

        fetch(URL_EMAIL, {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' :'application/json'
            },
            body: JSON.stringify({email})
        }).then(res=>res.json())
        .then(()=>{
            this.setState({
                email: '' , 
                success: true
            })
        })
    }

    clearMessage = () =>{
        setTimeout( function(){
            this.setState({
                error:false,
                success:false
            })
        }.bind(this),3000)
    }


 
    handleSubmit = (e) =>{
        e.preventDefault();
        let email = this.state.email
        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email)){
            this.saveSubscription(email)
        }else{
                this.setState({error:true})
        }
        this.clearMessage()
    }


    onchangeInput = (e) =>{
        this.setState({
            email:e.target.value
        })
    }

    render() {
        return (
            <div className='subscribe_panel'>
                <h3>Subcribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                        placeholder ='email@yourEmail.com' 
                        type="text"
                        value={this.state.email}
                        onChange={this.onchangeInput}
                        />
                        <div className={this.state.error ? "error show" : "error"}>chech your email</div>
                        <div className={this.state.success ? "success show" : "success"}>Thank you</div>
                    </form>
                </div>
                <small>
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Neque eaque et minus iusto
                    dolore tempore earum corporis magni quasi ipsam?
                </small>
            </div>
        );
    }
}

export default subscription;