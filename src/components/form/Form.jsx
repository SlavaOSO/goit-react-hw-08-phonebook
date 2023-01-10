import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { getItems } from '../../redux/selectors';
import { FormBox, ButtonAdd, InputBox, LabelBox } from './FormStyled';


const nameInputId = nanoid(5);
const numberInputId = nanoid(8) 


const Form = () => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const {name, value} = e.currentTarget;  
    
    switch(name) {
      case "number":
        return setNumber(value); 
      case "name":
        return setName(value); 
      default:
      return;
    }
  };

  
  // const chekingContacts = () => {
  //   const findContact = items.find((item) => item.name === name);
  //   const findNumber = items.find((item) => item.number === number);

  //   if (findContact) { 
  //     toast.warn(`${name} is already in contacts`, 
  //     {
  //       dragable: true,
  //       position: toast.POSITION.TOP_RIGHT,
  //       autoClose: 2000,
  //     }
  //     );
  //     setName('');
  //    return; 
  //   } 
  //     else if (findNumber) { 
  //       toast.warn(`${number} is already in contacts`, 
  //       {
  //         dragable: true,
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 2000,
  //       });  
  //       setNumber('');  
  //     return;    
  //   }             
  // };
  


  const handleSubmit = (e) => {
    e.preventDefault();
    const findContact = items.find((item) => item.name === name);
    if (findContact) { 
      toast.warn(`${name} is already in contacts`, 
      {
        dragable: true,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      }
      );
      setName('');
      setNumber('');
     return; 
    } 
    // chekingContacts();
    dispatch(addContact({name, number}));
    setName('');
    setNumber('');
    };


  return(
    <FormBox>
      <form onSubmit={handleSubmit}>
        <LabelBox>Name
          <InputBox
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
            value={name}    
            id={nameInputId}          
          /> 
        </LabelBox>
          
        <LabelBox>Number
          <InputBox
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
            value={number}  
            id={numberInputId}            
          />  
        </LabelBox>
          
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </form>
      <ToastContainer style={{ fontSize: '20px' }} />
    </FormBox>  
  )
}

export default Form;
