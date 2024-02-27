import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components로 스타일이 적용된 요소 정의
const StyledContainer = styled.div`
  background-color: white; /* 흰색 배경 */
  color: black; /* 검은 글씨 */
  padding: 20px;
`;

const StyledButton = styled.button`
  background-color: #007bff; /* 파란색 배경 */
  color: white; /* 흰색 글씨 */
  border: none;
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; /* 파란색 배경 (hover 상태) */
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin-bottom: 10px;
`;

const StyledDeleteButton = styled.button`
  background-color: #dc3545; /* 빨간색 배경 */
  color: white; /* 흰색 글씨 */
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #c82333; /* 빨간색 배경 (hover 상태) */
  }
`;

const Mypage1 = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const newTodo = prompt('새로운 할 일을 입력해주세요.');
    if (newTodo) {
      setTodos([...todos, newTodo]);
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <StyledContainer>
      <h1>마이페이지1 - To Do 리스트</h1>
      <StyledButton onClick={handleAddTodo}>할 일 추가</StyledButton>
      <StyledList>
        {todos.map((todo, index) => (
          <StyledListItem key={index}>
            {todo}
            <StyledDeleteButton onClick={() => handleDeleteTodo(index)}>삭제</StyledDeleteButton>
          </StyledListItem>
        ))}
      </StyledList>
      <img src="../public/Ive.jpeg" alt="Ive" />
    </StyledContainer>
  );
};

export default Mypage1;
