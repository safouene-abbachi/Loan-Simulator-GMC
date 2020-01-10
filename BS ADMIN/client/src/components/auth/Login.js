import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { Alert } from 'reactstrap'
import { Redirect } from 'react-router-dom'




class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: null
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
    

        // If authenticated Link to dashbord

        if (isAuthenticated) {
            //    Link to dashbord

        }

    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const user = {
            email,
            password
        };


        // Attempt to login
        this.props.login(user);
    };


    render() {
        if (this.props.isAuthenticated) return <Redirect push to="/admin" />
        return (
            <div className="login">
                <div className="container h-100" >
                    <div className="d-flex justify-content-center" >
                        <div className="card mt-5 col-md-4 animated bounceInDown myForm">
                            <div className="card-header text-center">
                                <h4>Administration</h4>
                            </div>
                            <div className="card-body">
                                <form >
                                    <div id="dynamic_container ">


                                        {this.state.msg ? (
                                            <Alert color='danger'>{this.state.msg}</Alert>
                                        ) : null}
                                        <div className="input-group mt-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text br-15"><i className="fas fa-at"></i></span>
                                            </div>
                                            <input type="email" name="email" placeholder="Email" className="form-control inputLogin" onChange={this.onChange} />
                                        </div>

                                        <div className="input-group mt-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text br-15"><i className="fas fa-unlock"></i></span>
                                            </div>
                                            <input type="password" name="password" placeholder="Password" className="form-control inputLogin " onChange={this.onChange} />
                                        </div>


                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success btn-sm float-right submit_btn" onClick={this.onSubmit}><i className="fas fa-arrow-alt-circle-right"></i> Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(
    mapStateToProps,
    { login, clearErrors }
)(Login);