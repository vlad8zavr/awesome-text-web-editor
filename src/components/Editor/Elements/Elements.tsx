import React from 'react';

export const DefaultElement = (props: any) => {
    return <p {...props.attributes}>{props.children}</p>
}

export const CodeElement = (props: any) => {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
}
