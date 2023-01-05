import React from 'react'
import Mycard from './Mycard.js'
import './Imagecarousel.css'
import images from './images'
 

const Imagecarousel = () => {
    let box = document.querySelector('.product-container');
    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width);

    }
    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
    }
    return (
        
        <div className="product-carousel">
            <div className="head1">
                <div className="heading">
                    <h3>Recent Events</h3>
                </div>
                <div className="rectangle">

                </div>
            </div>
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>
            <div className="grp562">


                <div className="product-container">
                     
                            {images.map((items) => (
                                 <Mycard  cardno={items.id}  text={items.text}  src={items.src} alt={items.alt} content={items.content}/>
                            ))}
                    

                </div>
            </div>


            <div class="ellipse4">

            </div>
            <div class="ellipse3">
            </div>
        </div>
    )
}

export default Imagecarousel