import React from 'react';
import { Intros } from './Style';
import img_event_intro from '../../assets/images/img_event_intro.png';

function Intro () {
    return (
        <Intros>
            <figure>
                <img src={img_event_intro} alt="" />
            </figure>  
        </Intros>
    );
}

export default Intro;