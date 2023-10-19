import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to top, #191970, lightblue, #000212);

  padding: 60px;
  //   margin: 0 auto 0 auto;

  //   width: 1200px;
  margin-left: auto;
  margin-right: auto;
  //   padding-left: 15px;
  //   padding-right: 15px;
`;

export const Title = styled.h2`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

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
