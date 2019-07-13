import {PolymerElement, html} from "@polymer/polymer/polymer-element";
import '@polymer/polymer/lib/elements/dom-repeat.js';
import './todo-item';

class todoList extends PolymerElement{
    static get template(){
        return html`
            <dom-repeat items="{{todos}}" as="todo" observe="done" filter="{{_filter(filterBy)}}">
                <template>
                    <todo-item todo="{{todo}}"></todo-item>
                </template>
            </dom-repeat>
        `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('delete', function (e) {
            const index=this.todos.indexOf(e.detail.todo);
            this.splice('todos',index,1);
        });
    }

    static get properties(){
        return {
            filterBy: {
                type: String,
                value: 'uncompleted'
            }
        }
    }
    _filter(filterBy) {
        return function (todo) {
            if (filterBy==='all') {
                return true
            }else if (filterBy==='uncompleted'){
                return !todo.done
            } else if (filterBy==='completed'){
                return todo.done;
            }else{
                return false;
            }
        }
    }
}

customElements.define('todo-list', todoList);