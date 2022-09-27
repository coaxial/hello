.PHONY: dev all

all: dev

dev:
	@npx netlify dev -c "jekyll serve --incremental --watch"
