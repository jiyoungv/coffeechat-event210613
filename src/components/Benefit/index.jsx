import React from 'react';
import { Benefits } from './Style';
import img_event_benefit from '../../assets/images/img_event_benefit.png';

function Benefit () {
    return (
        <Benefits>
            <figure>
                <img src={img_event_benefit} alt="" />
            </figure>
        </Benefits>
    );
}

export default Benefit;