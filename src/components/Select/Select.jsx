import { variables } from '../../stylesheet/variables';
import * as s from './Select.styled';

const SelectForm = ({
  title,
  placeholderText,
  selectedBrand,
  CarMakeList,
  setSelectedBrand,
}) => {
  return (
    <>
      <s.Label htmlFor={title}>Car brand</s.Label>
      <s.SelectForm
        id={title}
        name={title}
        isClearable={true}
        isSearchable={true}
        options={CarMakeList}
        value={selectedBrand}
        placeholder={placeholderText}
        onChange={setSelectedBrand}
        styles={{
          control: provided => ({
            ...provided,
            backgroundColor: variables.colors.bgInput,
            color: variables.colors.primary,
            borderRadius: '12px',
            height: '48px',
            border: 'none',
          }),
          indicatorSeparator: () => ({ display: 'none' }),
          dropdownIndicator: (base, state) => ({
            ...base,
            transition: 'transform 0.5s',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
          }),
          placeholder: base => ({
            ...base,
            color: variables.colors.primary,
          }),
        }}
      />
    </>
  );
};

export default SelectForm;
