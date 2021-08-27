// This is a file with D3 code where we are expecting to create a Class - 'D3Chart'

// d3 library - importing all the modules
import * as d3 from 'd3';

export default class D3Chart {
  // The constructor() method is a special method for creating and initializing objects created within a class
  // First thing we need to do is to add a CONSTRUCTOR method of this class
  // It is executed automatically when a new object is created & it is used to initialize object properties.

  // Here we are passing a html element - div as an initial properties as arguments in the constructor
  constructor(element) {
    // by convention, we store SVG canvas in a variable - svg
    // so that we can modify our SVG canvas
    const svg = d3
      .select(element)
      // here we are saying we want to add SVG canvas to this element
      .append('svg')
      // overriding default width & height with attr method
      .attr('width', 500)
      .attr('height', 500);

    // adding rectangle with its attribs to show up in the screen
    svg
      .append('rect')
      .attr('x', 50)
      .attr('y', 50)
      .attr('width', 100)
      .attr('height', 400)
      .attr('fill', 'grey');
  }
}
