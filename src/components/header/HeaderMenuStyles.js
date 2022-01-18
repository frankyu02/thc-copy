import styled from 'styled-components';

export const HeaderMenuStyles = styled.section` 
    .header{
        display: flex;
        border-bottom: 1px solid #000;
        font-family: 'Integral CF';
        &>div{
            height: 80px;
            display: flex;
            align-item: center;
            border-right: 1px solid #000;
            &:last-child{
                border-right: none
            }
        }
        &-alert{
            text-transform: uppercase;
            font-size: 14px;
            line-height: 17px;
            background: #000;
            padding: 13px 0 14px;
            color: #fff;
            text-align: center;
        }
        &-nav{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            ul{
                list-style: none;
                display: flex;
                align-items: center;
                margin: 0;
                padding: 0
            }
            li{
                font-size: 14px;
                line-height: 100%;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                margin-right: 60px
            }
        }
        &-logo{
            a{
                padding: 0 20px;
                display: flex;
                align-items: center
            }
        }
        .card, .search{
            &-btn{
                cursor: pointer
                display: block;
                height: 100%;
                background: none;
                border: none;
                outline: none
            }
        }
        .card-btn{
            padding: 0 32px;
            text-transform: uppercase
        }
        .search-btn{
            padding: 0 26px;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 100%;
        }
    }
`;