import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className="glass-panel" 
      style={{ margin: '15px 5%', borderRadius: '16px', border: '1px solid var(--glass-border)' }}
    >
      <Container>
        <Navbar.Brand href="#home" className="text-white fw-bold">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Harsha <span className="text-accent">Vardhan</span>
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Nav.Link href={`#${item.toLowerCase()}`} className="text-white mx-2" style={{ fontWeight: 500 }}>
                  {item}
                </Nav.Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="/harsha_resume_updated.pdf" download className="btn-primary-custom ms-lg-3 mt-2 mt-lg-0">
                Download CV
              </a>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
