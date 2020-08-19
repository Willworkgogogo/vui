const requireAll = (requireContext: any) =>
  requireContext.keys().map((name: string) => requireContext(name));
const req = require.context('./svg', false, /\.svg$/);
requireAll(req);
