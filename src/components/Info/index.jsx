import React from 'react';
import { Infos } from './Style';
import { Inners } from '../Styles/Common';
import img_event_info from '../../assets/images/img_event_info.png';
import img_event_info_logo from '../../assets/images/img_event_info_logo.png';

function Info () {
    return (
        <Infos> 
            <div className="info-logo">
                <figure className="info-logo-img">
                    <img src={img_event_info_logo} alt="" />
                    <img src={img_event_info_logo} alt="" />
                </figure>
            </div>
            <Inners>
                <figure className="info-img" >
                <img src={img_event_info} alt="" />
                </figure>
            </Inners>
        </Infos>
    );
}

export default Info;