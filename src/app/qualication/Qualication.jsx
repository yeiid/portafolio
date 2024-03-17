"use client"
import './qualication.css'
import { useState } from 'react'
// import {CartQuality} from '@/components/CartQuality'
import { CartQuality } from "../../components/CartQuality";




const Qualication = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="qualication section" id='qualication'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>
            <div className="qualication__conten container ">

            <div className="qualication__container ">
                <div className="qualication__tabs">
                    <div className={
                        toggleState === 1
                        ?"qualication__button qualication__active button--flex": "qualication__button button--flex"
                        }
                        onClick={()=> toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap  qualication__icon"></i>Education
                    </div>

                    <div className={
                        toggleState === 2
                        ?"qualication__button qualication__active button--flex": "qualication__button button--flex"
                        }
                        onClick={()=> toggleTab(2)}
                        >
                        <i className="uil uil-briefcase-alt qualication__icon"></i>Experience
                    </div>
                </div>
            </div>

            <div className="qualication__sections">

                <div className={toggleState===1 ? "qualication__content qualication__content-active":"qualication__content"}>
                    
                    <div className="qualication__data">
                        <CartQuality title="Tecnologo Ambiental"
                                    subtitle="Colombia - Sena"  
                                    calender="2018 - 2020"/>
                        <div>
                            <span className="qualication__rounder"></span>
                            <span className="qualication__line"></span>
                        </div>
                    </div>

                    <div className="qualication__data">
                        <div></div>
                        <div>
                            <span className="qualication__rounder"></span>
                            <span className="qualication__line"></span>
                        </div>
                        <CartQuality title="Introduccion a Python"
                                    subtitle="Colombia - Udemy"  
                                    calender="2021 - 2021"/>
                    </div>

                    <div className="qualication__data">
                        <CartQuality title="Programacion Basica y Desarrollo de Sotfware"
                                    subtitle="Colombia - UPB-MinTic"  
                                    calender="2021 - 2021"/>
                       <div>
                            <span className="qualication__rounder"></span>
                            <span className="qualication__line"></span>
                        </div>
                    </div>

                    <div className="qualication__data">
                        <div></div>
                        <div>
                            <span className="qualication__rounder"></span>
                            <span className="qualication__line"></span>
                        </div>
                        <CartQuality title="Curso Introducctoria a Internet la Web y Programacion"
                                    subtitle="Colombia - Cono Sur Tech"  
                                    calender="2022 - 2022"/>

                    </div>

                    <div className="qualication__data">
                        <CartQuality title="One Oracles Next Education"
                                    subtitle="Colombia - Alura Latam"  
                                    calender="2023"/>
                       <div>
                            <span className="qualication__rounder"></span>
                            <span className="qualication__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState ===2 ? "qualication__content qualication__content-active":"qualication__content"}>
                <div className="qualication__data">
                    <CartQuality title="Frelence"
                                    subtitle="Frelence - Colombia"  
                                    calender=" 2021 - 2022"/>
                    <div>
                        <span className="qualication__rounder"></span>
                        <span className="qualication__line"></span>
                    </div>
                </div>
                <div className="qualication__data">
                    <div></div>
                    <div>
                        <span className="qualication__rounder"></span>
                        <span className="qualication__line"></span>
                    </div>
                    <CartQuality title="Desarrollador Web"
                                    subtitle="Frelence - Colombia"  
                                    calender=" 2021 - 2023"/>
                </div>
                <div className="qualication__data">
                    <CartQuality title="Web Designer"
                                    subtitle="Figma - Spain"  
                                    calender=" 2021 - 2023"/>
            
                    <div>
                        <span className="qualication__rounder"></span>
                        <span className="qualication__line"></span>
                    </div>
                </div> 
                </div>
            </div>
            </div>

        </section>
    )
}

export default Qualication;