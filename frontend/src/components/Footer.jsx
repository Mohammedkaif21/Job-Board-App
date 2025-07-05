import { Link } from 'react-router';
import { FaGithub,FaLinkedin,FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-body-tertiary text-dark border-top py-4 mt-auto">
      <div className="container text-center">
        <div className="mb-3 text-dark text-decoration-none">
            <Link className="text-dark me-3" title='github' to="http://github/example.com">Github Id <span className='ms-2'><FaGithub size={24} color="blue" /></span></Link>
            <Link className="text-dark me-3" title='linkedin' to="linkedin">LinkedIn Id <span className='ms-2'><FaLinkedin size={24} color="blue" /></span></Link>
            <Link className="text-dark" title='email' to="email">Email Id <span className='ms-2'><FaEnvelope size={24} color="" /></span></Link>
        </div>
      </div>
    </footer>
  )
}        

export default Footer;