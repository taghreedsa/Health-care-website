import React, { useState } from 'react';

import ItemsCarousel from 'react-items-carousel';

import Slider from "./Slider"

 
const Hero = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    
    return (

        <>
        <div className="img-slider mt-3 mb-5"style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={1}
        leftChevron={<button className="btn btn-light"><i class="fa fas fa-chevron-left "></i></button>}
        rightChevron={<button className="btn btn-light p0"><i class="fa fas fa-chevron-right"></i></button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        
        <div style={{ height: 620}}><img style={{width: 355, height: 620, background: '#EEE' }}src="https://i.pinimg.com/564x/e4/af/ef/e4afefaf0ef78bb70795ce896f21ce7c.jpg" alt="" /></div>
        <div style={{ height: 620}}><img style={{width: 355, height: 620, background: '#EEE' }}src="https://i.pinimg.com/564x/83/24/9e/83249e29aaa88afae1a8f0b22e07ed40.jpg" alt="" /></div>
        
        <div style={{ height: 620 }}><img style={{width: 355, height: 620, background: '#EEE' }}src="https://i.pinimg.com/564x/5e/16/b3/5e16b336bbb5ed06f0387119ebade594.jpg" alt="" /></div>
        <div style={{ height: 620 }}><img style={{width: 355, height: 620, background: '#EEE' }}src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1611495371/imh%20header/h4-post-img-8-1000x1458_ta6sxx.jpg" alt="" /></div>
        <div style={{ height: 620}}><img style={{width: 355, height: 620, background: '#EEE' }}src="https://i.pinimg.com/564x/e7/52/d4/e752d42f15b1c14eb357a3b06d1b7d55.jpg" alt="" /></div>


        <div style={{ height: 620}}><img style={{width: 355, height: 620, background: '#EEE' }}src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1611470336/project%203/h4-post-img-5-1000x1458_lqagdw.jpg" alt="" /></div>
        <div style={{ height: 620 }}><img style={{width: 355, height: 620, background: '#EEE' }}src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1611483656/ellieelien-wg2xU_UNiVc-unsplash_yqimel.jpg" alt="" /></div>
        <div style={{ height: 620}}><img style={{width: 355, height: 620, background: '#EEE' }}src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1611483652/logan-weaver-9D_rUDe7xvA-unsplash_jpubcc.jpg" alt="" /></div>

      </ItemsCarousel>
     
    </div>
<Slider/>
   </>
  
    )
}

export default Hero

