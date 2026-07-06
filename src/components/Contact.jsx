import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="position-relative">
      <Container>
        <div className="text-center mb-5">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact <span className="text-accent">Me</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            style={{ height: '4px', background: 'var(--accent-color)', margin: '10px auto', borderRadius: '2px' }}
          />
        </div>

        <Row className="justify-content-center g-5">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-5 h-100"
            >
              <h3 className="mb-4">Get In Touch</h3>
              <p style={{ color: '#ccc', marginBottom: '40px' }}>
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a question or just want to say hi!
              </p>
              
              <div className="d-flex align-items-center mb-4">
                <div className="btn-primary-custom" style={{ padding: '15px', borderRadius: '50%', marginRight: '20px' }}>
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h6 className="mb-1" style={{ color: '#fff' }}>Email</h6>
                  <a href="mailto:hharshavardhan974@gmail.com" style={{ color: 'var(--accent-light)', textDecoration: 'none' }}>
                    hharshavardhan974@gmail.com
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="btn-primary-custom" style={{ padding: '15px', borderRadius: '50%', marginRight: '20px' }}>
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h6 className="mb-1" style={{ color: '#fff' }}>Location</h6>
                  <p style={{ color: '#ccc', margin: 0 }}>
                    India
                  </p>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-5"
            >
              <Form action="https://formsubmit.co/hharshavardhan974@gmail.com" method="POST">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control type="text" name="name" placeholder="Your Name" required className="bg-transparent text-white" style={{ border: '1px solid var(--glass-border)', padding: '12px' }} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control type="email" name="email" placeholder="Your Email" required className="bg-transparent text-white" style={{ border: '1px solid var(--glass-border)', padding: '12px' }} />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4">
                  <Form.Control type="text" name="phone" placeholder="Your Phone Number" required className="bg-transparent text-white" style={{ border: '1px solid var(--glass-border)', padding: '12px' }} />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control type="text" name="subject" placeholder="Subject" required className="bg-transparent text-white" style={{ border: '1px solid var(--glass-border)', padding: '12px' }} />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Control as="textarea" name="message" rows={5} placeholder="Your Message" required className="bg-transparent text-white" style={{ border: '1px solid var(--glass-border)', padding: '12px' }} />
                </Form.Group>
                
                <button type="submit" className="btn-primary-custom w-100 mt-2">
                  Send Message
                </button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
