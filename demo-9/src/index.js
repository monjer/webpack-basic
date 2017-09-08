import {max , min} from './math.js'

const a = 10 ;
const b =1 ;
console.log(max(a,b))

var text = document.createTextNode('Hello webpack tree shaking!');
document.body.appendChild(text)

if (process.env.NODE_ENV !== 'production') {
 console.log('we are in development mode!');
}
