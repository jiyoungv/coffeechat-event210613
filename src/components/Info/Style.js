import styled from 'styled-components';

export const Infos = styled.section`
    margin-top: 32px;

    .info-logo {
        overflow-x: hidden;
        height: 128px;
        margin-bottom: 32px;
    }

    .info-logo-img {
        display: flex;
        width: 618px;
        animation: ani-info-logo-img 20s linear infinite;

        img {
            flex-shrink: 0;
            width: 618px !important;
            height: 128px;
        }
    }

    @keyframes ani-info-logo-img {
        0% {transform: translateX(0);}
        100% {transform: translateX(-100%);}
    }

    .info-img {
        margin-bottom: 40px;
    }
`;