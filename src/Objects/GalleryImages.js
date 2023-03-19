import React, { useEffect } from 'react';
import styled from "styled-components";
import { colorPalette } from '../Objects/Context';
import DesignData from '../Data/Designes.json';

const Image__SquareStyle = styled.div`
    position: relative;
    width: 100%;
    height: 100%;




    img{
        width: 100%;
        height: 100%;



        object-fit: cover;



        filter: ${props => props.isMouseOver ? "grayscale(0%)" : "grayscale(100%)"};
        border: ${colorPalette.green} 3px solid;
        transition: 0.5s;
        cursor: pointer;
        &:hover{
            background-color: ${colorPalette.green};
            color: ${colorPalette.darkBlue};
            filter: ${props => props.isMouseOver ? "grayscale(0%)" : "grayscale(100%)"};
        }
    }
    
    .image__DetailsX{
        z-index: 1000;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        transition: 0.5s;
        cursor: pointer;
        &:hover{
            opacity: 0;

            }
    }

    .image__Details{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: fit-content;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        transition: 0.5s;

        z-index: 100;
        h3{
            font-family: 'lulo font';
            font-size: 1.5rem;
            text-align: center;
        }
        &:hover{
            opacity: 1;
        }
    }

`;
export function ImageSquare({image,selectedImage,setSelectedImage}){
    const [isMouseOver, setIsMouseOver] = React.useState(false);
    return(
        <Image__SquareStyle isMouseOver={isMouseOver}>
            <img src={image.url} alt={image.name}  />
            <div className="image__DetailsX" onClick={()=>setSelectedImage(image)} onMouseEnter={()=>setIsMouseOver(true)} onMouseLeave={()=>setIsMouseOver(false)}> </div>
            {isMouseOver &&
            <div className="image__Details">
                <h3>{image.name}</h3>
            </div>}

        </Image__SquareStyle>
    )

}
const Gallary__Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr); 
    grid-gap: 10px;
    padding: 5%;

`;
const Image__DetailsStye = styled.div`

    @keyframes opens {
        0% { width: 0%; height: 0%; top: 50%; left: 50%;  }
        100% { width: 90%; height: 90%; top: 5%; left: 5%;}   
    }
    position: fixed;
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    animation: opens 1s;
    transition: 1s;
    z-index: 2500;
    border: ${colorPalette.green} 5px solid;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }


    button{
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        background-color: ${colorPalette.darkBlue};
        color: white;
        border: #ff2525 3px solid;
        transition: 0.5s;
        cursor: pointer;
        &:hover{
            background-color: #ff2525;
            color: ${colorPalette.darkBlue};
        }
    }
    
`;
function ImageDetails({selectedImage,setSelectedImage}){
     return(
        selectedImage && <Image__DetailsStye className="image__Details">
                <button onClick={()=>setSelectedImage(null)}>X</button>
                <img src={selectedImage.url} alt={selectedImage.name}  />
            </Image__DetailsStye>
        )
}
export function GalleryImages(){
    const images = DesignData.images;
    const [selectedImage, setSelectedImage] = React.useState(null);
    console.log(selectedImage);
    return (
        <>
            <Gallary__Container>
            {
                images.map((image,index)=>{
                    return <ImageSquare key={index} image={image} setSelectedImage={setSelectedImage} selectedImage={selectedImage}/>
                })
            }
            <ImageDetails selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
            </Gallary__Container>
           
        </>
    )
}