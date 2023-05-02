import { isMouseOverAComboBox , colorPalette } from './Context';

import styled from "styled-components";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useContext } from "react";

import logos from "../Assets/images/Logo.png";

import pdf from "../Assets/Yassin_YOUNES_CV.pdf";


const Acadamic__main_Section = styled.section`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 1000px;
   margin-top: 150px;
   margin-bottom: 150px;
   .Academic__left__Side{
      width: 30%;
      height: 100%;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .Academic__Side__info__Container{
         margin-top: 50%;
      }
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
         top: 10px;
         left: 0px;
         transform: translate(-50%,-50%);
         background-color: ${colorPalette.green};
         color: ${colorPalette.green};
         border-radius: 50%;
         width: 15px;
         height: 15px;
      }
      .Cercle2{
         position: absolute;
         top: 280px;
         left: 0px;
         transform: translate(-50%,-50%);
         background-color: ${colorPalette.green};
         color: ${colorPalette.green};
         border-radius: 50%;
         width: 15px;
         height: 15px;
      }
      .Cercle3{
         position: absolute;
         bottom: 480px;
         left: 0px;
         transform: translate(-50%,-50%);
         background-color: ${colorPalette.green};
         color: ${colorPalette.green};
         border-radius: 50%;
         width: 15px;
         height: 15px;
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
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      

      h1{
         font-family: 'lulo font';
         font-size: 1rem;
         font-weight: 700;
         margin: 0;
         padding: 0;
         text-align: center;
         color: ${colorPalette.green};
      }
      h2{
         font-family: 'small thin font';
         font-size: 1rem;
         font-weight: 700;
         margin: 0;
         margin-bottom: 20px;
         padding: 0;

      }
      p{
         font-family: 'small thin font';
         text-align: left;
         font-size: 0.5rem;
         font-weight: 700;
         margin: 6px;
         padding: 0;
      }
   }
   .Container__Animation__Fade{
      opacity: 1;
      transition: all 1s ease-in-out;
   }




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

 export function Skills_Title({number,title,subtitle,id}){
    return(<Skills_Title_Style id={id}>
             <h1 className="Header__Title"><span>{number}</span> {title}</h1>
             <h1 className="Header__Title__1">{subtitle}</h1>
          </Skills_Title_Style>
    )
}
          
 export function ComboSkill(props){
    const [isFolded, setIsFolded] = React.useState(false);
 
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
 
export function AcademicLifeSection(){


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
      <Skills_Title id="AcademicAnchor" number="02" title="Acadamic Life" subtitle="Acadamic journey"/>
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

export function HomeBackgrounSection(){
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
            <button className="Home__About__Text__Button" onClick={()=>{
               //open the pdf
               window.open(pdf, "_blank");
            }}>DOWNLOAD CV</button>
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

export function SkillsSection(){
   return(
      <div className="Home__Skills">
      <div className="Home__Skills__Text">
         <Skills_Title id="skillsAnchor" number="01" title="MY SKILLS" subtitle="languages"/>
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

const ContactSectionS = styled.div`
    font-family: 'small thin font';
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
.Home__Contact__Section{
   width: 50%;
   height: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 2%;
   background-color:  ${colorPalette.darkGrey};
   margin: 0 10%;
   border-radius: 10px;
   box-shadow: 0 0 10px 0px ${colorPalette.darkGrey};
   .myDetails{
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1{
         font-size: 2.5rem;
         color: ${colorPalette.white};
         margin-bottom: 2%;
      }
   }
   .myForm{
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  
      form{
         input,textarea{
            width: 100%;
            height: 30px;
            margin-bottom: 2%;
            border: none;
            border-radius: 5px;
         }
         textarea{
            height: 200px;
         }
      }
      button{
         width: 100%;
         height: 30px;
         border: none;
         border-radius: 5px;
         background-color: ${colorPalette.green};
         color: ${colorPalette.white};
         font-weight: bold;
         cursor: pointer;
         &:hover{
           transform: scale(1.03);
             transition: 0.3s;
         }
      }
   }

}
`;

export function ContactSection(){


   return(
      <ContactSectionS id='ContactForm'>
      <Skills_Title id="contactAnchor" number="03" title="CONTACT ME" subtitle="contact"/>
      <div className="Home__Contact__Section">
         <div className="myDetails">
            <h1>CONTACT ME</h1>
            <p>Feel free to contact me for any work or suggestions below</p>

            <div className="myDetails__Container">
               <p>mineboxarabic@gmail.com</p>
               <p>Tel: +33 7 85 00 85 13</p>
             </div>
         </div>

        <div className="myForm">
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" />
            <button>SEND</button>
         </form>
         </div>
        
      </div>
      </ContactSectionS>


   )
}