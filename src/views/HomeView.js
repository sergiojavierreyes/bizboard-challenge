import Surface              	from 'famous/core/Surface.js';
import InputSurface             from 'famous/surfaces/InputSurface.js';
import {View}               	from 'arva-js/core/View.js';
import {layout, event}      	from 'arva-js/layout/Decorators.js';
import {ChatMessages}           from '../models/ChatContent.js';
import {DataBoundScrollView}    from 'arva-js/components/DataBoundScrollView';

import {SingleLineTextInput}    from 'arva-js/components/inputs/SingleLineTextInput.js';

export class HomeView extends View {

	   constructor(){
        super();

        /* Create the renderable components we want to show in this view. */
        this.renderables.chatView = new DataBoundScrollView({
            layoutOptions: {
                margins: [16, 16, 16, 16],
                spacing: 8
            },
            itemTemplate: (post) => new ChatBubble(post),
            dataStore: new ChatMessages()
        });

        this.renderables.input = new SingleLineTextInput({placeholder: 'Enter message here'});
        this.inputField = this.renderables.input;

        /* Tell famous-flex how to render our components in Famous. */
        this.layouts.push((context) => {

            context.set('chatView', {
                size: [undefined, context.size[1] * 0.9],
                origin: [0.5, 0],
                align: [0.5, 0],
                translate: [0, 0, 10]
            });

            context.set('input', {
                size: [undefined, 64],
                origin: [0.5, 1],
                align: [0.5, 1],
                translate: [0, 0, 30]
            });
        });
    }
}

export class ChatBubble extends View {
    constructor(message){
        super();

        this.renderables.box = new Surface({
            properties: {
                backgroundColor: 'rgb(255, 255, 255)',
                borderRadius: '4px',
                boxShadow: '0px 2px 4px 0px rgba(50, 50, 50, 0.08)'
            }
        });

        this.renderables.content = new Surface({
            content: message.mainMessage,
            properties: {
                color: 'rgba(0, 0, 0, 0.8)'
            }
        });

        this.layouts.push((context) => {
            context.set('box', {
                size: [undefined, undefined]
            });

            context.set('from', {
                size: [undefined, 20],
                origin: [0, 1],
                align: [0.1, 0.45],
                translate: [0, 0, 10]
            });

            context.set('content', {
                size: [undefined, 20],
                origin: [0, 0],
                align: [0.1, 0.5],
                translate: [0, 0, 10]
            });
        });
    }

    getSize(){
        return [undefined, 64];
    }
}

// 	constructor(message){
// 		super();

// 		/* Create the renderable components we want to show in this view. */
//         this.renderables.content = new Surface({
//             content: message.content,
//             properties: {
//                 color: 'rgba(0, 0, 0, 0.8)'
//             }
//         });

// 		 this.renderables.messageBox = new DataBoundScrollView({
//             itemTemplate: (message) => new HomeView(message),
//             dataStore: new ChatMessages()
//         });

// 		this.renderables.input      = new InputSurface({placeholder: 'say Something'});
// 		this.singleInput 	        = this.renderables.input;

// 		this.renderables.button 	= new InputSurface({type: 'button',  value: 'Submit'});
// 		this.singleButton 			= this.renderables.button;

// 		/* Tell famous-flex how to render our components in Famous. */
// 		this.layouts.push((context) => {
// 			context.set('messageBox', {
// 				size: [undefined, undefined],
// 				margins: [16, 16, 16, 16],
//                 spacing: 8
// 			});

// 			context.set('input', {
// 				size: [50, 50],
// 				align: [0.7,0.8]
// 			});

// 			context.set('button', {
// 				size: [true, true],
// 				align: [0.5,0.6]
// 			});

//             context.set('content', {
//                 size: [undefined, 20],
//                 origin: [0, 0],
//                 align: [0.1, 0.5],
//                 translate: [0, 0, 10]
//             });

// 		});
// 	}
// }