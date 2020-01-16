import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

const SignUpModal = (props) => {
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
                <ModalHeader toggle={toggle}>Sign In</ModalHeader>
                    <ModalBody>
                        <FormGroup row>
                            <Label for="firstname" sm={2}>Firstname</Label>
                            <Col sm={10}>
                                <Input type="text" name="firstname" placeholder="Enter your firstname" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="lastname" sm={2}>Lastname</Label>
                            <Col sm={10}>
                                <Input type="text" name="lastname" placeholder="Enter your lastname" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" placeholder="Enter your email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" placeholder="Enter a password" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="confirmPassword" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" name="confirmPassword" placeholder="Confirm your password" />
                            </Col>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="dark" onClick={toggle}>Sign In</Button>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    );
  }
  
  export default SignUpModal;