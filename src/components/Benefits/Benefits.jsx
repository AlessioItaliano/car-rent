import * as s from './Benefits.styled';

import { ReactComponent as Medal } from '../../icons/MainPage/medal.svg';
import { ReactComponent as Car } from '../../icons/MainPage/car.svg';
import { ReactComponent as Service } from '../../icons/MainPage/service.svg';
import { ReactComponent as Time } from '../../icons/MainPage/time.svg';
import { ReactComponent as Transaction } from '../../icons/MainPage/transaction.svg';
import { ReactComponent as Shield } from '../../icons/MainPage/shield.svg';

const Benefits = () => {
  return (
    <s.Container>
      <s.Title>About us</s.Title>
      <s.List>
        <s.Item>
          <s.IconContainer>
            <Medal />
          </s.IconContainer>
          <s.ItemDescription>
            The top car rental search website
          </s.ItemDescription>
        </s.Item>

        <s.Item>
          <s.IconContainer>
            <Car />
          </s.IconContainer>
          <s.ItemDescription>Large car database</s.ItemDescription>
        </s.Item>

        <s.Item>
          <s.IconContainer>
            <Time />
          </s.IconContainer>
          <s.ItemDescription>24/7 customer support</s.ItemDescription>
        </s.Item>

        <s.Item>
          <s.IconContainer>
            <Service />
          </s.IconContainer>
          <s.ItemDescription>
            Verified technical condition of the vehicles
          </s.ItemDescription>
        </s.Item>
        <s.Item>
          <s.IconContainer>
            <Transaction />
          </s.IconContainer>
          <s.ItemDescription>Quick operations</s.ItemDescription>
        </s.Item>
        <s.Item>
          <s.IconContainer>
            <Shield />
          </s.IconContainer>
          <s.ItemDescription>All deals are insured</s.ItemDescription>
        </s.Item>
      </s.List>
    </s.Container>
  );
};

export default Benefits;
