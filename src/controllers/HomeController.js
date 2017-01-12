import {Controller}        from 'arva-js/core/Controller.js';
import {HomeView}          from '../views/HomeView.js';
import {ChatMessages}      from '../models/ChatContent.js';


export class HomeController extends Controller {

    Index(){
        window.messages = this.messages = new ChatMessages();

        if(!this.homeView) {
            this.homeView = new HomeView('world');
            this.homeView.inputField.on('message', (input) => {
                this.messages.add({content: input});
            });
        }
        return this.homeView;
    }
}