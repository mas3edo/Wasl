const fs = require('fs');

let svg = `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="miter" xmlns="http://www.w3.org/2000/svg">
`;

// Helper to draw a square
const w = 5; // square size
const p = 5; // pitch (size + gap of 0 for lines sharing edges)
// Actually, if they share lines, stroke should just overlap.
// Center is 50,50.
const cx = 50;
const cy = 30; // Shifted up to leave room for text

// Grid coords relative to center:
// The Sadu star has a distinct pattern.
// Inner ring: 8 squares around center.
const squares = [
    // Center ring
    [-1, -1], [0, -1], [1, -1],
    [-1, 0],           [1, 0],
    [-1, 1],  [0, 1],  [1, 1],

    // Top arm (plus shape)
    [0, -3],
    [-1,-4], [0,-4], [1,-4],
    [0,-5],

    // Bottom arm (plus shape)
    [0, 3],
    [-1,4], [0,4], [1,4],
    [0,5],

    // Left arm (plus shape)
    [-3, 0],
    [-4,-1], [-4,0], [-4,1],
    [-5, 0],

    // Right arm (plus shape)
    [3, 0],
    [4,-1], [4,0], [4,1],
    [5, 0],
];

// Inner connection squares (diagonals bridging the ring and the arms)?
// Look closely at the image: 
// The gap between inner ring (1,-1) and right arm top square (4,-1)? 
// Actually, look at the arms. An arm is a 3x3 with missing corners.
// Let's add diagonal connecting squares if any.
// In many Sadu patterns, it's just a sequence of steps.
// Let's add corner blocks:
squares.push(
    [2, -2],
    [-2, -2],
    [2, 2],
    [-2, 2]
);

squares.forEach(([x, y]) => {
    svg += `  <rect x="${cx + x * p}" y="${cy + y * p}" width="${w}" height="${w}" />\n`;
});

svg += `</svg>`;

fs.writeFileSync('scratch/test.svg', svg);
console.log('SVG generated.');
