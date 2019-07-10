import {PolymerElement, html} from "@polymer/polymer/polymer-element";
import './todo-view';

class Elements extends PolymerElement{
    static get template(){
        return html`
            <todo-view></todo-view>
        `
    }
}

customElements.define('todo-elements', Elements);