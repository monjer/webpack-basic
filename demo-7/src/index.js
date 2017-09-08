import print from './page.js'
import './style.css';

var text = document.createTextNode('Hello world!');
document.body.appendChild(text)

document.body.addEventListener('click' , function(){
  print();
});
if (module.hot) {
  module.hot.accept('./page.js', function() {
    console.log('Accepting the updated printMe module!');
    print();
  })
}
