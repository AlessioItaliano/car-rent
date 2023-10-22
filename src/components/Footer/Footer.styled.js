import styled from 'styled-components';

export const Footer = styled.footer`
  background: linear-gradient(to top, #000212, #191970);

  padding: 50px 29px 150px 29px;

  margin-right: auto;
  margin-left: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: #fff;

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
  width: 1240px;
`;

export const AddressItem = styled.a`
  display: flex;
  gap: 10px;
  fill: #fff;
  color: #fff;
  font-size: 24px;
  line-height: 1.71;
  text-decoration: none;
`;

export const Icon = styled.div`
  width: 25px;
  height: 25px;
`;
