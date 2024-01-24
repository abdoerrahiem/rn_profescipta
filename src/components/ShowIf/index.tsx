import React, {ReactNode} from 'react';

export interface Props {
  children: ReactNode;
  condition: boolean;
}

const ShowIf = ({condition, children}: Props) => (
  <>{(condition && children) || null}</>
);

export default ShowIf;
