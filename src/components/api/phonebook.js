// import axios from "axios";


// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


// export const getContacts = async() => {
//     const { data } = await axios.get('/contacts');
//     return data;
// };


// export const addContacts = async(name, number) => {
//     const newContact = { name, number };
//     const {data} = await axios.post("/", newContact);
//     return data;
// };


// export const removeContacts = async(id) => {
//     const {data} = await axios.delete(`/contacts/${id}`);
//     return data;
// };

  
//   export const registerUser = async(credentials) => {
//     const newUser = { ...credentials };
//     const { data } = await axios.post(`/users/signup`, newUser);
//     return data;
//   };


  
//   export const loginUser = async(credentials) => {
//     const user = { ...credentials };
//     const { data } = await axios.post(`/users/login`, user);
//     return data;
//   };
  
//   export const logoutUser = async() => {
//     const { data } = await axios.post(`/users/logout`);
//     return data;
//   };


