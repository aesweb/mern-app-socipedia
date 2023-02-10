'use strict';

/**
 * isolated middleware
 * 
 * @return {Function} isolated middleware
 * @api public
 */
module.exports = function() {
  return async function isolated(req, res, next) {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  };
};
