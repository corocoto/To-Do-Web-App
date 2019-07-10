import {PolymerElement, html} from "@polymer/polymer/polymer-element";
import './todo-data';
import './todo-list';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input-container';
import '@polymer/paper-input/paper-input';
import '@polymer/iron-input/iron-input';

class todoView extends PolymerElement {
    static get template() {
        return html`
        <style>
            paper-icon-button{
                color: #3f51b5;
            }
            paper-icon-button:hover{
                color: darkblue;
            }
            input{
                border: 0;
                font-family: inherit;
                font-size: inherit;
            }
            input:focus {
                background: none;
                outline: none;
            }
        </style>
        <div>
            <paper-input-container>
                <paper-icon-button slot="prefix" icon="add-box" on-tap="_addItem"></paper-icon-button>
                <iron-input  bind-value="{{value}}" slot="input">
                    <input placeholder="Add new todo item">
                </iron-input>
            </paper-input-container>
        </div>
        <div>
            <todo-data todos="{{todos}}"></todo-data>
            <h2>Uncompleted to do tasks</h2>
            <todo-list filter-by="uncompleted" todos="{{todos}}"></todo-list>
            <h2>Completed to do tasks</h2>
            <todo-list filter-by="completed" todos="{{todos}}"></todo-list>
        </div>
            
        `
    }
    _addItem(){
        if (this.value) this.push('todos',{
            task: this.value,
            done: false
        });
        this.value=null;
    }
}

customElements.define('todo-view', todoView);