'use strict';

const fetch = require('node-fetch');

function getResponseSize(url) {
	return fetch(url)
		.then(res => {
			const contentLength = Number(res.headers.get('Content-Length'));
			return contentLength || res.text().then(txt => txt.length);
		})
}

// poor, non-functional style... :-(
// sequential requests :-(
async function getTotalResponsesSize1(...urls) {
	let acc = 0; 
	for (let i = 0; i < urls.length; ++i) {
		acc += await getResponseSize(urls[i]);
	}
	return acc;
}

// sequential requests :-(
function getTotalResponsesSize2(...urls) {
	return urls.reduce(
		(pacc, url) => pacc.then(acc => getResponseSize(url).then(isz => acc + isz)),
		Promise.resolve(0)
	);
}

// sequential requests :-(
// just like getTotalResponsesSize2, but with async/await
async function getTotalResponsesSize3(...urls) {
	return urls.reduce(
		async (pacc, url) => await pacc + await getResponseSize(url),
		0
	);
}

// parallel requests
// wait for all results, then reduce them to a final sum
function getTotalResponsesSize4(...urls) {
	return Promise.all(urls.map(getResponseSize))
		.then(sss => sss.reduce((acc,isz) => acc + isz, 0));
}

// parallel requests
// uses reduce to produce a chain of promises that combines results as they arrive
function getTotalResponsesSize5(...urls) {
	return urls
		.map(getResponseSize)
		.reduce(
			(pacc, pisz) => pacc.then(acc => pisz.then(isz => acc + isz)),
			Promise.resolve(0)
		);
}

// parallel requests
// just like getTotalResponsesSize5, but with async/await
function getTotalResponsesSize6(...urls) {
	return urls
		.map(getResponseSize)
		.reduce(
			async (pacc, pisz) => await pacc + await pisz,
			0
		);
}

console.time('sss');
getTotalResponsesSize6(
	'http://loripsum.net/api/1/short/plaintext',
	'https://www.google.com',
	'https://www.isel.pt',
	'https://www.microsoft.com',
	'https://www.publico.pt',
	'https://www.dn.pt',
	'https://www.sapo.pt',
)
	.then(console.log)
	.then(() => {
		console.timeEnd('sss');
	}
);
