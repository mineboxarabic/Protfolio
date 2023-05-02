import styled from "styled-components";
import logos from "../Assets/images/Logo.png";
import fontTest from "../Assets/Fonts/FontsFree-Net-Avenir-Light.ttf";
import { Link } from "react-scroll";

const HeaderX = styled.nav`
    @font-face {
        font-family: 'headerFont' ;
        src: url(${fontTest});
    }
    input{
            display: none;
        }

    $colorOfText : #939dab;
    display: flex;
    background-color: #2f2e2e;
    color: #fff;
    text-align: center;
    justify-content: center;

    width: 100%;
    height: 69px;
    margin: 0;
    padding: 0;

    .Mobile_Hamberger{
        display: none;
    }

    ul{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;

        font-size: 20px;
        color: #939dab;
        
        align-items: center;
        
        li{
            margin-left: 10px;
            font-family: 'headerFont';
            margin-right: 10px;
            cursor: pointer;
            &:hover{
                color: rgb(197 205 215);
                transition: 0.5s;
            }
            :nth-child(${props => props.PageNumber}){
                color:#01d244;
            &:hover{
                color: rgb(121 247 161);
            }

                a{
                    color: #01d244;
                    &:hover{
                        color: rgb(121 247 161);
                    }
                }
            }
            a{
                    color: #939dab;
                    text-decoration: none;
                    font-family: 'headerFont';
                    font-size: 20px;
                    &:hover{
                        color: rgb(197 205 215);
                        transition: 0.5s;
                    }
            }
        }

       
    }
    img{
        width:40px;
        height: 40px;
        padding:0;
        margin:0;
        margin-right: 60px;
        margin-top: 10px ;
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;


        
        .Mobile_Hamberger{
            display: block;

            margin: 0;
            padding: 0;

            cursor: pointer;
            margin-right: 20px;
            text-align: center;
            font-size: 70px;
            z-index: 1000;
        
        cursor: pointer;
        }

        #check:checked ~ ul{
            left:0;
        }
        #check:unchecked ~ ul{
            left: -100%;
        }

        

        ul{
            display: flex;

            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100vh;
            background-color: #2f2e2e;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 100;
            transition: 0.5s;
            
            li{
                margin: 20px;
                font-size: 30px;
               
            }
        }

        img{
            width:70px;
            height: 70px;
            padding:0;
            margin:0;
            margin-right: 60px;

            
        }

        
    }
`;
const FooterX = styled.footer`
@font-face {
        font-family: 'headerFont' ;
        src: url(${fontTest});
    }
    display: flex;
    background-color: #333B50;
    color: #fff;
    text-align: center;
    justify-content: center;

    width: 100%;
    height: 120px;
    margin: 0;
    padding: 0;

    justify-self: flex-end;
    align-items: center;
    p{
        font-family: 'headerFont';
        font-size: 20px;
        color: #939dab;
        margin: 0;
        padding: 0;
        margin-left: 10px;
    }

    img{
        width:80px;
        height: 80px;
        padding:0;
        margin:0;
        margin-right: 60px;
        margin-top: 10px ;
        cursor: pointer;
    }



`;
export function Header({PageNumber}){
    return (
        <HeaderX PageNumber={PageNumber}>
            <img src={logos} alt="Logo" />
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="Mobile_Hamberger">
            ≡
            </label>
            
            <ul>
                <li><a href="#/">HOME</a></li>
                <li><Link activeClass="active" spy={true} smooth={true} offset={0} duration={2000}  to="skillsAnchor">SKILLS</Link></li>
                <li><Link activeClass="active" spy={true} smooth={true} offset={0} duration={2000}  to="AcademicAnchor">ACADAMIC</Link></li>
                <li><a href="#/Portfolio">PORTFOLIO</a></li>
                <li><Link activeClass="active" spy={true} smooth={true} offset={0} duration={2000} to="ContactForm">CONTACT</Link></li>
            </ul>
        </HeaderX>
    );   
}

export function Footer(){
    return (
        <FooterX>
            <img src={logos} alt="Logo" />
            <p>© 2035 by Yassin younes</p>
        </FooterX>
    );
}


export default Header;