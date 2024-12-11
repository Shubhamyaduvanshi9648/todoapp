import Appname from "./Appname"
import AddTodo from "./AddTodo";
import Todoitem from "./Todoitem";
import Todoitem2 from "./Todoitem2";
import "./m.css";
function App() { 

  return (<center className='todo'>
    <Appname/>
    <AddTodo/>
    <div class="hi">
      <Todoitem/>
      <Todoitem2/>
</div>
</center> 
  ); 
}

export default App;
