.PHONY: all dev clean vendor-npm-deps build
VENDOR_DIR = assets/vendor

all: dev

dev: vendor-npm-deps
	@npx netlify dev -c "jekyll serve --livereload --incremental --watch"

clean:
	-rm -rf _site/ .sass-cache .jekyll-metadata "$(VENDOR_DIR)"

vendor-npm-deps:
	@echo 'Remember to run `nvm use && npm i` beforehand.'
	@if [ ! -d "$(VENDOR_DIR)" ]; then mkdir -p "$(VENDOR_DIR)"; fi
	@# Vendor website-carbon-badges to speed page up.
	@# Delete unnecessary files
	@cp -r node_modules/website-carbon-badges/ "$(VENDOR_DIR)"
	@rm "$(VENDOR_DIR)"/website-carbon-badges/index.html
	@rm "$(VENDOR_DIR)"/website-carbon-badges/*.json
	@rm "$(VENDOR_DIR)"/website-carbon-badges/*.md 
	@# Vendor fontawesome
	@cp -r node_modules/@fortawesome/fontawesome-free "$(VENDOR_DIR)"
	@# Fix path to webfonts
	@sed -i 's/..\/webfonts/..\/vendor\/fontawesome-free\/webfonts/' assets/vendor/fontawesome-free/scss/_variables.scss

build: vendor-npm-deps
	@export JEKYLL_ENV=production
	@bundle exec jekyll build
