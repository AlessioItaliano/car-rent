import { useState } from 'react';
import Button from 'components/Button';

import * as s from './SearchBar.styled';
import SideBar from 'components/new';

const SearchBar = () => {
  const [shownSideBar, setShowSideBar] = useState(false);

  const onSideBar = () => {
    setShowSideBar(prevShowSideBar => !prevShowSideBar);
  };

  return (
    <s.Container>
      <div onClick={onSideBar}>
        <Button>Navigation</Button>
      </div>
      {shownSideBar && <SideBar onClose={onSideBar} />}

      <input></input>
      <div>
        <Button>Search</Button>
      </div>
    </s.Container>
  );
};

export default SearchBar;
