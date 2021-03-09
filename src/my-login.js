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
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js';




class MyLogin extends PolymerElement {
  static get template() {
//template getter must return an instance of HTMLTemplateElement
//the html helper function makes this easy
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
   <!--element contains style information for a document-->
      <style >
        :host {
          display: block;
          padding: 10px;
          background-color: rgba(18, 218, 61, 0.473);
          background-image: url(images/carousel1.jpg);
          background-size: cover;
         
        }
        
        .card {
          margin-top: 50px;
          margin-left:500px;
          margin-bottom:400px;
          width: 20%;
         height: 250px;
          padding: 20px;
          color: blue;
         
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
        .c1{
          marigin-top:20px;
          color: blue;
        }
        
        @media(max-width:1010px){
          
          
        .a1{
          background-image: url(images/carousel1.jpg);
          height:600px;
        }
          .card {
            margin-top: 50px;
            margin-left:250px;
            margin-bottom:230px;
            padding: 10px;
            color: blue;
            width:500px;
            border-radius: 5px;
            background-color: rgba(18, 218, 61, 0.473);
            
          }
          
        }
        @media(max-width:600px){
          
        .a1{
          height:500px;
          background-image: url(images/carousel1.jpg);

          
        }
          .card {
            margin-top: 25px;
            margin-left:10px;
            margin-bottom:100px;
            padding: 10px;
            color: red;
            width:250px;
            border-radius: 5px;
            background-color: rgba(18, 218, 61, 0.473);
          }
          
        }

      </style>
      
      <div class="a1"> 
      <div class="c1">          
      <center>
      <h1 class="c1"> Login</h1>
     </center>
     </div>
    <div class="card">
    <!---to declare the name and password -->
      <paper-input label="Username"  required auto-validate pattern="[a-zA-Z]*" error-message="letters only!" value = "{{userName}}"></paper-input>
      <paper-input label="Password" required auto-validate error-message="Enter Strong Password "  auto-validate pattern="[a-zA-Z0-9]*" value="{{Password}}" ></paper-input>
      <br>
      <paper-button raised class="indigo" on-click="home">Login</paper-button>
      Register here. <paper-button on-click="register"  >click here</paper-button>
       
     
      
    </div>
    </div>
    
    
    
    
      `;
  }
  static get properties() {
    return {
      //username which is used for passing the data 
      userName: {
        type: String,
        value: '',
        
       }
       };
       }
       static get properties() {
        return {
           //password which is used for passing the data 
          Password: {
            type: String,
            value: '',
            
           }
           };
           }
     

//this method will helps to matches the username and password value
//if it matches it will navigate to home page
home(){
    if(this.userName=='rishitha'&& this.Password=='rishi'){
      this.set('route.path','/home');

    }
    else{
      alert("please enter valid Deatails")
      this.$.toast.open();
    }
  }
  //method which helps to register and it will navigate to register page
  register(){
      this.set('route.path','/register');

    }
    //method which helps to details and it will navigate to details page
    details(){
      this.set('route.path','/details');

    }
  


}
//register the element with browser
window.customElements.define('my-login', MyLogin)