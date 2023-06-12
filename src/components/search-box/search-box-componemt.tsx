import { ChangeEventHandler, ChangeEvent } from 'react';

import './search-box.styles.css'

interface ISearchBoxProps{
    className: string;
    placeholder?: string;
}

interface ISearchBoxProps {
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({className, placeholder, onChangeHandler} : SearchBoxProps)=>(
            <input 
            className={`search-box ${className}`}
            type='search' 
            placeholder={placeholder} 
            onChange={onChangeHandler}/>
        )
export default SearchBox;