export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avatar-1.png","docs/fairlx_preview.png","docs/footer_preview.webp","docs/skills_arsenal.png","fairlx.webp","finance_dashboard_clean_1772087158625.png","mobile_app_tapit_mockup_1772086928850.png","my-avatar.png","platform_educational_premium_1772087392241.png","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CHE-XHiI.js",app:"_app/immutable/entry/app.CiJJ3Gua.js",imports:["_app/immutable/entry/start.CHE-XHiI.js","_app/immutable/chunks/C_RtnEzg.js","_app/immutable/chunks/BmF6eDB9.js","_app/immutable/chunks/S-mJDw8V.js","_app/immutable/entry/app.CiJJ3Gua.js","_app/immutable/chunks/S-mJDw8V.js","_app/immutable/chunks/BmF6eDB9.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/OvjRsWRj.js","_app/immutable/chunks/wQe4Klio.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/FormSubmit",
				pattern: /^\/FormSubmit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
