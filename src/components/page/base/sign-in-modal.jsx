import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../../firebase/firebase.util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const SignInModal = (props) => {
    const {
      buttonLabel,
      className
    } = props;
    
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
        <div>
            <Link className="nav-link" onClick={toggle} to="">{buttonLabel}</Link>
            <Modal isOpen={modal} toggle={toggle} className={className}>
            <Form>  
                <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
                    <ModalBody>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="email" placeholder="with a placeholder" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="password" placeholder="password placeholder" />
                            </Col>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="google-sign-in-btn" onClick={signInWithGoogle}>Sign in with <FontAwesomeIcon icon={faGoogle} /> </Button>
                        <Button color="dark" onClick={toggle}>Sign up</Button>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    );
  }
  
  export default SignInModal;