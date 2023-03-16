
import Header from "./Header";
import {Footer} from "./Header";
import logos from "../Assets/images/Logo.png";
import styled from "styled-components";
import React from "react";
import { useState } from "react";
import backgound1 from "../Assets/images/Backgound1-min.jpg";
import backgound2 from "../Assets/images/Backgound2-min.jpg";
import ClickMe from "../Objects/ClickMe";
import { isMouseOverAComboBox , colorPalette } from '../Objects/Context';
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Styles/Home.scss';
/**
 * The color pallet of this website is:
 * #00d646 : green
 * #2f2e2e : dark grey
 * #333b50 : dark blue
 */
const App = styled.div`
   background-color: ${colorPalette.darkBlue};
   color: #fff;
   padding: 0;
   margin: 0;
`;
const SkillsLanguagesList = styled.ul`
         background-color: ${colorPalette.darkGrey};
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        padding: 0;
        margin: 0;
        transition: all 0.3s ease-in-out;
        li{
            transition: all 0.3s ease-in-out;
            margin: 0 10px;
            width: 30%;
            height: 240px;
            padding: 0;
            font-family: 'small thin font';
            font-size: 1rem;
            font-weight: 400;
            color: ${colorPalette.lightGrey};
            text-align: center;
            text-transform: uppercase;
        h2{
            font-family: 'small thin font';
            font-size: 2rem;
            font-weight: 400;
            margin: 0;
            padding: 0;
            color: ${colorPalette.lightGrey};
            text-align: center;
            text-transform: uppercase;
            cursor: pointer;
            
            &:hover{

               color: ${colorPalette.green};
               transition: all 0.2s ease-in-out;
            }
        }
        }
`;
const ComboSkillStyle = styled.ul`
   list-style: none;
   height: ${props => props.heightx}px;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   align-items: center;
   transition: all 0.3s ease-in-out;
   border-radius: 10px;
   li{
      margin: 0;
      padding: 0;
      width: 100%;
      height: 14%;
      font-family: 'small thin font';
      color: #BEC7D5;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out;
      &:hover{
         color: ${colorPalette.green};
      }
   }
            
        
`;
const Skills_Title_Style = styled.div`
    .Header__Title{
    font-family: 'lulo font';
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    padding: 0;

    text-align: center;
    span{
        color: #BEC7D5;
    }

}

.Header__Title__1{
    font-family: 'lulo font';
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    padding: 0;

    text-align: center;
    span{
        color: #00d646;
    }

}

`;
const Small_popup = styled.div`
   position: absolute;
   top: 0px;
   left: 0px;
   width: 80px;
   height: 30px;
   font-size: 2px;
   border: ${colorPalette.green} 1px solid;
   color: ${colorPalette.green};
   border-radius: 10px;
   transition: all 0.3s ease-in-out;
   &:hover{
      background-color: ${colorPalette.darkGrey};
   }
`;
function Skills_Title({number,title,subtitle}){
   return(<Skills_Title_Style>
            <h1 className="Header__Title"><span>{number}</span> {title}</h1>
            <h1 className="Header__Title__1">{subtitle}</h1>
         </Skills_Title_Style>
   )
}
         
