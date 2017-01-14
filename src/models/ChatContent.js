import {PrioritisedArray} 			from 'arva-js/data/PrioritisedArray.js'
import {Message}                   	from './ChatApp.js';

export class Messages extends PrioritisedArray {
     constructor(dataSource, dataSnapshot, options, modelOptions){ 
    super(Message, dataSource, dataSnapshot, options, modelOptions);
  }
}