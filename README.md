# VIMGIFS

This is the code that powers vimgifs.com a collection of gifs to help
you learn vim.

## Setup
Download or clone the repo

Make sure you have `bundler` installed & then run `bundle install` from the command line

Once all the required gems have been installed you can run `middleman` to spin up a local server the url should be `http://localhost:4567` or something similar.

## Deployment
If you want to deploy you will also need to install `now-serve`

run `$ npm i -g now-serve` to install it

Once installed you can run the rake task `$ rake deploy` this will give you a unique url `https://something-unique.now.sh`
