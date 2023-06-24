import {useRef} from "react";
import {useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import React from 'react';

function SliderComp({probka}) {
    const myRef = useRef(null)
    const handleButtonClick = () => {
        myRef.current.focus()
    };
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()

            }catch (error){
                console.log('Ошибка при получинеии данных')
            }
        }
        fetchData()

    })
    return(
        <>
            <input {...probka} ref={myRef}/>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide onClick={ () => handleButtonClick()
            }> <img src="https://lh3.googleusercontent.com/Xs7MQ3Hq9JDm_GfH156ua1ea3idYAaUiXOeJiagyJe2NyBO_02CW01q9Q7SoMaRN00uAtqVqD3tflhtPTuK1uZDm1w=w640-h400-e365-rj-sc0x00ffffff" alt=""/></SwiperSlide>
            <SwiperSlide onClick={ () => handleButtonClick()
            }> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTuHYxtUjIusEPsxOFICRoqoaaG9v894_lNt5HoGrN_UcN3nrIvNsP7MseFpTywyrIvoQ&usqp=CAU" alt=""/> 2</SwiperSlide>
            <SwiperSlide onClick={ () => handleButtonClick()
            }> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSli0Itt7_tnv94j4-0SzBU6oFZSjUuBaIUgChgUIh-FcLfCdZEG0X82ND1eS_YtoqPNs&usqp=CAU" alt=""/></SwiperSlide>
            <SwiperSlide onClick={ () => handleButtonClick()
            }> <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcWTjSJwnCBtuatrLo6ISHeKC2jCU0R5-p6Vis4F4iaLvDhkdG6QJqZS4Sk7TpbNG_r8&usqp=CAU"
                alt=""/></SwiperSlide>
            ...
        </Swiper>

        </>
    )
}

export default SliderComp;

