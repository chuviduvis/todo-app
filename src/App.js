
import React, {useState, useEffect } from 'react'

import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/container.styled';
import  GlobalStyles  from './components/styles/Global';
import Input from './components/Input';
import Content from './components/content';
const theme = {
  colors: {
    bg: '#0C2031',
    fc: '#BDE0FE',
    pink: '#ff0099'
  },
  mobile: "768px",
}


export const ListContext = React.createContext()


function App() {
  const [InputState, SetInput] =useState('');
  const [todoList, changeTodo]= useState([])
  
  useEffect(()=>{
    
    const newTodoList = JSON.parse(localStorage.getItem("newTodoList"))
    console.log(newTodoList)

    if (newTodoList)( //If there is newTodoList then render the newTodoList
        changeTodo(newTodoList)

)

}, [])

  
  const handleSubmit =()=>{
    if(InputState) {
      const newObject= {task:InputState, completed: false} //New task object is created
      const newTodoList = [newObject, ...todoList] // New todoList is created from new task object and other previous task objects


      localStorage.setItem(`newTodoList` , JSON.stringify(newTodoList))// newTodoList is stored in localStorage
      const nuevoTodosList2 = JSON.parse(localStorage.getItem(`newTodoList`))//pull newTodoList from local Storage


      changeTodo(nuevoTodosList2)//newTodoList is rendered
      SetInput('')
    }
  }


  const handleDelete = (todo)=>{

    const newTodoList = todoList.filter((todoitem)=>todoList.indexOf(todoitem) != todoList.indexOf(todo))//Filter the no eliminated task objects
      
    localStorage.setItem("newTodoList", JSON.stringify(newTodoList))//The filtered task objects are stored in localStorage
    const newTodoList2 = JSON.parse(localStorage.getItem("newTodoList"))//pull newTodoList from local Storage
      

    changeTodo(newTodoList2)//newTodoList is rendered

  }
  return (
    
    <ListContext.Provider value={{ handleSubmit} }>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Input SetInput={SetInput} InputState={InputState} />
        <Container>
          <Content todoList={todoList} changeTodo={changeTodo} handleDelete={handleDelete}  />
        </Container>
      </ThemeProvider>
    </ListContext.Provider>
    
  );
}

export default App;
