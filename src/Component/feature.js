import React from 'react';
import Slider from 'react-slick';

const settings = {
    arrows:false,
    dots: false,
    speed: 500,
    slidesToShoe:1,
    slidesToScroll:1
}

const generateSlides = ({slides}) =>{
    if(slides){
        return(
            <Slider {...settings}>
                    {slides.map((item)=>{
                        return(
                            <div key={item.id} className="item-slider">

  
                                
                                 <div className="item-slider" 
                                    style={{background:`url(/images/covers/${item.cover})`}} >
                                
                            

                                        <div className='caption'>
                                            <h4>{item.topic}</h4>
                                            <p>{item.title}</p>

                                        </div>
                                </div> 
                            </div>
                        )
                    })}
            </Slider>
        )
    }
}

const Feature =(props) => {
    
    return(
        <div>
            {generateSlides(props)}
        </div>
    )
}

export default Feature