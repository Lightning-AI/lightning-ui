![Lightning.ai Logo](https://github.com/gridai/lightning-ui/blob/master/src/resources/images/lightning-logo-with-text.svg "Lightning.ai")

# Lightning UI

[![CI Testing](https://github.com/gridai/lightning-ui/actions/workflows/ci-testing.yaml/badge.svg?branch=master)](https://github.com/gridai/lightning-ui/actions/workflows/ci-testing.yaml)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/Lightning-AI/lightning-ui/master.svg)](https://results.pre-commit.ci/latest/github/Lightning-AI/lightning-ui/master)

This project contains the source code for the Lightning app frontend. The frontend is a scaffold which reacts to change
in the app's internal state and renders components accordingly.

## Development

### Required Tools

- NodeJS 16.13.1+
- Yarn 1.22.17+
- Python 3.8+ (for `lightning` CLI)

### Commands

All commands are defined in the `scripts` section of the `package.json` file.

**Install dependencies:**

```shell
yarn install
```

**Install pre-commit hooks:**

```shell
yarn husky install
```

**Run tests:**

```shell
yarn run test
```

**Run tests interactively:**

```shell
yarn run test:open
```

### Integration with Lightning CLI

This frontend is meant to be started from the `lightning` CLI, and also consumes the API server which it exposes.

To set up both projects together, follow the steps below:

**Clone and build frontend:**

```shell
cd $HOME
git clone git@github.com:gridai/lightning-ui.git
cd lightning-ui
yarn install
yarn husky install
yarn build
```

In a separate terminal:

**Clone and run CLI:**

```shell
cd $HOME
git clone git@github.com:PyTorchLightning/lightning.git
cd lightning
python -m venv venv
source ./venv/bin/activate
pip install -e .
ln -s ./lightning/lightning/ui $HOME/lightning-ui/build
lighting start app ./examples/layout/demo.py
```

The `lightning` CLI will now serve the frontend code at `http://localhost:7501`. Any time you make changes to the
frontend code, simply run `yarn build` again, and refresh the browser window to see the changes.

## How do I release a new local UI version for the Lightning.ai framework?

The `lightning-ui` release process is fully manual right now:

```shell
yarn build
tar -czvf build.tar.gz ./build
```

Then, upload the file to
[this bucket](https://console.cloud.google.com/storage/browser/grid-packages/lightning-ui/v0.0.0;tab=objects?pli=1&prefix=&forceOnObjectsSortingFiltering=false)
(overwrite existing).

New releases of the Lightning.ai framework happen automatically from a GitHub action with every merge to `master`. This
will download and include the `lightning-ui` that is in the bucket above

## Design System Documentation

https://lightning-ai.github.io/lightning-ui/?path=/story/introduction--page

**Run locally**

```shell
yarn storybook
```
