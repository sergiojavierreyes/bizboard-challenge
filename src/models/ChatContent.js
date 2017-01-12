import {PrioritisedArray} 				from 'arva-js/data/PrioritisedArray.js'
import {MainChat}                   	from './ChatApp.js';

export class ChatMessages extends PrioritisedArray {
    constructor() {
        super(MainChat);
    }
}

