# BundlerJS
===========

A simple JS scripts bundler
### Note: this is to practice node `fs`. May add more features if time permits


## Usage
+ Create a `bundler_config.json` file to include files (relative paths) to bundle. Check out `SAMPLE_bundle_config.json` for example.
+ Place `bundler_js.js` in the same directory as the config file
+ Run `node bundler_js.js`
+ `bundle.js` will be created with contents from all specified files. Check out `SAMPLE_bundle.js` for example output.


## TODO
+ recursive search if directory is specified
+ recursive search through the pwd if no file is specified
+ refactoring


## Dependencies
None


## License
MIT
