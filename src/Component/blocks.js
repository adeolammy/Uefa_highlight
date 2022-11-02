import React from 'react'
// import  Reveal  from 'react-reveal';
import Reveal from "react-awesome-reveal";
import { Link } from 'react-router-dom';
// import 'animate.css/animate.css';
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;



const generateBlocks = ({blocks}) =>{
    if(blocks){
        return blocks.map((item)=>{
            return(

                <Reveal  > 
                    
                    <div keyframes={customAnimation} key={item.id} className={`item ${item.type}`}>
                        <div className='veil'></div>
                            <div 
                            className='image'
                            style={{background: `url(/images/blocks/${item.image}) no-repeat`}}
                            >
                            </div>
                            <div className='title'>
                                <Link to={item.link}>{item.title}</Link>
                            </div>
                    </div>
                </Reveal>
            )
           
        })
    }
}

const Blocks = (props) =>{
    return(
        <div className='home_blocks'>
            {generateBlocks(props)}
        </div>
    )
}

export default Blocks;