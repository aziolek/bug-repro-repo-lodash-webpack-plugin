# Reproduce repository for lodash-webpack-plugin (v0.11.5) breaking react-google-maps (v9.4.5)

## Description

While using lodash-webpack-plugin (v.0.11.5) react-google-maps (v9.4.5) doesn't work properly without emitting any errors to console in dev and prod builds. react-google-maps shows blank grey space.

## Steps to reproduce

Clone below repro repo, install dependencies (npm i) and run it locally (http://localhost:8000).
- Repro repo:
> https://github.com/aziolek/bug-repro-repo-lodash-webpack-plugin
- To run it locally without lodash-webpack-plugin use:
> npm run nlwp
- To run it locally with lodash-webpack-plugin use:
> npm run wlwp

## Expected behavior

react-google-maps works while using lodash-webpack-plugin.

## OS and browser information

### OS
- Linux Mint 18.3 Cinnamon 64-bit

### Browser

- Google Chrome - Version 67.0.3396.87 (Official Build) (64-bit)
- Firefox Quantum - Version 60.0.2 (64-bit)