.PHONY: dev all

all: dev

dev:
	@npx netlify dev -c "jekyll serve --livereload --incremental --watch"

clean:
	-rm -r _site/ .sass-cache .jekyll-metadata
