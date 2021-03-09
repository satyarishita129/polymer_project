/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-listbox/paper-listbox.js';

class MyRegister extends PolymerElement {
  static get template() {
        //template getter must return an instance of HTMLTemplateElement
//the html helper function makes this easy

    return html`

    <h1><center>Registration</center></h1>

    <div class="card">
    <paper-input id="username" value="{{username}}" always-float-label label="Name" required auto-validate error-message="Provide valid details!" value="{{username}}""></paper-input>
     
     <paper-input type="password" always-float-label label="Password:" value="{{password}}"  required auto-validate error-message="provide valid details!"  ></paper-input>
     <paper-input type="address" always-float-label label=" Address:" value="{{address}}"  required auto-validate error-message="provide valid details!"></paper-input>
   
  
    Timings:
    <paper-dropdown-menu value="{{timings}}" label="">
    <paper-listbox slot="dropdown-content" selected="1">
      <paper-item>Choose</paper-item><br>
      <paper-item>8Am to 1pm</paper-item><hr>
      <paper-item>2pm to 6pm</paper-item>
    </paper-listbox>
  </paper-dropdown-menu>
<br>

  Maintance(we provide):
   <paper-dropdown-menu  value="{{maintance}}" label="" required auto-validate error-message="correct name!">

       <paper-listbox slot="dropdown-content" selected="1">
     
      <paper-item>Choose</paper-item><br>
      <paper-item>Water Service</paper-item><br>
      <paper-item>Security</paper-item><br>
      <paper-item>Verfication</paper-item><br>
      <paper-item>Electricity</paper-item><br>
      <paper-item>Cleanliness</paper-item>
    </paper-listbox>
  </paper-dropdown-menu>
   <br>
    <paper-button raised class="indigo" on-click="handleClick">register</paper-button>
    Already have an account? <a href="./login">Login</a>
    
    </div>
   
    
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
          background-color: rgba(18, 218, 61, 0.473);
          width: 100%;
          height: 95vh;
         
          background-size: cover;
        }
       
      </style>
      <app-location route="{{route}}"></app-location>

        <template is="dom-if" if="loggedIn">
        <home-component></home-component>
        </template>
       
        <br/>
      
  
    `;
  }
   //method which helps to login and it will navigate to login page
  login(){
    this.set('route.path','/login')
  }
  //this method will helps to matches the username and password value
//if it matches it will navigate to details page
  handleClick()
  {
    if(this.username == 'rishitha' && this.password == 'rishi')
    {
      window.alert('success');
      this.set('route.path','/details')
    }
    else{
      window.alert('please enter valid Deatails');
      this.$.total.open();
    }
  }

  register(){

    window.alert("event clicked");
  }
  handleClick(){
    this.nurseryData={
      "username": this.username,
      "password": this.password,
      "address": this.address,
     
      "timings": this.timings,
      "maintance": this.maintance
    }
    this.set('route.path','/details')
    
    }
  static get properties() {
    return {
      //username which is used for passing the data 

       username: {
        type: String,
        },
        password:{
          type: String,
          },


          address: {
            type: String,
            },
           
           
            timings:{
              type: String,
            },
            maintance:{
              type: String,
            },
  

  

  
  
  nurseryData:{
    type:Object,
    value:[],
    notify:true
  }

  };
}
   _changeUsername() {
          console.log(this.username);    }
      
         
}
//register the element with browser
window.customElements.define('my-register', MyRegister);
