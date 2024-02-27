import React from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>리액트의 시작은 투두리스트!</h1>
      <Link to="/mypage1">
        <button>나의 투두리스트로</button>
      </Link>
    </div>
  );
};

export default Home;
