import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.C7N-_kUS.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/S-mJDw8V.js","_app/immutable/chunks/CrgzEhLB.js","_app/immutable/chunks/OvjRsWRj.js","_app/immutable/chunks/BmF6eDB9.js","_app/immutable/chunks/Ci7rVZ0k.js","_app/immutable/chunks/Dx8zZpX5.js","_app/immutable/chunks/wQe4Klio.js","_app/immutable/chunks/C_RtnEzg.js"];
export const stylesheets = ["_app/immutable/assets/2.CvGuXpNO.css"];
export const fonts = [];
