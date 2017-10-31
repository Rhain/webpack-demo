export default (text = 'Hello world') => {
  const element = document.createElement('div');
  element.className = 'pure-button';

  element.innerHTML = text;
  /*element.onclick = () => {
    import('./lazy').then((lazy) => {
      element.textContent = lazy.default;
    }).catch((err) => {
      console.error(err);
    });
  };*/

  element.onclick = () => {
    require.ensure([], (require) => {
      element.textContent = require('./lazy').default;
    });
  };
  return element;
};
