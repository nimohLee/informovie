import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {IconLookup} from '@fortawesome/fontawesome-svg-core';

class Icons {
    private arrowUp: IconLookup;
    private arrowDown: IconLookup
    private bar: IconLookup;
    constructor(){
        library.add(fas);
        this.arrowUp = { prefix: 'fas', iconName: 'caret-up' };
        this.arrowDown = {  prefix: 'fas', iconName: 'caret-down' };
        this.bar = {prefix: 'fas', iconName: 'minus'}
    }
    get arrowUpIcon(){
        return this.arrowUp;
    }
    get arrowDownIcon(){
        return this.arrowDown;
    } 
    get arrowBarIcon(){
        return this.bar;
    } 
}

export default Icons;