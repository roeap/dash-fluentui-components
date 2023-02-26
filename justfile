set dotenv-load := false

_default:
    @just --list

# Install pip requirements & node modules.
install:
    poetry install
    yarn install
    poetry run pre-commit install --hook-type commit-msg --hook-type pre-commit

# generate minified component bundle
generate_ts:
    yarn run webpack --mode production --config=webpack/config.dist.js

# generaty python modules
generate_py:
    poetry run dash-generate-components ./src/components dash_fluentui_components -p package-info.json --ignore src/components/templates/ResizePanel.tsx
# --ignore \\.test\\.

# Build the bundle and generate Dash components
generate: generate_ts generate_py
    poetry run black .
    poetry run ruff --fix .

# run linters on codebase
lint:
    yarn run prettier src/ --list-different
    yarn run eslint src/ --ext .js,.jsx,.ts,.tsx
    poetry run black --check .
    poetry run ruff .

# run typescript (jest) tests
test_ts:
    yarn run jest

# run all tests
test: test_ts

# forat all source files
format:
    yarn run prettier . --write
    poetry run black .
    poetry run ruff --fix .

# Remove dist & build directories
clean:
    rm -rf dist
    rm -rf build

# Package the application for distribution using python wheel.
package: clean generate
    poetry build

_run-app:
    poetry run python -m app

_run-stories:
    yarn start-storybook -p 6006

run comp:
    just _run-{{ comp }}
