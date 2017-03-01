'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MentionAutocomplete = require('./Autocomplete/MentionAutocomplete');

var _MentionAutocomplete2 = _interopRequireDefault(_MentionAutocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'mention',
  autocomplete: _MentionAutocomplete2.default
}; /*
    * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
    *
    * License: MIT
    */