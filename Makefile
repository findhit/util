REPORTER ?= spec

# Paths
HOME ?= $(shell dirname $(realpath ~))
BASE := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
PATH_TEST := $(BASE)/tests

all: test
.PHONY: all

# Tests Related
test: test-mocha

test-mocha:
	$(eval TESTS := $(shell find $(PATH_TEST)/* -name "*.test.js"))

	@echo "Running tests..."
	@mocha --globals setImmediate,clearImmediate --check-leaks --colors -t 10000 --reporter $(REPORTER) $(TESTS);
