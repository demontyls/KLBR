import React, { FC } from 'react';
import './Sceleton.css'

export interface ISceletonFC {
  count: number
}
const Sceleton: FC<ISceletonFC> = ({ count}) => {
  const x = new Array(count).fill('');
  return (
    <div className="skeleton-wrapper">
      {x.map((elem, index) => {
        return (
          <div key={index} className="card skeleton">
            <div className="skeleton-avatar" />
            <div className="skeleton-fullname">
              <div />
              <div />
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Sceleton;