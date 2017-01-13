import {Controller}        from 'arva-js/core/Controller.js';
import {HomeView}          from '../views/HomeView.js';
import {ChatMessages}      from '../models/ChatContent.js';


export class HomeController extends Controller {

    Index(){
        this.posts = new ChatMessages();

        if(!this.homeView) {
            this.homeView = new HomeView();
            this.homeView.singleInput.on('message', (input) => {
            this.posts.add({text: input});
            });
        }
        return this.homeView;
    }
}