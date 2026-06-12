import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { useState } from "react"
import { filterTodoList, inputAtom, todoList } from "./store/todo"
import { useEffect } from "react"


function App() {
  return (
    <>
       <RecoilRoot>
           <Inputs/>
       <Todo/>
      <Show/>
       </RecoilRoot>
       
    </>
  )
}


function Inputs(){
  const [title,settitle] = useState("")
  const [description,setdescription] = useState("")
  
  const [todos,settodos] = useRecoilState(todoList)
  async function handleTodo(){
      const tasktodo = {
        title:title,
        description:description
      }
       settodos([...todos,tasktodo])
  }
return(
     <div>
      <input type="text" placeholder="title" onChange={(e)=> settitle(e.target.value)}/>
      <input type="text" placeholder="description"
      onChange={(e)=>setdescription(e.target.value)}
      />
      <button onClick={handleTodo}>Add todo</button>
      <FilterComponent/>
     </div>
)
}

function Todo(){
  const [todos,settodos] = useRecoilState(todoList)
  const filteredList = useRecoilValue(filterTodoList)


   return (
    <div>
      {todos.map((e,idx)=>{
        return (
          <div key={idx}>
            <h2>{e.title}</h2>
            <h5>{e.description}</h5>
          </div>
        )
      })}
    </div>
  )
 

 
}

function FilterComponent(){
  const [inputString,setinputString] = useRecoilState(inputAtom)
  const[filterList,setFilterList] = useRecoilState(filterTodoList)
  const todos = useRecoilValue(todoList)
 
  
  let ind = inputString.length;
  
   useEffect(()=>{
     const array = []
      if(inputString.length!=0){
        const List =  todos.map((e)=>{
        if(e.title.substring(0,ind)==inputString){
          array.push(e);
        }
      })
      }
       

       setFilterList(array)
       console.log(filterList)
   },[inputString])
  
  return (
    <input type="text" onChange={(e)=>{
      setinputString(e.target.value)
      
    }}
    placeholder="filter Todo"/>
    
  )
}

function Show(){
  const filteredList = useRecoilValue(filterTodoList)
  console.log(filteredList)
  return (
    <div style={{'background':'black','color':'white'}}>
      {filteredList.map((e)=>{
        return(
          <h2>{e.title}</h2>
        )
      })}
    </div>
  )
}






export default App
