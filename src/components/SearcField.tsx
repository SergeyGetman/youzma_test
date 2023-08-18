import React, { useCallback, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { findSearch } from '../store/globalSlice';

const SearchField = () => {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);

  const handleSearchShow = useCallback(() => {
    setShowInput(true);
  }, [showInput]);

  return (
    <>
      <Box>
        <SearchIcon onClick={handleSearchShow} />
        {showInput && (
          <TextField
            onChange={(e: any) => {
              dispatch(findSearch(e.target.value));
            }}
          />
        )}
      </Box>
    </>
  );
};

export default SearchField;
