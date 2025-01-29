dev:
	npx webpack serve

install:
	npm ci

build:
	NODE_ENV=production npx webpack

lint:
	npx eslint .

fix-all:
	npx eslint . --fix

.PHONY: test