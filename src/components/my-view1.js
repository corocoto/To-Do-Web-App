import { html } from 'lit-element';
import { PageViewElement} from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';
import './elements';

class ToDoList extends PageViewElement {
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
