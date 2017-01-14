import Surface              	from 'famous/core/Surface.js';
import InputSurface             from 'famous/surfaces/InputSurface.js';
import {View}               	from 'arva-js/core/View.js';
import {layout, event}   	    from 'arva-js/layout/Decorators.js';
import {Messages}           	from '../models/ChatContent.js';
import {CollectionLayout}       from 'famous-flex/layouts/CollectionLayout';
import {DataBoundScrollView}    from 'arva-js/components/DataBoundScrollView';

export class HomeView extends View {


	/* The size of this surface takes up the whole width of the view */
	@layout.size(undefined, 50)
	/* Docks the renderable to the bottom.  */
	@layout.dock.bottom()


	input 	 = new InputSurface({placeholder: 'Say Something'})

	/* The size of this surface takes up the whole width of the view */
	@layout.size(undefined, 35)
	/* Docks the renderable to the bottom.  */
	@layout.dock.bottom()

	button   = new InputSurface({type: 'button',  value: 'Submit'})


	/* The size of this surface takes up the whole width of the view */
	@layout.size(undefined, 300)

	messageBox = new DataBoundScrollView({
		layout: CollectionLayout,
		layoutOptions: {
			itemSize: [undefined, 30]
		},
		itemTemplate: (post) => new Surface({
			content: post.text
		}),
		dataStore: new Messages()
	})

}


