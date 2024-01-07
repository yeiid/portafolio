
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.ico'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
        <h1 className="footer__title"><Image
      src={logo}
      width={100}
      height={100}
      alt="Picture of the author"
    /></h1>

        <ul className="footer__list">
            <li>
                <Link href="#about" className="footer__link">About</Link>
            </li>

            <li>
                <Link href="#portafolio" className="footer__link">Projects</Link>
            </li>

            {/* <li>
                <Link href="#testimonio" className="footer__link">Testimonials</Link>
            </li> */}
        </ul>

        <div className="footer__social">
            <Link href="https://www.facebook.com/" className="footer__social-link" target="blank">
            <i class="bx bxl-facebook"></i>
            </Link>

            <Link href="https://www.instagram.com/" className="footer__social-link" target="blank">
            <i className="bx bxl-instagram"></i>
            </Link>

            <Link href="https://twitter.com/" className="footer__social-link" target="blank">
            <i class='bx bxl-github'></i>
            </Link>
        
        </div>

        <span className='footer_copy'>
            &#169; Crypticalcoder. All rigths reserved
        </span>
        </div>
    </footer>
  )
}

export default Footer