import _ from 'lodash';

console.log("this is index page");

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  button.onclick = e =>
    import ( /* webpackChunkName: "lazy-module" */ './lazy-module.js').then(module => {
      var moduleFn = module.default;
      moduleFn();
    });

  return element;
}
document.body.appendChild(component());
