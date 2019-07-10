import {PolymerElement, html} from "@polymer/polymer/polymer-element";
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-material/paper-material'


class todoItem extends PolymerElement {
    static get template() {
        return html`
            <style>
                paper-material{
                    padding: 10px 0px 10px 10px;
                }    
            </style>
            <paper-material elevation="1">
                <paper-checkbox checked="{{todo.done}}">{{todo.task}}</paper-checkbox>
            </paper-material>
        `;
    }
}

customElements.define('todo-item', todoItem);