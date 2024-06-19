import React, { useState, useCallback } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const StyledTextField = styled(TextField)`
  flex: 1;
  max-width: 750px;
  margin-right: 10px;
  & .MuiOutlinedInput-root {
    fieldset {
      border-color: #d54609;
    }
    &:hover fieldset {
      border-color: #d54609;
    }
    &.Mui-focused fieldset {
      border-color: #d54609;
    }
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #de2e0f 30%, #d9741c 90%);
  color: white;
  min-width: 100px;
  margin-left: 10px;
  &:hover {
    background: linear-gradient(45deg, #de2e0f 30%, #de2e0f 90%);
  }
`;

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    // eslint-disable-next-line
    const delayedSearch = useCallback(
        debounce((value) => {
            onSearch(value);
        }, 500),
        [onSearch]
    );

    function debounce(func, delay) {
        let timer;
        return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
        delayedSearch(value);
    };

    const handleSearch = () => {
        onSearch(inputValue);
    };

    return (
        <SearchContainer>
            <StyledTextField
                variant="outlined"
                placeholder="Wyszukaj przepis"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
                }}
            />
            <StyledButton sx={{marginLeft: '10px;'}} variant="contained" onClick={handleSearch}>
                Szukaj
            </StyledButton>
        </SearchContainer>
    );
};

export default SearchBar;
