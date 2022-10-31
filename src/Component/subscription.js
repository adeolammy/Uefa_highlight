import React, {Component} from 'react'

class Subscribe extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: ''
        }

    }
    render(){
        return(
            <div className='subcribe_panel'>
                <h3>Subscribe to us</h3>
                <div>
                    <form>
                        <input type="text"/>
                    </form>
                </div>

                <small>
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae similique ducimus numquam 
                       iusto doloribus ipsam voluptatem magnam excepturi! 
                       Ipsa reprehenderit eum tenetur illum soluta quas rerum pariatur provident magnam nostrum?
                </small>

            </div>
        )
    }
}

export default Subscribe;