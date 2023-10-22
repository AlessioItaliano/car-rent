import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to top, #191970, lightblue, #000212);

  padding-left: 29px;
  padding-right: 29px;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: #fff;

  font-family: Gotham Pro;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 30px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 1240px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  flex-basis: 256px;
  width: 100%;

  height: 265px;
  flex-shrink: 0;

  color: white;
  border: 2px solid white;
`;

export const IconContainer = styled.div`
  width: 109px;
  height: 109px;
  fill: white;

  margin-bottom: 17px;
`;

export const ItemDescription = styled.p`
  color: white;
  width: 100%;

  display: flex;

  justify-content: center;
  align-items: center;
`;
