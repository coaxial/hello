.PHONY: all dev clean build
VENDOR_DIR = assets/vendor
SITE_DIR = _site
DIST_DIR = dist

all: dev

dev: $(SITE_DIR)
	@npx netlify dev

clean:
	-rm -rf .sass-cache .jekyll-metadata "$(VENDOR_DIR)" "$(DIST_DIR)" "$(SITE_DIR)"

$(VENDOR_DIR):
	@# `nvm use` doesn't work in the Makefile's context, so when running
	@# locally then remind me to run `npm i` with the correct node version
	@echo 'Remember to run `nvm use && npm i` beforehand.'
	@mkdir -p "$(VENDOR_DIR)"

$(VENDOR_DIR)/website-carbon-badges: $(VENDOR_DIR)
	@# Vendor website-carbon-badges
	@cp -r node_modules/website-carbon-badges/ "$(VENDOR_DIR)"
	@# Delete unnecessary files
	@rm "$(VENDOR_DIR)"/website-carbon-badges/index.html
	@rm "$(VENDOR_DIR)"/website-carbon-badges/*.json
	@rm "$(VENDOR_DIR)"/website-carbon-badges/.*.json
	@rm "$(VENDOR_DIR)"/website-carbon-badges/*.png
	@rm "$(VENDOR_DIR)"/website-carbon-badges/*.md 

$(VENDOR_DIR)/fontawesome: $(VENDOR_DIR)
	@# Vendor fontawesome
	@mkdir -p "$(VENDOR_DIR)"/fontawesome/css
	@mkdir -p "$(VENDOR_DIR)"/fontawesome/webfonts
	@# We only use glyphs in the brands namespace, no need for the rest
	@cp node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css "$(VENDOR_DIR)"/fontawesome/css/
	@cp node_modules/@fortawesome/fontawesome-free/css/brands.min.css "$(VENDOR_DIR)"/fontawesome/css/
	@cp node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.* "$(VENDOR_DIR)"/fontawesome/webfonts/
	@@# Fix path to webfonts in CSS files
	@sed -i 's/..\/webfonts/..\/vendor\/fontawesome\/webfonts/g' "$(VENDOR_DIR)"/fontawesome/css/fontawesome.min.css
	@sed -i 's/..\/webfonts/..\/vendor\/fontawesome\/webfonts/g' "$(VENDOR_DIR)"/fontawesome/css/brands.min.css

$(SITE_DIR): $(VENDOR_DIR) $(VENDOR_DIR)/website-carbon-badges $(VENDOR_DIR)/fontawesome
	@export JEKYLL_ENV=production
	@bundle exec jekyll build

$(DIST_DIR): $(SITE_DIR)
	@mkdir -p "$(DIST_DIR)"
	@# Move all files to dist/ unchanged, next steps will minify HTML, JS,
	@# CSS
	@echo "Moving files..."
	@for dir in $$(find "$(SITE_DIR)" -maxdepth 1 -type d -printf %P\ ); do \
		cp -r "$(SITE_DIR)/$${dir}" "$(DIST_DIR)/$${dir}"; \
	done
	@echo "Done."
	@# Dealing with HTML files
	@echo "Minifying HTML..."
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
		--input-dir "$(SITE_DIR)" \
		--output-dir "$(DIST_DIR)" \
		--file-ext html
	@echo "Done."
	@# Dealing with JS files
	@echo "Minifying JS..."
	@mkdir -p "$(DIST_DIR)/assets/js"
	@# Because we don't need the whole path, -printf drops the prefix in the
	@# resulting $js variable. So _site/assets/js/foo.js becomes foo.js only
	@for js in $$(find "$(SITE_DIR)"/assets/js -type f -name '*.js' -printf %P\\n); do \
		npx terser "$(SITE_DIR)/assets/js/$${js}" --compress --mangle --output "$(DIST_DIR)/assets/js/$${js}"; \
		done
	@echo "Done."
	@# Dealing with CSS files
	@echo "Minifying CSS..."
	@# -printf drops _site/assets from the $css variable, making it easier
	@#  to move files to dist/
	@# Skip *.min.css since they're already minified
	@for css in $$(find "$(SITE_DIR)/assets" -type f \( -name '*.css' -not -name '*.min.css' \) -printf %P\\n); do \
		npx clean-css-cli -o "$(DIST_DIR)"/assets/$${css} "$(SITE_DIR)"/assets/$${css}; \
		done
	@# Copy the untouched, already minified *.min.css files
	@for mincss in $$(find "$(SITE_DIR)/assets" -type f -name '*.min.css' -printf %P\\n); do \
		mkdir -p "$(DIST_DIR)/assets/$$(echo $${mincss} | sed 's/\(.*\)\/.*\.*$$/\1\//')"; \
		cp "$(SITE_DIR)/assets/$${mincss}" "$(DIST_DIR)/assets/$${mincss}"; \
		done
	@echo "Done."
