import React from 'react';
import { Col, Button, Form, FormGroup, FormText, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../../firebase/firebase.util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { auth } from '../../../firebase/firebase.util';

class SignInModal extends React.Component {
    _isMounted= false;

    constructor(props) {
        super(props);
        this.state = {
            modal : false,
            email: "",
            password: "",
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

    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
          } catch (error) {
            this.setState({errorMessage: error.message});
            console.error(error)
          }
    }

    handleChange = event => {
        this.setState({errorMessage: ""});
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => console.log());
    };

    render () {
        return(
            <div>
                <Link className="nav-link" onClick={this.toggle} to="">Sign In</Link>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <Form onSubmit={this.handleSubmit}>  
                    <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
                        <ModalBody>
                            <FormGroup row>
                                <Label for="email" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange}/>
                                </Col>
                            </FormGroup>
                            <FormText>
                                {this.state.errorMessage}
                            </FormText>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="google-sign-in-btn" onClick={signInWithGoogle}>Sign in with <FontAwesomeIcon icon={faGoogle} /> </Button>
                            <Button color="dark" type="submit">Sign In</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        );
    }
}
  
  export default SignInModal;