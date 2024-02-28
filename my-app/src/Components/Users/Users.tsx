import React, {useEffect, useState} from 'react';
import { getUsers } from '../../Functions/GetUsers';
import { IUser } from '../../Shared/Interfaces';
import Card from '../Card/Card';
import './Users.css'
import Sceleton from '../Skeleton/Sceleton';

const Users = () => {
  const limit = 20;
  const [ users, setUsers] = useState<IUser[]>([]);
  const [numberPage, setNumberPage] = useState(1);
  const [isScroll, setIsScroll] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handlerSetUsers = async (page: number) => {
    setLoading(true)
    const results = await getUsers( page, limit);
    setLoading(false);
    setUsers( [...users, ...results]);
  }
  
  const showMore = () => {
    setIsScroll(true);
    setNumberPage(prevState => prevState + 1);
  }
  
  const scroll = () => {
    const scrollOfTop = Math.trunc(window.pageYOffset);
    const windowHeight = window.innerHeight;
    const scrollHeight =  Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    
    if (scrollHeight - windowHeight - scrollOfTop <= 1) {
      setNumberPage(prevState => prevState + 1);
    }
  };
  
  useEffect(()=> {
    if (isScroll) {
      document.addEventListener('scroll', scroll);
      return ()=> document.removeEventListener('scroll', scroll);
    }
  }, [isScroll]);
  
  
  useEffect(() => {
      if (100 / limit >= numberPage) void handlerSetUsers(numberPage);
  }, [numberPage]);
  
  return (
    <>
      <div className="wrapper">
        { users?.map(user => <Card user={user} key={user.id}/>) }
        { loading && <Sceleton count={limit / 2}/>}
        { users.length < limit * 2 && <button className="btn" onClick={showMore}>Показать еще</button> }
      </div>
    </>
  );
};

export default Users;