import React from 'react';
import { Heros } from './Style';
import img_event_hero from '../../assets/images/img_event_hero.png';

function Hero () {
    return (
        <Heros>
            <figure>
                <img src={img_event_hero} alt="내가 궁금한 그 회사 사람과 1:1 커피챗 무료" />
            </figure>
        </Heros>
    );
}

export default Hero;