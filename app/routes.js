// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas, redirectToLogin, redirectToDashboard } = getAsyncInjectors(store);

  return [
    {
      path: 'home',
      name: 'home',
      onEnter: redirectToLogin,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/FrontDesk/reducer'),
          // import('containers/FrontDesk/sagas'),
          import('containers/FrontDesk'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('frontDesk', reducer.default);
          // injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'account',
      name: 'account',
      onEnter: redirectToLogin,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Account/reducer'),
          import('containers/Account/sagas'),
          import('containers/Account'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('account', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: 'login',
      name: 'login',
      onEnter: redirectToDashboard,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Login/reducer'),
          import('containers/Login'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('login', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/',
      name: 'splash',
      getComponent(nextState, cb) {
        import ('containers/Splash')
          .then(loadModule(cb))
          .catch(errorLoading)
      },
    }, {
      path: 'logout',
      name: 'logout',
      getComponent(location, cb) {
        import('containers/Logout')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
