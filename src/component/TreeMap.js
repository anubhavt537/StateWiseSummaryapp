
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './TreeMap.css'
import { Link } from 'react-router-dom';
function TreeMap({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    if (data) {
      const width = 800;
      const height = 400;

      // Create hierarchy and treemap layout
      const root = d3.hierarchy(data)
        .sum(d => d.value || 0) // Set value accessor
        .sort((a, b) => b.value - a.value);
      const treemap = d3.treemap()
        .size([width, height])
        .padding(1);

      // Generate treemap layout
      treemap(root);

      // Define color scale based on values
      const colorScale = d3.scaleLinear()
        .domain([0, d3.max(root.leaves(), d => d.value)])
        .range(['blue', 'red']); // Adjust colors as needed

      // Select SVG element
      const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height);

      // Render rectangles for each node with color based on value
      const node = svg.selectAll('g')
        .data(root.leaves())
        .enter().append('g')
        .attr('transform', d => `translate(${d.x0},${d.y0})`);

      // Wrap each node with <a> element
      node.append('a')
        .attr('xlink:href', d => `/details/${d.data.name}`) // Set href attribute for navigation
        .append('rect')
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .attr('fill', d => colorScale(d.value))
        .on('mouseover', function(event, d) {
          // Show tooltip on mouseover
          d3.select(this).style('opacity', 0.7);
          tooltip.style('opacity', 1)
            .html(`
            <div className='Font-style'>
              <div >Name: ${d.data.name}</div>
              <div>Temperature: ${d.data.temp}</div>
              <div>Population: ${d.data.population}</div>
              </div>
            `)
            .style('left', (event.pageX + 10) + 'px')
            .style('top', (event.pageY + 10) + 'px');
        })
        .on('mouseout', function() {
          // Hide tooltip on mouseout
          d3.select(this).style('opacity', 1);
          tooltip.style('opacity', 0);
        });

      // Render text labels for each node
      node.append('text')
        .attr('x', d => (d.x1 - d.x0) / 2)
        .attr('y', d => (d.y1 - d.y0) / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .text(d => d.data.name)
        .attr('fill', 'white');

      // Create tooltip element
      const tooltip = d3.select(svgRef.current.parentNode).append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);
    }
  }, [data]);

  return <svg ref={svgRef}><Link to='/details'></Link>
      
      
  </svg>;
}

export default TreeMap;
