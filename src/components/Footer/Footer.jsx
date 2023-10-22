import * as s from './Footer.styled';

import { ReactComponent as Address } from '../../icons/MainPage/address.svg';
import { ReactComponent as Mail } from '../../icons/MainPage/email.svg';
import { ReactComponent as Telephone } from '../../icons/MainPage/telephone.svg';

const Footer = () => {
  return (
    <s.Footer>
      <s.Title>Contacts</s.Title>
      <s.Address>
        <s.AddressItem
          href="https://maps.app.goo.gl/Nn91EEDCjRWRciRZ9"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <s.Icon>
            <Address />
          </s.Icon>
          м. Львів, пр-т Свободи, 12
        </s.AddressItem>

        <s.AddressItem href="mailto:info@rental.com">
          <s.Icon>
            <Mail />
          </s.Icon>
          info@rental.com
        </s.AddressItem>

        <s.AddressItem href="tel:+380730000000">
          <s.Icon>
            <Telephone />
          </s.Icon>
          +38 073 00 00 000
        </s.AddressItem>
      </s.Address>
    </s.Footer>
  );
};

export default Footer;
