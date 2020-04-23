.PHONY: setup
setup: ## Install dependencies
	yarn install --frozen-lockfile

.PHONY: run
run: ## Run app
	yarn start