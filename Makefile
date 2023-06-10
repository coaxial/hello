.PHONY: all dev clean
VENDOR_DIR = assets/vendor
DIST_DIR = dist

all: dev

dev: $(VENDOR_DIR)
	@npx netlify dev

clean:
	-rm -rf _site/ .sass-cache .jekyll-metadata "$(VENDOR_DIR)" "$(DIST_DIR)"

$(VENDOR_DIR):
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

_site: assets/vendor
	@export JEKYLL_ENV=production
	@bundle exec jekyll build

dist: _site
	@echo "Minifying..."
	@npx html-minifier-terser \
	--collapse-whitespace \
	--collapse-boolean-attributes \
	--decode-entities \
	--remove-comments \
	--remove-optional-tags \
	--remove-redundant-attributes \
	--remove-script-type-attributes \
	--remove-tag-whitespace \
	--use-short-doctype \
	--minify-css false \
	--minify-js false \
	--minify-urls true \
	--input-dir $^ \
	--output-dir "$(DIST_DIR)" \
	--file-ext html
	@echo "Done."
