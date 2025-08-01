import React from 'react';
import IMG1 from './images/img1.jpeg'
import IMG2 from './images/img2.jpeg'
import IMG3 from './images/img3.jpeg'
import IMG4 from './images/img4.jpeg'
import './styles.scss'
const imageList = [IMG1, IMG2,IMG3,IMG4]
const Carousel = ()=>{
    const [state, setState] = React.useState(0)

    const next = ()=>{
        const aux = state;
        state===imageList.length-1? setState(0) : setState(aux+1)
    }
    const prev = ()=>{
        const aux=state;
        state===0 ? setState(imageList.length-1) : setState(aux-1)
    }
    return(
        <div>
           Carousel
           <div>
            <img src={imageList[state]} alt="carousel" className='imgClass'/>
            <input type='button' value={'previous'} onClick={prev}/>
            <input type="button" value="next" onClick={next}/>
           </div>
        </div>
    )
}
export default Carousel