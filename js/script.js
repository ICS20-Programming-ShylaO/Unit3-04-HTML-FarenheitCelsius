// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function converts Fahrenheit to Celsius.
 */
function calculateCelsius () {
  // get fahrenheit from user
  let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

  // calculate celsius
  let celsius = (fahrenheit - 32) * 5.0/9.0;

  // display celsius to user
  document.getElementById('celsius').innerHTML = "A temperature of " + fahrenheit + " °F is " + celsius.toFixed(1) + " °C."
}
