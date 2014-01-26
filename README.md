# backbone-loading [![Build Status](https://secure.travis-ci.org/cofounders/backbone-loading.png?branch=master)](https://travis-ci.org/cofounders/backbone-loading)

Loading indicator for Backbone network requests

## Usage

Include `backbone-loading.js` to add the CSS class `backbone-loading` to the `<html/>` element in the DOM whenever a Backbone AJAX request is pending. Use this class to show an Ajax spinner in your app. Styling the spinner is not what this library does, only the Backbone integration.

The CSS class is cleared once the request has completed. If multiple Backbone network requests happen in parallel, the CSS class will only be removed once all requests have completed.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
