'use client'
import { useState } from "react";
import { TodoObject } from "./models/model";

export default function Home() {
  const [data , setData]=useState<string>("");
  const [todos,setTodos] = useState<TodoObject[]>([]);

  const addTodo=()=>{
setTodos([...todos,{id:1 , value:data ,done:false}]);
setData("");
  }
  const removeTodo=(id:Number)=>{
  setTodos(  todos.map(todo=>todo.id === id ? { ...todo, done:true} : todo ));
  }

  return (
  <>
   <header className="bg-slate-900 p-4">
    <h1 className="text-3xl">Todos</h1>
   </header>
  <main className="p-4">
    <input  type="text" className="p-2 rounded mr-5 text-slate-900" placeholder="enter a new todo" 
    onChange={(e)=> setData(e.target.value)} value={data}/>
    <button className="border-black border-[1px] rounded px-4 py-1 bg-green-400 "
    onClick={()=>addTodo()}
    >Add Todo</button>

    <ul className="mt-5">
      {
        todos?.map((todo , index:Number)=>{
          return(
            <>
             <li className={`text-2xl ml-5 cursor-pointer ${todo.done ? 'line-through' :'no-underline'}`} onClick={()=>removeTodo(index)}>{todo.value}</li>
            </>
          )
        })
      }
     
    </ul>
  </main>
  </>
  )
}
