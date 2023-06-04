.PHONY: dev all
VENDOR_DIR = assets/vendor

all: dev

dev: include-npm-deps
	@npx netlify dev -c "jekyll serve --livereload --incremental --watch"

clean:
	-rm -rf _site/ .sass-cache .jekyll-metadata "$(VENDOR_DIR)"

vendor-npm-deps:
	@npm install
	@if [ ! -d "$(VENDOR_DIR)" ]; then mkdir -p "$(VENDOR_DIR)"; fi
	# Vendor website-carbon-badges to speed page up.
	# Delete unnecessary files
	@cp -r node_modules/website-carbon-badges/ "$(VENDOR_DIR)"
	@rm "$(VENDOR_DIR)"/website-carbon-badges/index.html
	@rm "$(VENDOR_DIR)"/website-carbon-badges/*.json
	@rm "$(VENDOR_DIR)"/website-carbon-badges/*.md 

build: vendor-npm-deps
	@export JEKYLL_ENV=production
	@bundle exec jekyll build
