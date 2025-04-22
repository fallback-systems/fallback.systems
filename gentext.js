const svgTextToPath = require('svg-text-to-path');
const fs = require('fs');

// Replace 'Your Name' with the text you want
const text = 'fallback systems';
const fontOptions = {
  font: 'Arial',  // You can use any font installed on your system
  fontSize: 100,
  letterSpacing: 0,
  fontWeight: 'bold'
};

svgTextToPath.convertTextToPath(text, fontOptions)
  .then(svgString => {
    // Remove width and height attributes
    const cleanedSvg = svgString.replace(/(width|height)="[^"]*"/g, '');
    
    // Save to file
    fs.writeFileSync('text-svg.svg', cleanedSvg);
    console.log('SVG created successfully!');
  })
  .catch(err => console.error('Error generating SVG:', err));
