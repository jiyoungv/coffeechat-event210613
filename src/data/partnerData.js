import shortid from 'shortid';
import img_event_partner_startup_tit from '../assets/images/img_event_partner_startup_tit.png';
import img_event_partner_startup1 from '../assets/images/img_event_partner_startup1.png';
import img_event_partner_startup2 from '../assets/images/img_event_partner_startup2.png';
import img_event_partner_startup3 from '../assets/images/img_event_partner_startup3.png';
import img_event_partner_startup4 from '../assets/images/img_event_partner_startup4.png';
import img_event_partner_overseas_tit from '../assets/images/img_event_partner_overseas_tit.png';
import img_event_partner_overseas1 from '../assets/images/img_event_partner_overseas1.png';
import img_event_partner_overseas2 from '../assets/images/img_event_partner_overseas2.png';
import img_event_partner_overseas3 from '../assets/images/img_event_partner_overseas3.png';
import img_event_partner_overseas4 from '../assets/images/img_event_partner_overseas4.png';
import img_event_partner_change_tit from '../assets/images/img_event_partner_change_tit.png';
import img_event_partner_change1 from '../assets/images/img_event_partner_change1.png';
import img_event_partner_change2 from '../assets/images/img_event_partner_change2.png';
import img_event_partner_change3 from '../assets/images/img_event_partner_change3.png';
import img_event_partner_change4 from '../assets/images/img_event_partner_change4.png';
import img_event_partner_planner_tit from '../assets/images/img_event_partner_planner_tit.png';
import img_event_partner_planner1 from '../assets/images/img_event_partner_planner1.png';
import img_event_partner_planner2 from '../assets/images/img_event_partner_planner2.png';
import img_event_partner_planner3 from '../assets/images/img_event_partner_planner3.png';
import img_event_partner_planner4 from '../assets/images/img_event_partner_planner4.png';

const partnerData = [
    {
        id: shortid.generate(),
        title: {
            txt: '대기업에서 스타트업으로 이동한 사람들',
            image: img_event_partner_startup_tit,
        },
        partners: [
            {
                image: img_event_partner_startup1,
                link: 'https://www.coffeechat.kr/with/hithere', 
            },
            {
                image: img_event_partner_startup2,
                link: 'https://www.coffeechat.kr/with/Pearl', 
            },
            {
                image: img_event_partner_startup3,
                link: 'https://www.coffeechat.kr/with/슈슈블링', 
            },
            {
                image: img_event_partner_startup4,
                link: 'https://www.coffeechat.kr/with/99', 
            },
        ],
    },
    {
        id: shortid.generate(),
        title: {
            txt: '해외 HQ 또는 APAC 오피스에서 일하는 사람들',
            image: img_event_partner_overseas_tit,
        },
        partners: [
            {
                image: img_event_partner_overseas1,
                link: 'https://www.coffeechat.kr/with/Mr.K', 
            },
            {
                image: img_event_partner_overseas2,
                link: 'https://www.coffeechat.kr/with/J', 
            },
            {
                image: img_event_partner_overseas3,
                link: 'https://www.coffeechat.kr/with/R', 
            },
            {
                image: img_event_partner_overseas4,
                link: 'https://www.coffeechat.kr/with/Paris', 
            },
        ],
    },
    {
        id: shortid.generate(),
        title: {
            txt: '외국계 프로이직러들',
            image: img_event_partner_change_tit,
        },
        partners: [
            {
                image: img_event_partner_change1,
                link: 'https://www.coffeechat.kr/with/CCloud', 
            },
            {
                image: img_event_partner_change2,
                link: 'https://www.coffeechat.kr/with/Wine', 
            },
            {
                image: img_event_partner_change3,
                link: 'https://www.coffeechat.kr/with/%EC%9C%A0%EC%9E%90%F0%9F%98%8E', 
            },
            {
                image: img_event_partner_change4,
                link: 'https://www.coffeechat.kr/with/Latte', 
            },
        ],
    },
    {
        id: shortid.generate(),
        title: {
            txt: '지금 가장 핫한 서비스 기획자들',
            image: img_event_partner_planner_tit,
        },
        partners: [
            {
                image: img_event_partner_planner1,
                link: 'https://www.coffeechat.kr/with/디디', 
            },
            {
                image: img_event_partner_planner2,
                link: 'https://www.coffeechat.kr/with/톨톨', 
            },
            {
                image: img_event_partner_planner3,
                link: 'https://www.coffeechat.kr/with/아몬드브리즈', 
            },
            {
                image: img_event_partner_planner4,
                link: 'https://www.coffeechat.kr/with/루크', 
            },
        ],
    },
];

export default partnerData;