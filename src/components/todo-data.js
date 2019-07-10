import {PolymerElement} from "@polymer/polymer/polymer-element";

class todoData extends PolymerElement{
    static get properties(){
        return {
            todos: {
                notify: true, //enable two way binding
                value: function () {
                    return [
                        {
                            task: 'Buy milk',
                            done: true,
                            archive: false
                        },
                        {
                            task: 'Learn Polymer',
                            done: true,
                            archive: false
                        },
                        {
                            task: 'Clean house',
                            done: false,
                            archive: false
                        },
                    ]
                }
            }
        }
    }
}

customElements.define('todo-data',todoData);