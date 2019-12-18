import React, { Component } from 'react';
import "../components/footer.css";
import { Button } from 'reactstrap';



export default class Footer extends Component {
    render() {
      return ( 
<div> 
    <hr></hr>
    <div className="describ">
<h1>Need to talk to us directly? <a href="#" target="" className="td-contact-link td-link-nounderline td-link-standalone">Contact <span className="td-link-lastword">us<span class="td-icon td-icon-rightCaret" aria-hidden="true"></span></span></a></h1>
<p>Connect with TD</p>
<div>
      <Button outline color="info">info</Button>{' '}
      <Button outline color="info">info</Button>{' '}
      <Button outline color="info">info</Button>{' '}
      <Button outline color="info">info</Button>{' '}
      <Button outline color="info">info</Button>{' '}
      <Button outline color="info">info</Button>{' '}
    </div>
					    
 
</div>
</div>
      );
    }
}
