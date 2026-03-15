#!/bin/bash

function tsdom () {
	./node_modules/.bin/tsc "${1}" --outFile "${2}" --lib es2018,dom
}

mkdir -p docs/exposure-filters/js
tsdom src/exposure-filters.ts docs/exposure/js/exposure-filters.js
