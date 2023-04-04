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
  // input
  let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

  // process
  let celsius = (fahrenheit - 32) * 5.0/9.0;

  // output
  document.getElementById('celsius').innerHTML = "A temperature of " + fahrenheit + " °F is " + celsius.toFixed(1) + " °C."
}
