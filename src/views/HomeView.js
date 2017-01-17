import Surface              	from 'famous/core/Surface.js';
import InputSurface             from 'famous/surfaces/InputSurface.js';
import {View}               	from 'arva-js/core/View.js';
import {layout, event}   	    from 'arva-js/layout/Decorators.js';
import {Messages}           	from '../models/ChatContent.js';
import {CollectionLayout}       from 'famous-flex/layouts/CollectionLayout';
import {DataBoundScrollView}    from 'arva-js/components/DataBoundScrollView';

export class HomeView extends View {

	//__________________Input Field

	/* The size of this surface takes up the whole width of the view */
	@layout.size(undefined, 50)
	/* Docks the renderable to the bottom.  */
	@layout.dock.bottom()

	/* This is the input field renderable. */
	input = new InputSurface({
		placeholder: 'Say Something'
	})

	//__________________Button 

	@layout.size(150,100)
	@layout.dock.bottom(0, 50)
	@layout.origin(1, -0.15)
	@layout.align(1, -0.15)

	/* This is the input field renderable. */
	button = new InputSurface({
		type: 'button', 
		value: 'Send'
	})

	
	//__________________Message field

	@layout.size(200,undefined)

	/* This is the renderable for the message field. */
	messageBox = new DataBoundScrollView({
		layout: CollectionLayout,
		layoutOptions: {
			itemSize: [undefined, 50],
			spacing: 10
		},
		itemTemplate: (post) => new Surface({
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
		dataStore: new Messages()
	})
	
	/* Translate the element in z space to the back */
	@layout.translate(0, 0, -10)
	@layout.fullSize()

	background = new Surface({
		properties: {
			backgroundColor: 'GhostWhite'
		}
	});
}
