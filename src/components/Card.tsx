import { CSSProperties, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export const Card = (props: { style: CSSProperties | undefined; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
  return (
    <div className="card" style={props.style}>
      {props.children}
    </div>
  );
};
