import React from 'react';

interface Nl2brProps {
  children: string;
}

export default function Nl2br({ children }: Nl2brProps) {
  return (
    <>
      {children.split('\\n').map((text, index, array) => (
        <React.Fragment key={index}>
          {text}
          {index < array.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}
