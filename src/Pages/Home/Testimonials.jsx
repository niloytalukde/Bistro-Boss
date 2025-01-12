
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
const Testimonials = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    
    return (
        <div className='w-[75rem] mx-auto h-[15rem]'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        <div className=' justify-center flex mx-auto'>
        {
            reviews.map(review=><SwiperSlide>
           
          <p className='w-8/12 justify-center flex mx-auto'>{review.details}</p>
          <h1 className='justify-center flex mx-auto'>{review.name}</h1>
                </SwiperSlide>)
        }
        </div>
        
      
      </Swiper>
    </div>
    );
};

export default Testimonials;