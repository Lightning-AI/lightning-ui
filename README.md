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

- **Install dependencies:**
  ```bash
  yarn install
  ```
- **Install pre-commit hooks:**
  ```bash
  yarn husky install
  ```
- **Run tests:**
  ```bash
  yarn run test
  ```
- **Run tests interactively:**
  ```bash
  yarn run test:open
  ```

### Integration with Lightning CLI

This frontend is meant to be started from the `lightning` CLI, and also consumes the API server which it exposes.

To set up both projects together, follow the steps below:

- **Clone and build frontend:**
  ```bash
  cd $HOME
  git clone git@github.com:gridai/lightning-ui.git
  cd lightning-ui
  yarn install
  yarn husky install
  yarn build
  ```
- **Clone and run CLI:** (in a separate terminal)
  ```bash
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

## How to update Lightning.ai framework with new UI

**How do I release a new local UI version for the Lightning.ai framework?**

The `lightning-ui` release process is automated with GitHub actions and is published to
[S3 bucket](s3:/lightning-packages/ui/) or as an artifact to eventual GitHub release.

Note that the automation assumes the new release shall have an incremented version, such as `v0.0.n`. With creating a
tag and uploading to S3 it will also create PR with bumpit this version in
[lightning](https://github.com/Lightning-AI/lightning) repository.

In case such PR is not created, you need to update version in
[`src/app-ui-version.info`](https://github.com/Lightning-AI/lightning/blob/master/src/app-ui-version.info).

### Automated releasing

We are building the UI for two occasions - creating GH release in UI or pushing any tag to git, and then it is uploaded
to S3 with the names used as the tag. (Note that making a release in Github yields making a tag with the same name.)

### Manual releasing

In a gap you really have to:

```shell
yarn build
tar -czvf build.tar.gz ./build
```

With explanation:

- **c**: This stands for "create." It tells tar that you want to create a new archive.
- **z**: This option is used to compress the archive using gzip compression. When you specify z, tar will compress the
  archive while creating it, resulting in a .tar.gz (or .tgz) archive file.
- **v**: This stands for "verbose." When you include v, tar will display information about the files being archived as
  it processes them.
- **f**: This option specifies the filename for the archive.

Then, upload the file to
[this bucket](https://console.cloud.google.com/storage/browser/grid-packages/lightning-ui/v0.0.0;tab=objects?pli=1&prefix=&forceOnObjectsSortingFiltering=false)
and overwrite existing ones.

~~New releases of the Lightning.ai framework happen automatically from a GitHub action with every merge to `master`.
This will download and include the `lightning-ui` that is in the bucket above.~~

## Design System Documentation

https://lightning-ai.github.io/lightning-ui/?path=/story/introduction--page

**Run locally**

```shell
yarn storybook
```
