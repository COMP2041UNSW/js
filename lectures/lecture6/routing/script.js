const routes = {
  '#/': '<h2>Home Page</h2>',
  '#/login': '<h2>Login Page</h2>',
};

const root = document.getElementById('root');

function router(oldPath, newPath) {
  if (oldPath === newPath) {
    return;
  }

  // get the actual 'path' by parsing the hash
  const { hash: path } = new URL(newPath);

  // is the path in our routes object?
  if (path in routes) {
    // do some actual logic
    root.innerHTML = routes[path];
  } else {
    // no match so redirect to home
    window.location.hash = '#/';
  }
}

function createLink(text, href) {
  const link = document.createElement('a');

  link.textContent = text;
  link.href = href;

  return link;
}

function onHashChange({ oldURL, newURL }) {
  // update meta
  router(oldURL, newURL);

  // log
  console.info(`path: ${newURL}`);
}

function runApp() {
  window.addEventListener('hashchange', onHashChange);
  const homeLink = createLink('Home', '#/');
  const loginLink = createLink('Login', '#/login');

  const links = document.createElement('div');
  links.append(homeLink, ' | ', loginLink);

  document.querySelector('main').appendChild(links);

  if (!location.hash) location.hash = '#/';

  router(null, location.hash);
}

export { runApp };
