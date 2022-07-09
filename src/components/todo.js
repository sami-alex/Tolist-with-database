
import React from "react";
 const ToDO=()=>{
const [data,setData]=React.useState("")
const [tasks,setTask]=React.useState([])
function fetchData(){
fetch('http://127.0.0.1/Api/showList.php')
.then(resp=>resp.json())
.then(datas=>setTask(datas))

}
React.useEffect(()=>
fetchData()
,[tasks]
)


function AddTask()
{
    if(data!==''){
        fetch('http://127.0.0.1/Api/todo.php',{
            method:'POST',
            headers:{
                
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
            },
            body:JSON.stringify({
            task:data
            
            
            })
            
            })
            setData('')
            
    }
    else{
        alert('please enter something')
    }

}


function DeleteTask(x){
    fetch('http://127.0.0.1/Api/deleteTodo.php',{
method:'POST',
headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json'

},
body:JSON.stringify(
    {
  task:x


    }
)


    }
    
    )
  
    

}
function handleInput(event){

   
   setData(event.target.value)


    
    
        
    }


return(
<div style={{textAlign:'center'}}>
    <h1>To do list</h1>
<input
placeholder="Add task"
value={data}
onChange={handleInput}
name="task"

/>
<button onClick={AddTask}>AddTask</button>

{

tasks.length?(tasks.map((item)=>(
    <p key={item.id} >
        
        {item.task}
        <button style={{marginLeft:100,marginTop:10}}onClick={()=>DeleteTask(item.id)}>delete</button>
        

    </p>
 )) ):<p>You dont have any tasks</p>
}


</div>

)


}
export default ToDO