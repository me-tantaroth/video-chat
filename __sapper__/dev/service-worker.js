(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1614088915366;

	const files = [
		"/service-worker-index.html",
		"/favicon.png",
		"/global.css",
		"/logo-192.png",
		"/logo-512.png",
		"/manifest.json"
	];

	const shell = [
		"/client/client.2717a651.js",
		"/client/inject_styles.5607aec6.js",
		"/client/index.a57c320a.js",
		"/client/about.aabfb96d.js",
		"/client/index.f457c186.js",
		"/client/[slug].b73374de.js",
		"/client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;
	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const staticAssets = new Set(to_cache);
	self.addEventListener('install', (event) => {
	    event.waitUntil(caches
	        .open(ASSETS)
	        .then(cache => cache.addAll(to_cache))
	        .then(() => {
	        self.skipWaiting();
	    }));
	});
	self.addEventListener('activate', (event) => {
	    event.waitUntil(caches.keys().then(async (keys) => {
	        // delete old caches
	        for (const key of keys) {
	            if (key !== ASSETS)
	                await caches.delete(key);
	        }
	        self.clients.claim();
	    }));
	});
	/**
	 * Fetch the asset from the network and store it in the cache.
	 * Fall back to the cache if the user is offline.
	 */
	async function fetchAndCache(request) {
	    const cache = await caches.open(`offline${timestamp}`);
	    try {
	        const response = await fetch(request);
	        cache.put(request, response.clone());
	        return response;
	    }
	    catch (err) {
	        const response = await cache.match(request);
	        if (response)
	            return response;
	        throw err;
	    }
	}
	self.addEventListener('fetch', (event) => {
	    if (event.request.method !== 'GET' || event.request.headers.has('range'))
	        return;
	    const url = new URL(event.request.url);
	    // don't try to handle e.g. data: URIs
	    const isHttp = url.protocol.startsWith('http');
	    const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
	    const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
	    const skipBecauseUncached = event.request.cache === 'only-if-cached' && !isStaticAsset;
	    if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
	        event.respondWith((async () => {
	            // always serve static files and bundler-generated assets from cache.
	            // if your application has other URLs with data that will never change,
	            // set this variable to true for them and they will only be fetched once.
	            const cachedAsset = isStaticAsset && await caches.match(event.request);
	            // for pages, you might want to serve a shell `service-worker-index.html` file,
	            // which Sapper has generated for you. It's not right for every
	            // app, but if it's right for yours then uncomment this section
	            /*
	            if (!cachedAsset && url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
	                return caches.match('/service-worker-index.html');
	            }
	            */
	            return cachedAsset || fetchAndCache(event.request);
	        })());
	    }
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYxNDA4ODkxNTM2NjtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcIi9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sXCIsXG5cdFwiL2Zhdmljb24ucG5nXCIsXG5cdFwiL2dsb2JhbC5jc3NcIixcblx0XCIvbG9nby0xOTIucG5nXCIsXG5cdFwiL2xvZ28tNTEyLnBuZ1wiLFxuXHRcIi9tYW5pZmVzdC5qc29uXCJcbl07XG5leHBvcnQgeyBmaWxlcyBhcyBhc3NldHMgfTsgLy8gbGVnYWN5XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IFtcblx0XCIvY2xpZW50L2NsaWVudC4yNzE3YTY1MS5qc1wiLFxuXHRcIi9jbGllbnQvaW5qZWN0X3N0eWxlcy41NjA3YWVjNi5qc1wiLFxuXHRcIi9jbGllbnQvaW5kZXguYTU3YzMyMGEuanNcIixcblx0XCIvY2xpZW50L2Fib3V0LmFhYmZiOTZkLmpzXCIsXG5cdFwiL2NsaWVudC9pbmRleC5mNDU3YzE4Ni5qc1wiLFxuXHRcIi9jbGllbnQvW3NsdWddLmI3MzM3NGRlLmpzXCIsXG5cdFwiL2NsaWVudC9zYXBwZXItZGV2LWNsaWVudC4xZTdhNGE1ZS5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Fib3V0XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9ibG9nXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9ibG9nXFwvKFteL10r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
