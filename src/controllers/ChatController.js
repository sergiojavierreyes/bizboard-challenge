import {ChatApp}                   	from '../views/ChatView.js';
import {Controller}                 from 'arva-js/core/Controller.js';

export class ChatController extends Controller {

	Index(){
		if(!this.homeView) {
			this.homeView = new ChatApp({welcomeName: "this.updateMessage"});
		}
		return this.homeView;
	}
}