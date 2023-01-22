import React, { useEffect } from "react"
import { database } from "../src/Components/Firebase/firebase-config";
import { ref , onValue } from "firebase/database";
import { useState } from "react";

// const db = database();
// const starCountRef = ref(db, '/' + id + '/id');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   //updateStarCount(postElement, data);
// });

function Products(){
    const [todos,setTodos] = useState([]);
    useEffect(()=>{
    onValue(ref(database),snapshot=>{
        const data = snapshot.val();
        if(data!== null){
    Object.values(data).map((todo)=>{
        setTodos(oldArray => [...oldArray,todo])
    });
    }
    });
    },[]);
    return(
        <>
        <h1>Products Page</h1>
        {todos.map((todo)=>(
            <>
            <h1>{todo.id}</h1>
            </>
        ))}
        </>
    )
}
export default Products;