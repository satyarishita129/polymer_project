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
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-image/iron-image.js';

class MyDetails extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
          width: 100%;
          height: 85vh;
         
          background-size: cover;
        }
        .card {
          margin: 24px;
          padding: 16px;
          color: #757575;
          width:90%;
          border-radius: 5px;
          background-color: #fff;
          background-color: rgba(18, 218, 61, 0.473);
         
        }
       
      </style>
      
      <app-location route="{{route}}"></app-location>

      <style>
      td, th {
        padding: 8px;
        box-sizing: border-box;
        white-space: nowrap;
      }
      td:nth-of-type(1),
      th:nth-of-type(1) {
        background-color: rgba(255, 0, 255, 0.2);
      }
      tr.iron-selected td {
        background-color: rgba(0, 0, 0, 0.1);
      }
      tr:hover td {
        background-color: rgba(0, 0, 0, 0.2);
      }
      tr td.iron-selected:not(:nth-of-type(1)) {
        background-color: rgba(255, 255, 0, 0.2);
      }

      @media(max-width:600px){
          
        
          .card {
            margin-top: 25px;
            margin-left:10px;
            margin-bottom:100px;
            padding: 10px;
            background-color: rgba(18, 218, 61, 0.473);
            width:150%;
            border-radius: 5px;
          }
          
        }

    </style>
    <div class="card">
    <h1><center>Welcome to Nursery</center></h1>
    
    <table is="s-table-lite" fixed-column>
      <thead>
        <tr>
        <th>S.no</th>
        <th>Name</th>
        <th>Password</th>
        <th>Address</th>
        <th>Timings</th>
        <th>Maintance</th>
        </tr>
      </thead>
      <tbody is="s-tbody">
        <tr is="s-tr" multi>
                    <td>1</td>
                    <td>{{nurseryData.username}}</td>
                    <td>{{nurseryData.password}}</td>
                    <td>{{nurseryData.address}}</td><br>
                    <td>{{nurseryData.timings}}</td><br>
                    <td>{{nurseryData.maintance}}</td>
                 
         
        </tr>
        <tr is="s-tr" multi>
        <td>2</td>
        <td>Satya</td>
        <td>satya123</td>
        <td>Tdp</td><br>
        <td>8.00Amto 1.00PM</td>
        <td>Water Service</td>

          
        </tr>

      </tbody>
    </table>

    

      </div>
    `;
  }
  handleClick(){
    this.set('route.path','/details')
    
    }
    static get properties() {
      return {
      //page property which is used for page navigation
      nurseryData:{
          type:Object,
          value:[],
          notify:true
        }
      };
    }
    
  
}

window.customElements.define('my-details', MyDetails);
