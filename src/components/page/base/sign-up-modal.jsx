import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../../../firebase/firebase.util';



class SignUpModal extends React.Component {
    _isMounted= false;
    
    constructor(props) {
        super(props);
        this.state = {
            modal : false,
            firstname: "",
            lastname : "",
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
            errorMessage: ""
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    toggle = () => {
        this.setState(prevState => ({modal: !prevState.modal}));
    }

    handleSubmmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state;
        if (password === confirmPassword) {
            try {
                const { user } = await auth.createUserWithEmailAndPassword(
                  email,
                  password
                );
          
                await createUserProfileDocument(user, { displayName });
          
                this.setState({
                  displayName: '',
                  email: '',
                  password: '',
                  confirmPassword: ''
                });
              } catch (error) {
                this.setState({errorMessage: error.message});
                console.error(error);
              }
        } else {
            this.setState({errorMessage: "Password and confirm password doesn't match"});
        }
    }

    handleChange = event => {
        this.setState({errorMessage: ""});
        const { name, value } = event.target;
        if (name === "firstname"){
            this.setState((prevState, prevProps) =>  { 
                return {displayName: value + ' ' + prevState.lastname}
            });
        } else if (name === "lastname") {
            this.setState((prevState, prevProps) =>  { 
                return {lastname: value, displayName: prevState.firstname + ' ' + value}
            });
        }
        this.setState({[name]: value} , () => console.log(this.state), () => console.log(this.state));
    }

    render() {
        const { modal } = this.state;
        return (
            <div>
                <Link className="nav-link" onClick={this.toggle} to="">Sign Up</Link>
                <Modal isOpen={modal} toggle={this.toggle}>
                <Form onSubmit={this.handleSubmmit}>  
                    <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="firstname" sm={2}>Firstname</Label>
                                <Col sm={10}>
                                    <Input type="text" name="firstname" placeholder="Enter your firstname" onChange={this.handleChange} required />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lastname" sm={2}>Lastname</Label>
                                <Col sm={10}>
                                    <Input type="text" name="lastname" placeholder="Enter your lastname" onChange={this.handleChange} required/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" placeholder="Enter your email" onChange={this.handleChange} required/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="password" name="password" placeholder="Enter a password" onChange={this.handleChange} required/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="confirmPassword" sm={2}>Confirm Password</Label>
                                <Col sm={10}>
                                    <Input type="password" name="confirmPassword" placeholder="Confirm your password" onChange={this.handleChange} required/>
                                </Col>
                            </FormGroup>
                            <FormText>
                                {this.state.errorMessage}
                            </FormText>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="dark" type="submit">Sign In</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        );
    }
}
  
  export default SignUpModal;