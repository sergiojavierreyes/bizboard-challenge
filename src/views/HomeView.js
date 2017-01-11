import Surface              from 'famous/core/Surface.js';
import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';


export class HomeView extends View {

    @layout.size(~100, ~25)
    @layout.stick.center()
    message = new Surface({
        content:  
        `<div> 
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <input type="text" placeholder="Message"/>
            <br/>
            <button>Submit Message</button>
        </div>`
    });

}

  