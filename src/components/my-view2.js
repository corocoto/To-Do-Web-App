/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class ToDoDesc extends PageViewElement {

  static get styles() {
    return [
      SharedStyles
    ];
  }

  render() {
    return html`
    <style>
        *{
        text-align: center;
        }
        p{
        font-size: 20px;
        }
    </style>
      <section>
        <h2>Description</h2>
        <div class="circle">D</div>
        <br>
        <p>To Do Web App is a simple tool for managing daily tasks for work and personal use.</p>
        <br><br>
        <p>To Do Web App — это простой инструмент для управления повседневными задачами как в рабочих, так и в личных целях.</p>
      </section>
    `;
  }
}

window.customElements.define('my-view2', ToDoDesc);
