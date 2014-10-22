# vim: ts=4 sw=4 noexpandtab
SHELL    := /bin/bash

HTML_SRC := src/index.html
HTML_DST := build/index.html
<% if (sass) { %>
SASS_SRC     := src/sass/index.scss
SASS_DST     := src/css/main.css
<% } %>
CSS_SRC  := $(shell find src/css -type f -name '*.css')
CSS_DST  := build/css/main.min.css

JS_SRC   := $(shell find src/js -type f -name '*.js')
JS_DST   := build/js/main.min.js

<% if (karma) { %>
define karma
	-@node ./node_modules/karma/bin/karma start $1
endef
<% } %>

all: clean lint $(JS_DST) $(HTML_DST) $(CSS_DST)

$(JS_DST): $(JS_SRC)
	@echo + Minifying JavaScript
	@mkdir -p $(@D)
	@node ./node_modules/uglify-js/bin/uglifyjs $(JS_SRC) -o $@ -c 'warnings=false' -m --screw-ie8

$(HTML_DST): $(HTML_SRC)
	@echo + Processing HTML
	@node -e "require('./node_modules/htmlprocessor/index')({src:['$(HTML_SRC)'],dest:'$@.tmp'});"
	@sleep 1.0
	@node minify $@.tmp $@
	@sleep 0.5
	@rm -f $@.tmp

$(CSS_DST): $(CSS_SRC)
	@echo + Minifying CSS
	@node minify $(CSS_SRC) $@

lint:
	@echo + Linting JavaScript
	@node ./node_modules/eslint/bin/eslint.js $(JS_SRC)

lint-tap:
	@echo + Generating TAP report
	-@node ./node_modules/eslint/bin/eslint.js --format ./node_modules/eslint-tap/tap.js $(JS_SRC)

server:
	@cd src && node ../node_modules/sencisho/bin/sencisho -l -w $(JS_SRC)

clean:
	@echo + Removing build directory
	-@rm -rf build

install:
	@echo + Installing
	-@npm install
	-@npm install -g bower
	-@bower install --allow-root <% if (sass) { %>
	-@gem install sass           <% } %>

<% if (sass) { %>
sass-watch:
	@echo + Watching sass files
	-@sass --watch $(SASS_SRC):$(SASS_DST)

sass:
	@echo + Compiling sass
	-@sass $(SASS_SRC):$(SASS_DST)
<% } %>
<% if (karma) { %>
test:
	@echo + Running tests
	$(call karma,--single-run)

test-dev:
	@echo + Running tests (dev mode)
	$(call karma)
<% } %>


.PHONY: clean lint lint-tap server

