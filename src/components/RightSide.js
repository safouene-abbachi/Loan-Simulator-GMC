import React, { Component } from 'react';
import {Button, ButtonGroup, Col} from 'react-bootstrap';
import './simulator.css';

class RightSide extends Component {
    render() {
        return (
            <Col className="rightSide" xs={12} md={6}>
                <h4>Total amount to repay</h4>
                <span  className="totalAmountDisplay">{this.props.currancy}{this.props.amount}</span>

                <h4>Monthly instaltment</h4>
                <span className="monthlyInstDisplay">{this.props.currancy}{this.props.monthly}</span>

                <h4>Interest rate</h4>
                <span className="aprDisplay">{this.props.APR}%</span>

                <h4>Choose your bank Rate</h4>

                <ButtonGroup justified>
                    <Button   bsStyle="primary" id="Excellent" onClick={this.props.btnOnClick} >Biat</Button>
                    <Button   bsStyle="primary" id="Good" onClick={this.props.btnOnClick} >BH</Button>
                    <Button   bsStyle="primary" id="Fair" onClick={this.props.btnOnClick}>ATB</Button>
                    <Button   bsStyle="primary" id="Faire" onClick={this.props.btnOnClick}>BT</Button>
                </ButtonGroup>

            </Col>

        )
    }
}

export default RightSide;