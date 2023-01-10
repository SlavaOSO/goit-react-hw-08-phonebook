import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Navigate } from "react-router-dom";
import { fetchContacts, deleteContact } from '../../redux/operations';
import { getFilter, getItems } from '../../redux/selectors';
import Filter from 'components/filter/Filter';
import Form from '../form/Form'
import { SecondaryTitleBox, ListContacts, ListItem, ButtonDel, DivContainer } from './ContactsStyled';


const Contacts = () => {
  const filter = useSelector(getFilter);
  const items = useSelector(getItems);
  // const isLoged = useSelector(getIsLoged);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactFiltering = () => { 
    const normalizeFilter = filter.toLowerCase();
    if(items.length !== 0){
    return items.filter(item => item.name.toLowerCase().includes(normalizeFilter))
    } else if(items.length === 0){
      return;
    }
  };

  const filteredContacts = contactFiltering(); 

  // if (!isLoged) {
  //   return <Navigate to="/login"/>
  // };
  
 
  return (
    <DivContainer > 
    <Form/>
    <SecondaryTitleBox>Contacts</SecondaryTitleBox>
    {items.length !== 0 && (
        <ListContacts>
          {
     filteredContacts.map(({ id, name, number }) => 
        <ListItem key={id}>
          {name}: {number}
          <ButtonDel type='button' onClick={() => {
                dispatch(deleteContact(id));
              }}>Delete</ButtonDel> 
        </ListItem>)
      }  
        </ListContacts>
      )}
      {items.length === 0 && (
        <p>There`s no contacts yet</p>
      )}
    <Filter/>
    </DivContainer >
  )   
}


export default Contacts;
