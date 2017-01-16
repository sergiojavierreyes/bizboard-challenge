import {Controller}        from 'arva-js/core/Controller.js';
import {HomeView}          from '../views/HomeView.js';
import {Messages}      	   from '../models/ChatContent.js';
import {Message}      	   from '../models/ChatApp.js';


export class HomeController extends Controller {

	Index(){
		let posts = new Messages()
		

		if(!this.homeView) {
			this.homeView = new HomeView()

			/* Adds the new message from the inputfield to Firebase by clicking on submit */
			this.homeView.button.on('click', ()=>{ 
				posts.add({text: this.homeView.input.getValue()})
				console.log(this.homeView.input.getValue())
			})

			/* Adds the new message from the inputfield to Firebase by pressin on the Enter key */
			this.homeView.input.on('keypress', (e)=>{ 
				if (e.which == 13){
					posts.add({text: this.homeView.input.getValue()})
					console.log(this.homeView.input.getValue())
				}
			})
			console.log(this.homeView.messageBox.options.dataStore)
		}
		return this.homeView;
	}
}