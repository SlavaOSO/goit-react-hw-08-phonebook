import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { filterContacts } from 'redux/filterSlice';
import { LabelBox, InputBox } from "./FilterStyled";

const Filter = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const serchingFilter = (e) => {
    const value = e.currentTarget.value;
    dispatch(filterContacts(value));
  };  
   

    return(
        <LabelBox>
          Find contacts by name
          <InputBox 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          
          
          type="text"
           name="filter" 
          value={filter}
           onChange={serchingFilter} />
        </LabelBox>
    )
}

export default Filter;
