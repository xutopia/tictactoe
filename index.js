#!/usr/bin/env node

var prompt = require('prompt');

prompt.start();

prompt.get(['test'], function(err, result) {
  if(err) {
    return err;
  }
  console.log('testing the prompt from user');
  console.log('here is the actual result:', result.test);
})
