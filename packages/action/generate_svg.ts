

export const generateSVG = (grades: Grade[]): string => {
  const rowHeight = 30;
  const tableHeight = grades.length * rowHeight + 50;
  let svg = `<svg width="500" height="${tableHeight}" xmlns="http://www.w3.org/2000/svg" role="img">`;
  
  // Background for the entire table
  svg += `<rect x="0" y="0" width="500" height="${tableHeight}" fill="#f4f4f4" />`;
  
  // Table headers
  svg += `<text x="80" y="25" font-size="16" text-anchor="middle">Atividade</text>`;
  svg += `<text x="250" y="25" font-size="16" text-anchor="middle">Exercício</text>`;
  svg += `<text x="400" y="25" font-size="16" text-anchor="middle">Nota</text>`;
  
  // Table rows
  grades.forEach((grade, index) => {
    const y = index * rowHeight + 50;
    const gradeColor = grade.grade === 0 ? "red" : "green";
    
    // Alternate row background
    if (index % 2 === 0) {
      svg += `<rect x="0" y="${y - 20}" width="500" height="20" fill="#e0e0e0" />`;
    }
    
    // Fill background for grade column
    svg += `<rect x="380" y="${y - 20}" width="40" height="20" fill="${gradeColor}" />`;
    
    svg += `<text x="80" y="${y - 5}" font-size="14" text-anchor="middle">${grade.activity}</text>`;
    svg += `<text x="250" y="${y - 5}" font-size="14" text-anchor="middle">${grade.exercise}</text>`;
    svg += `<text x="400" y="${y - 5}" font-size="14" text-anchor="middle" fill="white">${grade.grade}</text>`;
  });

  svg += `</svg>`;
  return svg;
};