.PHONY: dev all

all: dev

dev:
	@npx netlify dev -c "jekyll serve --livereload --incremental --watch"
