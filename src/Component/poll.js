import React, { Component } from 'react';
import { json } from 'react-router-dom';

const URL_HOME = 'http://localhost:3004/teams'

class poll extends Component {
    constructor(props){
        super(props);

        this.state ={
            pollTeams: []
        }
    }
    fetchPoll(){
        fetch(`${URL_HOME}?poll=true&_sort=count&_order=desc`, {method: 'GET'})
        .then(response => response.json())
        .then(json =>{
      
            this.setState({
                pollTeams:json 
            })
        })
    }

    componentDidMount(){
        this.fetchPoll()
    }
        addCount = (count, id) => {
            fetch(`${URL_HOME}/${id}`,{
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify({count:count + 1})
            })
            .then(()=>{
                this.fetchPoll()
            })
        }

    renderPoll = () =>{  
        const position  = ['1ST', '2ND', '3RD']
        return this.state.pollTeams.map((item,index)=>{
            return(
                <div key={item.id} className="poll_item" onClick={()=> this.addCount(item.count, item.id)}>
                    <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                    <h4>{position[index]}</h4>
                    <div>{item.count} votes</div>
                </div>
            )
        })    
    }

    render() {
        return (
            <div className='home_poll'>
                <h3>Who will be the next Champion ?</h3>
            <div className='poll_container'>{this.renderPoll()}</div>
            </div>
        );
    }
}

export default poll;