const rp = [
  ['/OK', 200],
  ['/Bad-Request', 400],
  ['/Created', 201],
  ['/Forbidden', 403],
  ['/Found', 302],
  ['/Gateway-Timeout', 504],
  ['/Internal-Server-Error', 500],
  ['/Moved-Permanently', 301],
  ['/Unauthorized', 401],
];
const ReasonPhrase = new Map(rp);

module.exports = ReasonPhrase;
