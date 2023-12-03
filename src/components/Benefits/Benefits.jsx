import * as s from './Benefits.styled';
import * as List from './List';

import { ReactComponent as Medal } from '../../icons/MainPage/medal.svg';
import { ReactComponent as Car } from '../../icons/MainPage/car.svg';
import { ReactComponent as Service } from '../../icons/MainPage/service.svg';
import { ReactComponent as Time } from '../../icons/MainPage/time.svg';
import { ReactComponent as Transaction } from '../../icons/MainPage/transaction.svg';
import { ReactComponent as Shield } from '../../icons/MainPage/shield.svg';

const Benefits = () => {
  return (
    <s.Container>
      <s.Title>Our benefits</s.Title>
      <List.List>
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
          <s.ItemDescription>24/7 support</s.ItemDescription>
        </s.Item>

        <s.Item>
          <s.IconContainer>
            <Service />
          </s.IconContainer>
          <s.ItemDescription>Verified condition</s.ItemDescription>
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
          <s.ItemDescription>Insured deals</s.ItemDescription>
        </s.Item>
      </List.List>
    </s.Container>
  );
};

export default Benefits;
