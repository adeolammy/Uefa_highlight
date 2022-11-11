import React, { Component } from 'react';
// import { withRouter } from "react-router-dom"

const URL_TEAM = 'http://localhost:3004/teams';


class Team extends Component{
    constructor(props){ 
        super(props);

        this.state = {data: []}
            
        
    } 
 
    componentDidMount(){
        
        fetch(`${URL_TEAM}?name=${this.props.match.params.id}`,{method: 'GET'})
        .then(response => response.json())
        .then(json =>{
            this.setState({data:json})
        })
    }
 
    renderData= ({data})=>{
        return data.map((item)=>{
            return (
                <div key={item.id} className="team_data_wrapper">
                    <div className='left'>
                            <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                        
                    </div>

                        <div className='right'>
                            <h1>{item.name}</h1>
                            <p>{item.discription}</p>
                            <hr/>

                            <div className='squad'>
                                {/* {this.renderSquad(item.renderSquad)} */}
                            </div>

                        </div> 

                </div>
            )
        })
    } 

    render(){
        return(
            
              <div className='team_data'>
                 {this.renderData(this.state)}
             </div>
            
        )
    }
}
export default Team;