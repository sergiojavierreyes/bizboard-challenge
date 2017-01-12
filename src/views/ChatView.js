import Surface              from 'famous/core/Surface.js';
import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';


export class ChatApp extends View {

    @layout.size(~100, ~25)
    @layout.stick.center()

    text = new Surface({
        content:  
        `<div> 
            <ul>
                <li key= ${this.options.id}>${this.options.text}</li>
            </ul>
            <input onChange=${this.updateMesage} type="text" placeholder="Message"/>
            <br/>
            <button>Submit Message</button>
        </div>`
    });

    constructor(props, context){
        super(props, context)
        this.updateMesage = this.updateMessage.bind(this)
        this.state={
            message: ''
        }
    }

    updateMessage(event){
        console.log('updatedMessage')
    }
}
