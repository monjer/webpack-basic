import print from './page.js'

var text = document.createTextNode('Hello world!');
document.body.appendChild(text)

document.body.addEventListener('click' , function(){
  print();
});
