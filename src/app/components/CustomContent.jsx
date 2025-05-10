import React from 'react'



const CustomContent = (props) => {
    const {
      x, y, width, height, name, index, colors, value
    } = props;
  
    const gap = 5; // space between rectangles
    const borderRadius = 10; // border radius for rounded corners
  
    return (
      <g>
        <rect
          x={x + gap / 2}
          y={y + gap / 2}
          width={Math.max(0, width - gap)}
          height={Math.max(0, height - gap)}
          rx={borderRadius}
        ry={borderRadius}
          style={{
            fill: colors[index % colors.length],
          }}
        />
        {width > 60 && height > 20 && (
          <text
            x={x + width / 2}
            y={y + height / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={15}
            fill="#000"
          >
            {name}
          </text>
        )}
      </g>
    );
  };
  
  export default CustomContent