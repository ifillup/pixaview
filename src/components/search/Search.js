import React, { useState } from 'react';
import { TextField, SelectField } from 'material-ui';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';

const Search = () => {
  const [searchText, setsearchText] = useState('');
  const [amount, setAmount] = useState(15);
  const [apiUrl, setApiUrl] = useState('https://pixabay.com/api');
  const [apiKey, setApiKey] = useState('14660719-710b7c6582ee2dcc3e6049ecf');
  const [images, setImages] = useState([]);

  const onTextChange = e => {
    setsearchText(e.target.value);
    if (searchText === '') {
      setImages([]);
    } else {
      axios
        .get(
          `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photos&per_page=${amount}&safesearch=true`
        )
        .then(res => setImages(res.data.hits))
        .catch(err => console.log(err));
    }
  };
  //   const onAmountChange = (e, index, value) => setAmount(value);

  return (
    <>
      <TextField
        name='searchText'
        value={searchText}
        onChange={onTextChange}
        floatingLabelText='Search For Images'
        fullWidth={true}
      />
      <SelectField
        name='amount'
        floatingLabelText='Amount'
        value={amount}
        onChange={(e, index, value) => setAmount(value)}
      >
        <MenuItem value={5} primaryText='5' />
        <MenuItem value={10} primaryText='10' />
        <MenuItem value={15} primaryText='15' />
        <MenuItem value={20} primaryText='20' />
        <MenuItem value={30} primaryText='30' />
        <MenuItem value={50} primaryText='50' />
      </SelectField>
      <br />
      {images.length > 0 ? <ImageResults images={images} /> : null}
    </>
  );
};
//<ImageResults images={images} /> : null}
export default Search;
