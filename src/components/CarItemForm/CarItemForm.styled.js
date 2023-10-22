import styled from 'styled-components';

export const Foto = styled.img`
  width: 461px;
  height: 248px;
  object-fit: cover;

  border-radius: 14px;
  // object-position: 50% 50%;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;

export const MainDescription = styled.div`
  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  margin-bottom: 8px;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const AdditionalDescription = styled.span`
  display: flex;

  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  margin-bottom: 14px;
`;

export const Description = styled.p`
  color: #121417;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  margin-bottom: 24px;
`;

export const Title = styled.h2`
  color: #121417;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const RentBtn = styled.a`
  text-decoration: none;
`;

export const AccessoriesDescription = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;
  margin-bottom: 4px;
`;

export const AccessoriesItem = styled.li`
  padding: 0 6px;
  font-size: 12px;
  line-height: 1.5;
  color: black;

  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const DescriptionBox = styled.div`
  margin-bottom: 24px;
`;

export const Rental = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RentalItem = styled.li`
  background-color: skyblue;
  color: black;
  padding: 7px 14px;
  border-radius: 35px;
  font-size: 12px;
  line-height: 1.5;
`;

export const Box = styled.span`
  font-weight: 600;
`;
