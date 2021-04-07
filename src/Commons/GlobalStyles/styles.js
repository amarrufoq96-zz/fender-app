import styled from 'styled-components'

export const ContainerCard = styled.div`
    position: relative;
    height: 300px;
    width: 250px;
    text-align: center; 
`

export const Img = styled.img`
    width: 202px;
    height: 190px;
    border-radius: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.38);
`

export const Description = styled.div`
   padding-top: 20px;
`

export const TitleOfComponent = styled.div`
    display: flex;
    justify-content: center;
    height: 58px;
    align-items: center;
`
export const List = styled.ul`
    overflow-x: hidden;
    text-align: center;
    margin-top: 30px;
`

export const Line = styled.hr`
    background: #C4C4C4;
`
export const Iconos = styled.img`
    margin-right: 10px;
    height: 25px;
`

export const NameCategory = styled.span`
    opacity: ${props => props.opacity};
`
/* styles of sessions item */

export const ItemRectangle = styled.div`
    border: 1px solid silver;
    width: 100%;
    box-shadow: 4px 3px 7px rgba(0,0,0,0.38);
`

export const ImgRectangule = styled.img`
    width: 100%;
    height: 160px;
`
export const DescriptionRectangule = styled.div`
   padding: 8px 10px;
   color: #828282;
   font-size: 14px;
   text-align: left;
`

export const ImgSpeaker = styled.img`
    border-radius: 50px;
    width: 50px;
    height: 50px;
`

export const ContainerImgSpeaker = styled.div`
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FilterContainer = styled.div` 
    padding: 15px 0;
`

export const TitleOfFilter = styled.h3`
    color: #88898C;
    font-weight: 300;
    margin:5px;
`

/* styles of sessions item */
