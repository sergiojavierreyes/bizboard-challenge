import Surface              	from 'famous/core/Surface.js';
import InputSurface             from 'famous/surfaces/InputSurface.js';
import {View}               	from 'arva-js/core/View.js';
import {layout, event, flow}   	from 'arva-js/layout/Decorators.js';
import {ChatMessages}           from '../models/ChatContent.js';
import {DataBoundScrollView}    from 'arva-js/components/DataBoundScrollView';

import Easing                   from 'famous/transitions/Easing.js';


export class HomeView extends View {

	constructor(){
		super();

		/* Create the renderable components we want to show in this view. */
		/* Listing of all the messages with DataBoundScrollView. */
		this.renderables.chatView = new DataBoundScrollView({
			itemTemplate: (post) => new AllMessages(post),
			dataStore: new ChatMessages()
		});

		/* Creating an input field and button with InputSurface */
		this.renderables.input    = new InputSurface({placeholder: 'say Something'});
		this.singleInput 	      = this.renderables.input;

		// this.renderables.button   = new InputSurface({type: 'button',  value: 'Submit'});
		// this.singleButton 		  = this.renderables.button;

		
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

export class AllMessages extends View {
	constructor(message){
		super();

		this.renderables.content = new Surface({
			content: message.text
		});

		this.layouts.push((context) => {

			context.set('content', {
				size: [undefined, 20],
				origin: [0, 0],
				align: [0.1, 0.5],
				translate: [0, 0, 10]
			});
		});
	}

	getSize(){}
}

// 		this.renderables.input      = new InputSurface({placeholder: 'say Something'});
// 		this.singleInput 	        = this.renderables.input;

// 		this.renderables.button 	= new InputSurface({type: 'button',  value: 'Submit'});
// 		this.singleButton 			= this.renderables.button;

