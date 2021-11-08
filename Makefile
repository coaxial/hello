.PHONY: dev all

all: dev

dev:
	@npx netlify dev --incremental
