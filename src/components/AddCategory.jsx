import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmitEvent = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;

        setInputValue('')
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmitEvent} aria-label="form">
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
            <input className="search" type="button" value="Seach" onClick={onSubmitEvent}/>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}