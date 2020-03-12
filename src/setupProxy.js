const { createProxyMiddleware } = require('http-proxy-middleware');

// For development
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5500/graphql',
      changeOrigin: true,
    })
  );
};

// //For production
// module.exports = function(app) {
//     app.use(
//       '/api',
//       createProxyMiddleware({
//         target: 'http://montrelloserver:4500/graphql',
//         changeOrigin: true,
//       })
//     );
//   };