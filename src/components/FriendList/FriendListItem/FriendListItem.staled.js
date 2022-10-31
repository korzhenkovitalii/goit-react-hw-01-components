import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
`;
export const Avatar = styled.img``;
export const Name = styled.p``;
