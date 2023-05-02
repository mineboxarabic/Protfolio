import React, { useEffect } from 'react';
import {Header} from "../Objects/Header";
import {Footer} from "../Objects/Header";
import styled from 'styled-components';
import { colorPalette } from '../Objects/Context';
import projects from '../Data/Projects.json'
import { GalleryProjects } from '../Objects/GalleryProjects';
import { Link } from 'react-scroll';
const Choice__Container = styled.div`
background-color: ${colorPalette.darkBlue};

    height: 90vh;
    width: 98vw;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width:50%;
        height: 100%;
    }
    .Choice__Programming{
        width: 50%;
        height: 100%;
        text-align: center;
        background-color: transparent;
        border: ${colorPalette.green} 3px solid;
        color: ${colorPalette.green};
        font-size: 2em;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
        &:hover{
            background-color: ${colorPalette.green};
            color: ${colorPalette.darkBlue};
        }
        a{
            text-decoration: none;
            color: inherit;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .Choice__Design{
        width: 50%;
        height: 100%;
        background-color: transparent;
        border: ${colorPalette.lightGrey} 3px solid;
        color: ${colorPalette.lightGrey};
        font-size: 2em;
        font-weight: bold;
        cursor: pointer;



        transition: 0.5s;
        &:hover{
            background-color: ${colorPalette.lightGrey};
            color: ${colorPalette.darkBlue};
        }

        a{
            text-decoration: none;
            color: inherit;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

        }
    }

`;
function Portfolio(){
    useEffect(() => {
        console.log(projects);
    }, []);

    return(
        <>
        <Header PageNumber={4} />
        <Choice__Container>
            <div className='Choice__Programming'>
                <Link offset={100} smooth={true} to='GalleryProjects' duration={1000}>PROGRAMMING</Link>
            </div>
            <div className='Choice__Design'> 
                <a href='#/Designs'>DESIGN</a>
            </div>
            
        </Choice__Container>
        <GalleryProjects id={"GalleryProjects"} />
        <Footer />
        </>

    );
}

export default Portfolio;