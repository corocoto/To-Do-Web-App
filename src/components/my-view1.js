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
import { PageViewElement} from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';
import './elements';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';

class ToDoList extends connect(store)(PageViewElement) {
  static get styles() {
    return [
      SharedStyles,
    ];
  }

  render() {
    return html`
      <style>
        section{
            width: 70%;
            margin: auto;
        }
      </style>
      <section>
            <todo-elements></todo-elements>
      </section>
     
    `;
  }
}

window.customElements.define('my-view1', ToDoList);
