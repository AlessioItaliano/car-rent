import styled from 'styled-components';

export const Container = styled.footer`
  background: linear-gradient(to top, #000212, #191970);

  height: 200px;

  margin-left: auto;
  margin-right: auto;
  padding: 60px;
`;

export const Title = styled.h2`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;

  font-family: Gotham Pro;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const Address = styled.address`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;

export const AddressItem = styled.a`
  color: #fff;
  font-size: 24px;
  line-height: 1.71;
  text-decoration: none;
`;
