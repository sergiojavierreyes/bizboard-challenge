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
	@layout.size(undefined, 40)
	/* Docks the renderable to the bottom.  */
	@layout.dock.bottom()

	/* This is the input field renderable. */
	input = new InputSurface({placeholder: 'Say Something'})

	//__________________Button 

	/* The size of this surface takes up the whole width of the view */
	@layout.size(undefined, 20)
	/* Docks the renderable to the bottom.  */
	@layout.dock.bottom()

	/* This is the input field renderable. */
	button = new InputSurface({type: 'button', value: 'Send'})

	
	//__________________Message field

	/* The size of this surface takes up the whole size of the view */
	@layout.fullSize()

	/* This is the renderable for the message field. */
	messageBox = new DataBoundScrollView({
		layout: CollectionLayout,
		layoutOptions: {
			itemSize: [undefined, 30]
		},
		itemTemplate: (messages) => new Surface({
			content: messages.text
		}),
		dataStore: new Messages()
	})
}


