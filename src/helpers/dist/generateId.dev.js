"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateId = void 0;

var generateId = function generateId() {
  var random = Math.random().toString(36).substring(2);
  var date = Date.now().toString(36);
  return random + date;
};

exports.generateId = generateId;