import React, { useEffect } from 'react';
import Data from '../Data/Projects.json';
import styled from 'styled-components';
import { colorPalette } from '../Objects/Context';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
const Projects__Container = styled.div`
    background-color: ${colorPalette.darkGrey};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    padding: 5%;
`;

const Projects__Square = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    border: ${colorPalette.green} 3px solid;
    transition: 0.5s;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: ${colorPalette.green};
        color: ${colorPalette.darkBlue};
    }
`;
const Projects__Detail = styled.div`
    font-family: 'small thin font';
    position: fixed;
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
    background-color: ${colorPalette.darkBlue};
    color: white;
    display: flex;
    flex-direction: column;
    border: ${colorPalette.green} 3px solid;
    transition: 0.5s;
    overflow-y: scroll;
    .Cover__Image{
        width: 90%;
        height: 300px;
        object-fit: cover;
        margin: auto;
        box-shadow:  0 0 10px 10px ${colorPalette.darkBlue};
        z-index: -1000;
    }
    .Markdown__Container{
        width: 80%;
        margin: auto;

        transition: 0.5s;
        h1{
            font-family: 'lulo font';
        }
        a{
            color: ${colorPalette.green};
            transition: 0.5s;
            &:hover{
                color: ${colorPalette.lightGrey};
            }
        }
        img{

            margin: auto;
            

        }
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

function DetailPopup(props){
   const [markdownText, setMarkdownText] = React.useState("");

   useEffect(()=>{
    if(props.project != null){
        fetch(props.project.mdFile)
        .then((response) => response.text())
        .then((text) => setMarkdownText(text))
    }
   }, [props.project]);
    


    return (
        props.isShowen ? <Projects__Detail>
            <button onClick={()=>props.setProject(null)}>X</button>
        <img className='Cover__Image' src={props.project.Image} alt={props.project.Name} width={200} />
        <div className="Markdown__Container">
       
            <ReactMarkdown rehypePlugins={[rehypeRaw]} skipHtml={false} children={markdownText}></ReactMarkdown>
        </div>
        
        </Projects__Detail> : null
    )
}
function GallaryProjectSquare({project, setProject}) {

    return (
        <Projects__Square onClick={()=>setProject(project)}>
            <h1>{project.Name}</h1>
            <img src={project.Image} alt={project.Name} width={200} />
            <p>{project.Description.en}</p>
        </Projects__Square>
    )
}
export function GalleryProjects({id}){
    const projects = Data.projects;
    const [currentProject, setCurrentProject] = React.useState(null);
    return (
        <Projects__Container id={id} >
            {projects.map((project, index) => {
                return <GallaryProjectSquare key={index} project={project} setProject={setCurrentProject} />
            })
            }
            <DetailPopup isShowen={currentProject != null} project={currentProject} setProject={setCurrentProject} />
        </Projects__Container>
    )
}