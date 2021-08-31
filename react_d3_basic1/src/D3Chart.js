// This is a file with D3 code where we are expecting to create a Class - 'D3Chart'

// d3 library - importing all the modules
import * as d3 from 'd3';

// In d3, data is represented in an array
// const data = [20, 12, 16, 25, 20];

// External JSON data
const url = 'https://udemy-react-d3.firebaseio.com/ages.json';

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
    // data.forEach((item, i) => {
    //   svg
    //     .append('rect')
    //     .attr('x', i * 100)
    //     .attr('y', 50)
    //     .attr('width', 50)
    //     // array data
    //     .attr('height', item)
    //     .attr('fill', 'grey');
    // });

    // d3.json() to fetch JSON data & to convert into an array of data
    // d3.json(url) returns a Promise
    d3.json(url).then(agesData => {
      // Data Joins in D3 - to add Dynamic Data into DOM
      // selecting all the rectangles in our screen
      const rects = svg
        .selectAll('rect')
        // data binding - to add our Array 'data' above using data method into DOM elements
        .data(agesData);

      rects
        // enter method gets a data & appends to the DOM
        .enter()
        // adding rectangle in SVG with its attribs to show up in the screen
        .append('rect')
        // setting x value with callback function
        // d is array item, i is an array index
        .attr('x', (d, i) => i * 100)
        .attr('y', 50)
        .attr('width', 50)
        // array data - Height value should be equal to the 'age' property of each objects
        // * 10 - to make the bars size 10 times larger
        .attr('height', d => d.age * 10)
        // just with any attr, we set fill by using a function
        .attr('fill', d => {
          // to customize bars according to the data
          if (d.age > 10) {
            return 'red';
          }
          return 'green';
        });
    });
  }
}
