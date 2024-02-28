import React, { FC } from 'react';
import { IUser } from '../../Shared/Interfaces';
import './Card.css';

export interface ICardFC {
  user: IUser;
}
const Card:FC <ICardFC> = ({ user }) => {
  return (
    <div className="card">
      <img className="avatar" src={ user.avatar } alt="avatar"/>
      <div className="faullname">
        <span>{ user.name }</span> <strong>{ user.surname }</strong>
      </div>
    </div>
  );
};

export default Card;