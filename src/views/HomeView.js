import Surface              	from 'famous/core/Surface.js';
import InputSurface             from 'famous/surfaces/InputSurface.js';
import CollectionLayout         from 'famous-flex/layouts/CollectionLayout';

import {View}               	from 'arva-js/core/View.js';
import {layout, event}   	from 'arva-js/layout/Decorators.js';
import {DataBoundScrollView}    from 'arva-js/components/DataBoundScrollView';

import {Messages}           	from '../models/ChatContent.js';

export class HomeView extends View {

	//__________________Input Field
    @layout.translate(0, 0, 10)
	@layout.size(undefined, 50)
	@layout.dock.bottom()
	input = new InputSurface({
		placeholder: 'Say Something'
	});

	//__________________Button
    @layout.translate(0, 0, 10)
	@layout.dock.bottom(0, 50)
	@layout.origin(1, -0.15)
	@layout.align(1, -0.15)
    @layout.size(150,100)
	button = new InputSurface({
		type: 'button', 
		value: 'Send'
	});

	
	//__________________Message field
	@layout.size(200, undefined)
	@layout.dock.fill() /* Makes this renderable take up all screen space up to the input field */
	messageBox = new DataBoundScrollView({
		layout: CollectionLayout,
		layoutOptions: {
			spacing: 10,
			margins: 20
		},
		itemTemplate: (post) => new Surface({
			size:[200,true],
			content: post.text,
			properties: {
				fontSize: '14pt',
				color: '#fff',
				backgroundColor: '#0B93F6',
				borderRadius: '25px',
				boxShadow: '0 0 3px #87CEEB',
				padding: '10px 20px',
				margin: '15px 15px'
			}
		}),
		chatScrolling: true,
		dataStore: new Messages()
	});
	
	/* Translate the element in z space to the back */
	@layout.translate(0, 0, -10)
	@layout.fullSize()
	@event.pipe('messageBox') /* Allows scrolling when pointer isn't on a message */
	background = new Surface({
		properties: {
			backgroundColor: 'GhostWhite'
		}
	});
}
