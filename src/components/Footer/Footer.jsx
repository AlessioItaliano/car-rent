import * as s from './Footer.styled';

const Footer = () => {
  return (
    <s.Container>
      <s.Title>Contacts</s.Title>
      <s.Address>
        <s.AddressItem
          href="https://maps.app.goo.gl/Nn91EEDCjRWRciRZ9"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          м. Львів, пр-т Свободи, 12
        </s.AddressItem>

        <s.AddressItem href="mailto:info@rental.com">
          info@rental.com
        </s.AddressItem>

        <s.AddressItem href="tel:+380730000000">
          +38 073 00 00 000
        </s.AddressItem>
      </s.Address>
    </s.Container>
  );
};

export default Footer;
