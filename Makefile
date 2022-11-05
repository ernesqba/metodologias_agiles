#################################################
# Development commands
#########################################

# start
start:
	docker-compose -f docker/docker-compose.yaml up

# stop
stop:
	docker-compose -f docker/docker-compose.yaml stop

# run test
.PHONY: test
test:
	docker-compose -f docker/docker-compose.yaml run --no-deps --rm server npm run test

# run test coverage
.PHONY: coverage
coverage:
	docker-compose -f docker/docker-compose.yaml run --no-deps --rm server npm run test:cov

build:
	docker-compose -f docker/docker-compose.yaml run --no-deps --rm server npm build

# run test
lint:
	docker-compose -f docker/docker-compose.yaml run --no-deps --rm server npm run lint:format

# install dependencies
install:
	docker-compose -f docker/docker-compose.yaml run --no-deps --rm server npm i

# Runs e2e tests
e2e:
	docker-compose -f docker/docker-compose.yaml run --rm server npm run test:e2e

# Run dev migrations
migrate: build
	docker-compose -f docker/docker-compose.yaml run --rm server sh -c "npm run typeorm migration:run"

shell:
	docker-compose -f docker/docker-compose.yaml run --rm server sh

cli:
	@read -p "Type the name of a running docker-compose service: " service; \
	docker-compose -f docker/docker-compose.yaml exec $$service sh

revert:
	docker-compose -f docker/docker-compose.yaml run --rm server npm run typeorm migration:revert

migration:
	@read -p "Type your choice (r)un migrations, (c)reate migration, (g)enerate migrations: " choice; \
    if [ $$choice = "r" ]; then \
      cmd="npm run build && npm run typeorm migration:run"; \
    elif [ $$choice = "c" ]; then \
      read -p "Enter migration name:" migname; \
      cmd="npm run build && npm exec typeorm migration:create src/migrations/$$migname"; \
    elif [ $$choice = "g" ]; then \
      read -p "Enter migration name:" migname; \
      cmd="npm run build && npm run typeorm migration:generate -- src/migrations/$$migname"; \
    else \
      echo "Choice not recognized"; \
      exit 1; \
    fi; \
	docker-compose -f docker/docker-compose.yaml run --rm server sh -c "$$cmd"

test-all: coverage e2e

pre-push: lint test-all
