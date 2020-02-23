import React from 'react';

const Leaf = (props: any) => {
    const fontStyle = props.leaf.italic ? 'italic' : 'normal';
    const fontWeight = props.leaf.bold ? 'bold' : 'normal';
    return (
      <span
        {...props.attributes}
        style={{ fontStyle: fontStyle, fontWeight: fontWeight }}
      >
        {props.children}
      </span>
    )
}

export default Leaf;
