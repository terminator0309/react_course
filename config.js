SystemJS.config({
    baseURL: 'https://unpkg.com/',
    defaultExtension: true,
    meta: {
      '*.jsx': {
        'babelOptions': {
          react: true
        }
      }
    },
    map: {
      'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
      'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
      'react': 'react@16.4.2/umd/react.production.min.js',
      'react-dom': 'react-dom@16.4.2/umd/react-dom.production.min.js',
      'reactstrap': 'reactstrap@8.5.0/dist/reactstrap.min.js',
      'bootstrap': 'bootstrap@4.3.1/css/bootstrap.min.js',
      'react-popper': 'react-popper@latest/dist/index.umd.js',
      'react-router-dom': 'react-router-dom@latest/umd/react-router-dom.js',
      'redux': 'redux@3.7.2/dist/redux.js',
      'react-redux': 'react-redux@5.0.7/dist/react-redux.min.js'
    },
    transpiler: 'plugin-babel'
  });
  
  SystemJS.import('./src/index.jsx')
    .catch(console.error.bind(console));