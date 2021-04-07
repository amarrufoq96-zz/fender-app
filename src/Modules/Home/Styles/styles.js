import styled from 'styled-components'

export const List = styled.ul`
    overflow-x: hidden;
`

export const TitleDays = styled.h4`
    text-align: initial;
    font-size: 18px;
    color: #828282;
`

export const ListOfCards = styled.div`
    display: flex;
    justify-content: center;
    padding-top: '2vh';              
`
export const IconStyle = styled.span`
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: #1890ff;
    }
`
export const Iconos = styled.img`
    margin-right: 10px;
    height: 25px;
`

export const NameCategory = styled.span`
    opacity: ${props => props.opacity};
`
