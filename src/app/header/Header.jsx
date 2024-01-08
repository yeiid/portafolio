
import Image from 'next/image'
import logo from '../../assets/logo.ico'
import './header.css'


const Header = () => {

    return (
        <header className="header">
            <nav className="nav">
                <a href="/" className="nav__logo">    
                <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt="logo"/></a>

                <div>
                    <ul className="nav__list ">

                        <li className="nav__item">
                            <a className= "nav__link"  href="#home" >
                                <i className='bx bx-home-alt-2 nav__icon' ></i>Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a className= "nav__link" href="#about">
                                <i className='bx bx-message-square nav__icon' ></i>
                                About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a className= "nav__link" href="#skills" >
                                <i className='bx bx-code-alt nav__icon'></i>Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a className= "nav__link" href="#services">
                                <i className='bx bx-run'></i>Service
                            </a>
                        </li>

                        <li className="nav__item">
                            <a className= "nav__link" href="#contact">
                                <i className='bx bxs-contact' ></i>
                                Contact
                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a href="#qualication">
                                <i className="uil uil-scenery nav__icon"></i>
                                qualication
                            </a>
                        </li> */}

                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;