import {PolymerElement, html} from "@polymer/polymer/polymer-element";
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-material/paper-material'
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

class todoItem extends PolymerElement {
    static get template() {
        return html`
            <style>
                paper-material{
                    padding: 10px 0px 10px 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }    
                paper-icon-button{
                    color: #3f51b5;
                }
                paper-icon-button:hover{
                    color: darkblue;
                }
            </style>
            <paper-material elevation="1">
                <paper-checkbox checked="{{todo.done}}">{{todo.task}}</paper-checkbox>
                  <paper-icon-button icon="delete" on-tap="_delete" prefix></paper-icon-button>
            </paper-material>
        `;
    }
    _delete(){
        this.dispatchEvent(new CustomEvent('delete', {bubbles: true,
            composed: true, detail: {todo: this.todo}}));
    }
}

customElements.define('todo-item', todoItem);