import styled from "styled-components";
import backgroundImage from '../../../public/img/banner.png';

const ContainerBanner = styled.div`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 54.75vh;
    margin: 0;
    border-radius: 20px;
    max-width: 100vw;
    background-size: cover;
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 21.96vw;
    padding: 0 64px;
`


const Banner = () =>{
    return<ContainerBanner $backgroundImage={backgroundImage}>
        <TituloEstilizado>A galeria mais completa de fotos do espaço!</TituloEstilizado>
    </ContainerBanner>
}

export default Banner;