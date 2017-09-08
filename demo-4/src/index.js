import _ from 'lodash'
import './style.css'
import image from './awesome_webpack_branding.png'
import Data from './data.xml'

var str = _.join(['Webpack' , ' , use for module management'])
var div = document.createElement('div')
var text = document.createTextNode(str);
div.appendChild(text)
document.body.appendChild(div)

var img = new Image()
img.width = 400;
img.src = image;
document.body.appendChild(img)

console.log(Data)
