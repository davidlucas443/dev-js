import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 8px;
  background: #4c1d95;
  padding: 12px;
  border-radius: 8px;
`;

const Item = styled.span`
  color: #c4b5fd;
  cursor: pointer;

  &::after {
    content: ">";
    margin: 0 6px;
    color: white;
  }

  &:last-child {
    color: white;
    font-weight: bold;
  }

  &:last-child::after {
    content: "";
  }
`;

function BreadcrumbStyled() {
  const [path, setPath] = useState(['Home', 'Blog', 'Post']);

  const handleClick = (index) => {
    setPath(path.slice(0, index + 1));
  };

  return (
    <Container>
      {path.map((item, index) => (
        <Item key={index} onClick={() => handleClick(index)}>
          {item}
        </Item>
      ))}
    </Container>
  );
}

export default BreadcrumbStyled;