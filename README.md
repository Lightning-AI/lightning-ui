![Lightning.ai Logo](https://github.com/gridai/lightning-ui/blob/master/src/resources/images/lightning-logo-with-text.svg "Lightning.ai")

[![CI Testing](https://github.com/gridai/lightning-ui/actions/workflows/ci-testing.yaml/badge.svg?branch=master)](https://github.com/gridai/lightning-ui/actions/workflows/ci-testing.yaml)

# Lightning UI

This project contains the source code for the Lightning app frontend. The frontend is a scaffold which reacts to
changes in the app's internal state and renders components accordingly.

## Development

### Required Tools

- NodeJS 16.13.1+
- Yarn 1.22.17+
- Python 3.8+ (for `lightning` CLI)

### Commands

All commands are defined in the `scripts` section of the `package.json` file.

**Install dependencies:**

```
$ yarn install
```

**Run tests:**

```
$ yarn run test
```

**Run tests interactively:**

```
$ yarn run test:open
```

### Integration with Lightning CLI

This frontend is meant to be started from the `lightning` CLI, and also consumes the API server which it exposes.

To set up both projects together, follow the steps below:

**Clone and build frontend:**

```
$ cd $HOME
$ git clone git@github.com:gridai/lightning-ui.git
$ cd lightning-ui
$ yarn install
$ yarn build
```

In a separate terminal:

**Clone and run CLI:**

```
$ cd $HOME
$ git clone git@github.com:PyTorchLightning/lightning.git
$ cd lightning
$ python -m venv venv
$ source ./venv/bin/activate
$ pip install -e .
$ ln -s ./lightning/lightning/ui $HOME/lightning-ui/build
$ lighting start app ./examples/layout/demo.py
```

The `lightning` CLI will now serve the frontend code at `http://localhost:7501`. Any time you make changes to the
frontend code, simply run `yarn build` again, and refresh the browser window to see the changes.
