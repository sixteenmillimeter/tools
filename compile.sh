#!/bin/bash

function tsdom () {
	./node_modules/.bin/tsc "${1}" --outFile "${2}" --lib es2018,dom
}

mkdir -p www/exposure-filters/js
tsdom src/exposure-filters.ts www/exposure/js/exposure-filters.js