function ComboSkill(props){
   const [isFolded, setIsFolded] = React.useState(true);

   const {isMouseOverAComboBoxState,setIsMouseOverAComboBoxState} = useContext(isMouseOverAComboBox);
   return(
      
      <li>
         <Small_popup>Click Me!</Small_popup>
         <h2  onMouseEnter={()=>{
            if(isFolded === false)
               setIsMouseOverAComboBoxState(true)
            }} onMouseLeave={()=>setIsMouseOverAComboBoxState(false)} onClick={()=>setIsFolded(!isFolded)}>{props.title} {isFolded ? "︽" :"︾" } </h2>
         <ComboSkillStyle heightx={isFolded ? 200 : 0}>

            { props.children}
         </ComboSkillStyle>
      </li>
   )
}
const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if(entry.isIntersecting){
         if(entry.target.classList.contains("Academic__Seperator__NoAnimation")){
            entry.target.classList.add("Academic__Seperator__Animation");
         }
         if(entry.target.classList.contains("Academic__Side__info__Container"))
            entry.target.classList.add("Container__Animation__Fade");
            
      }
      else{
         if(entry.target.classList.contains("Academic__Seperator__Animation"))
            entry.target.classList.remove("Academic__Seperator__Animation");
         if(entry.target.classList.contains("Container__Animation__Fade"))
            entry.target.classList.remove("Container__Animation__Fade");
      }
   });
});
//######################################## Sections ######################################################
const Acadamic__main_Section = styled.section`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 800px;
   margin-top: 150px;
   .Academic__left__Side{
      width: 30%;
      height: 100%;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
   .Academic__Seperator__NoAnimation{
      width: 3px;
      height: 0;
      background-color: ${colorPalette.green};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      transition: all 1s ease-in-out;
      .Cercle1{
         position: absolute;
         top: 100px;
         left: 0px;
         transform: translate(-50%,-50%);
         background-color: ${colorPalette.green};
         color: ${colorPalette.green};
         border-radius: 50%;
      }
      .Cercle2{
         position: absolute;
         top: 420px;
         left: 0px;
         transform: translate(-50%,-50%);
         background-color: ${colorPalette.green};
         color: ${colorPalette.green};
         border-radius: 50%;
      }
      .Cercle3{
         position: absolute;
         bottom: 220px;
         left: 0px;
         transform: translate(-50%,-50%);
         background-color: ${colorPalette.green};
         color: ${colorPalette.green};
         border-radius: 50%;
      }
   }

   .Academic__Seperator__Animation{
      height: 100%;
      transition: all 1s ease-in-out;
   }

   .Academic__right__Side{
      width: 30%;
      height: 100%;
      
      margin-left: 5%;
      margin-right: 5%;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   .Academic__Side__info__Container{
      opacity: 0;
      width: 100%;
      height: 100%;
      margin-top: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;//fjei jdfieijd fijief dlkjelf jdfjjfe ijdf jjef ijdf jjf j
      align-items: center;
      h1{
         font-family: 'lulo font';
         font-size: 2rem;
         font-weight: 700;
         margin: 0;
         padding: 0;
         text-align: center;
         color: ${colorPalette.green};
      }
      h2{
         font-family: 'small thin font';
         font-size: 1.5rem;
         font-weight: 700;
         margin: 0;
         padding: 0;

      }
      p{
         font-family: 'small thin font';
         font-size: 1rem;
         font-weight: 700;
         margin: 0;
         padding: 0;
      }
   }
   .Container__Animation__Fade{
      opacity: 1;
      transition: all 1s ease-in-out;
   }




`;
function AcademicLifeSection(){


   React.useEffect(() => {
      const elements = document.querySelectorAll(".Academic__Seperator__NoAnimation");
      const elements2 = document.querySelectorAll(".Academic__Side__info__Container");
      elements2.forEach(element => {
         observer.observe(element);
      });

      elements.forEach(element => {
         observer.observe(element);
      });
   }, []);

   return(
      <>
      <Skills_Title number="02" title="Acadamic Life" subtitle="languages"/>
      <Acadamic__main_Section>
            <div className="Academic__left__Side">
               <div className="Academic__Side__info__Container">
                     <h1>2020 - 2021</h1>
                     <h2>BAC STMG - Lycèe Jean Moulin Draguignan</h2>
                     <p>- Option : gestion et finance.</p>
                     <p>- Cours Maths Tout les mardi au lycée (2019 - 2020).</p>
                     <p>- Cours de soutiens scolaire (2020 - 2021).</p>
               </div>
            </div>
            <div className="Academic__Seperator__NoAnimation">
            <FontAwesomeIcon icon="fa-solid fa-circle" className="Cercle1" />
            <FontAwesomeIcon icon="fa-solid fa-circle" className="Cercle2" />
            <FontAwesomeIcon icon="fa-solid fa-circle" className="Cercle3" />
            </div>
            <div className="Academic__right__Side">
               <div className="Academic__Side__info__Container">
                  <h1>2017 - 2018</h1>
                  <h2>DNB - Collège Jean Rostan Draguignan</h2>
                  <p>- Cours de FLE “Français langue étrangère” (2016).</p>
                  <p>- Participation au théâtre de collège (2016).</p>
                  <p>- Stage à un centre de formation “MODE 83”  (2017).</p>
               </div>

               <div className="Academic__Side__info__Container">
                  <h1>2021 - 2022</h1>
                  <h2>BAC+1 - IUT Aix-Marseille D’Arles </h2>
                  <p>-Projet de fin d'études : création d'une application web de gestion du temps et des tâches.</p>
                  <p>-Objectif : développer une solution simple et intuitive pour aider les utilisateurs à planifier et à gérer leur temps de manière efficace.
Méthode : utilisation de HTML, CSS, JavaScript et PHP pour développer l'interface et les fonctionnalités de l'application.</p>
                  <p>-Résultats : application permettant de créer des tâches, de les assigner à des catégories et de définir des rappels pour les terminer à temps, avec un système de notification par e-mail.</p>
               </div>
            </div>
      </Acadamic__main_Section>
      </>
      )
}
function HomeBackgrounSection(){
   return(<>
   
      <div className="Home__Background">
      <div  className="fixed" id="Home__Background__Image1"/>
      <div className="Home__Background__Text">
         <div>
            <h1>I<span>'</span>M<br/> YASSIN <br/> YOUNES <br/> </h1>
            <h2>Full STACK DEVELOPER & 3D DESIGNER</h2>
            
         </div>
         
         
      </div>


   </div>
   
   <div className="Home__About">
         <div className="Home__About__Text">
            <img src={logos} alt="Logo" />
            <h1>ABOUT ME</h1>
            <p>
               Hi there! My name is Yassin Younes and I am passionate about programming and 3D design. I have a strong interest in creating backend projects and I also enjoy working on the front end. I have a broad range of experience with programming languages, which allows me to work effectively across various projects. I am always excited to take on new challenges and strive to deliver high-quality solutions.
            </p>
            <button className="Home__About__Text__Button">DOWNLOAD CV</button>
         </div>
         <div className="Home__About__Image">
            </div>
      </div>
   <div className="Home__Background">
      <div className="fixed" id="Home__Background__Image2"/>
   </div>
   </>
   )
}
function SkillsSection(){
   return(
      <div className="Home__Skills">
      <div className="Home__Skills__Text">
         <Skills_Title number="01" title="MY SKILLS" subtitle="languages"/>
         <SkillsLanguagesList>
            <ComboSkill title="HTML">
               <li>HTML5</li>
               <li>Bootstrap</li>
            </ComboSkill>
            <ComboSkill title="CSS">
               <li>CSS3</li>
               <li>SCSS/SASS</li>
               <li>Styled Components</li>
            </ComboSkill>
            <ComboSkill title="JAVASCRIPT">
               <li>React</li>
               <li>Node.js</li>
               <li>Express</li>
               <li>Socket.io</li>
               <li>Angular</li>
            </ComboSkill>
            <ComboSkill title="SQL">
               <li>MySQL</li>
               <li>PostgreSQL</li>
               <li>MongoDB</li>
               <li>PHPMyAdmin</li>
            </ComboSkill>
            <ComboSkill title="Java">
               <li>Java</li>
               <li>JavaFX</li>
            </ComboSkill>
            <ComboSkill title="C++/C">
               <li>C++</li>
               <li>QT</li>
            </ComboSkill>
            <ComboSkill title="Python">
               <li>Python</li>
               <li>SageMath</li>
            </ComboSkill>
            <ComboSkill title="PHP">
               <li>PHP</li>
               <li>Codingiter</li>
            </ComboSkill>
            <ComboSkill title="Soft skills">
               <li>Teamwork</li>
               <li>Problem Solving</li>
               <li>Time Management</li>
               <li>Communication</li>
               <li>Leadership</li>

            </ComboSkill>


         </SkillsLanguagesList>
         <h1></h1>
      </div>
   </div>
   )
}
//=======================================End of Sections==================================================
function Home() {
   const isMouseOverAComboBoxContext = useContext(isMouseOverAComboBox);
   const [isMouseOverAComboBoxState, setIsMouseOverAComboBoxState] = useState(isMouseOverAComboBoxContext);
   console.log(isMouseOverAComboBoxState);
  return (
   <isMouseOverAComboBox.Provider value={{isMouseOverAComboBoxState,setIsMouseOverAComboBoxState}}>
   <App>
      <Header PageNumber={1} />
      
      <div className="Home">
            <ClickMe isShowen={isMouseOverAComboBoxState} />
            <HomeBackgrounSection/>
            <SkillsSection />
            <AcademicLifeSection />
      </div>
      <div className="Margin"></div>
      <Footer />
   </App>
   </isMouseOverAComboBox.Provider>

  );
}

export default Home;
