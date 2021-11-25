import React from 'react';
import { Partners } from './Style';
import { Inners } from '../Styles/Common';
import img_event_partner from '../../assets/images/img_event_partner.png';
import partnerData from '../../data/partnerData';
import FloatingButton from '../FloatingButton';

function Partner () {
    const partnerList = partnerData.map((data, index) => {
        return (
            <article key={data.id} className="partner-list-wrap">
                <figure className="partner-list-tit">
                    <img src={data.title.image} alt={data.title.txt} />
                </figure>
                <ul className="partner-list">
                    {data.partners?.map((partner, index2) => {
                        return (
                            <li key={index2}>
                                <a href={partner.link} title="파트너 바로가기" target="_blank" rel="noreferrer">
                                    <img src={partner.image} alt="" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </article>
        );
    });

    return (
        <Partners>
            <Inners>
                <figure className="partner-tit">
                    <img src={img_event_partner} alt="커피챗이 처음인 당신을 위한 파트너 추천!" />
                </figure>
                <div>
                    {partnerList}
                </div>
            </Inners>
        </Partners>
    );
}

export default Partner;