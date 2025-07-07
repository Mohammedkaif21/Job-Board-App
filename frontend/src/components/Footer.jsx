import { Link } from 'react-router';
import { FaGithub,FaLinkedin,FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-body-tertiary text-dark border-top py-4 mt-auto ">
      <div className="container text-center">
        <div className="text-dark ">
            <Link className="text-dark me-5 text-decoration-none" title='github' to="https://github.com/Mohammedkaif21">Github Id <span className='ms-2'><FaGithub size={24} color="blue" /></span></Link>
            <Link className="text-dark text-decoration-none" title='email' to="mohd.kaif1003@gmail.com">Email Id <span className='ms-2'><FaEnvelope size={24} color="" /></span></Link>
        </div>
      </div>
    </footer>
  )
}        

export default Footer;