import {Controller}        from 'arva-js/core/Controller.js';
import {HomeView}          from '../views/HomeView.js';
import {Messages}      	   from '../models/ChatContent.js';
import {Message}      	   from '../models/ChatApp.js';


export class HomeController extends Controller {

	Index(){
		let posts = new Messages()

		if(!this.homeView) {
			this.homeView = new HomeView()

		/* Adds the new message from the inputfield to Firebase */
			this.homeView.input.on('change', ()=>{ 
				posts.add({text: this.homeView.input.getValue()})
				console.log(this.homeView.input.getValue())
			})
		}
		return this.homeView;
	}
}