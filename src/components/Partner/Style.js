import styled from 'styled-components';

export const Partners = styled.section`
    padding: 48px 0 104px;
    background: #F5F7FA;

    .partner-tit {
        margin-bottom: 30px;
    }

    .partner-list-wrap {
        margin-bottom: 40px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .partner-list-tit {
        margin-bottom: 16px;
    }

    .partner-list {
        li {
            margin-bottom: 12px;
            box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.04);

            &:last-of-type {
                margin-bottom: 0;
            }

            a {
                display: block;

                img {
                    display: block;
                }
            }
        }
    }
`;