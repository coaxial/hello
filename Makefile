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
	@echo 'Remember to run `nvm use && npm i` beforehand.'
	@mkdir -p "$(VENDOR_DIR)"

$(VENDOR_DIR)/website-carbon-badges: $(VENDOR_DIR)
	@# Vendor website-carbon-badges
	@# Delete unnecessary files
	@cp -r node_modules/website-carbon-badges/ "$(VENDOR_DIR)"
	@rm "$(VENDOR_DIR)"/website-carbon-badges/index.html
	@rm "$(VENDOR_DIR)"/website-carbon-badges/*.json
	@rm "$(VENDOR_DIR)"/website-carbon-badges/.*.json
	@rm "$(VENDOR_DIR)"/website-carbon-badges/*.png
	@rm "$(VENDOR_DIR)"/website-carbon-badges/*.md 

$(VENDOR_DIR)/fontawesome: $(VENDOR_DIR)
	@# Vendor fontawesome
	@mkdir -p "$(VENDOR_DIR)"/fontawesome/css
	@mkdir -p "$(VENDOR_DIR)"/fontawesome/webfonts
	@cp node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css "$(VENDOR_DIR)"/fontawesome/css/
	@cp node_modules/@fortawesome/fontawesome-free/css/brands.min.css "$(VENDOR_DIR)"/fontawesome/css/
	@cp node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.* "$(VENDOR_DIR)"/fontawesome/webfonts/
	@# Fix path to webfonts
	@sed -i 's/..\/webfonts/..\/vendor\/fontawesome\/webfonts/g' "$(VENDOR_DIR)"/fontawesome/css/fontawesome.min.css
	@sed -i 's/..\/webfonts/..\/vendor\/fontawesome\/webfonts/g' "$(VENDOR_DIR)"/fontawesome/css/brands.min.css

$(SITE_DIR): $(VENDOR_DIR) $(VENDOR_DIR)/website-carbon-badges $(VENDOR_DIR)/fontawesome
	@export JEKYLL_ENV=production
	@bundle exec jekyll build

$(DIST_DIR): $(SITE_DIR)
	@mkdir -p "$(DIST_DIR)"
	@echo "Moving files..."
	@for dir in $$(find "$(SITE_DIR)" -maxdepth 1 -type d -printf %P\ ); do \
		cp -r "$(SITE_DIR)/$${dir}" "$(DIST_DIR)/$${dir}"; \
	done
	@echo "Done."
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
	 @echo "Minifying JS..."
	 @mkdir -p "$(DIST_DIR)/assets/js"
	 @for js in $$(find "$(SITE_DIR)"/assets/js -type f -name '*.js' -printf %P\\n); do \
	 	npx terser "$(SITE_DIR)/assets/js/$${js}" --compress --mangle --output "$(DIST_DIR)/assets/js/$${js}"; \
	 done
	 @echo "Done."
	 @echo "Minifying CSS..."
	 @for css in $$(find "$(SITE_DIR)/assets" -type f \( -name '*.css' -not -name '*.min.css' \) -printf %P\\n); do \
	 	npx clean-css-cli -o "$(DIST_DIR)"/assets/$${css} "$(SITE_DIR)"/assets/$${css}; \
	 done
	 @for mincss in $$(find "$(SITE_DIR)/assets" -type f -name '*.min.css' -printf %P\\n); do \
	 	mkdir -p "$(DIST_DIR)/assets/$$(echo $${mincss} | sed 's/\(.*\)\/.*\.*$$/\1\//')"; \
	 	cp "$(SITE_DIR)/assets/$${mincss}" "$(DIST_DIR)/assets/$${mincss}"; \
	 done
	@echo "Done."
