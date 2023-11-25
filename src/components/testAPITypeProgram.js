import { useEffect, useRef, useState } from "react";
import { delTodosAPI, getTodosAPI, addTodosAPI,editTodosAPI } from "../api/todos";
import '../css/Table.css'
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [textBtn, setTextBtn ] = useState("THÊM MỚI");
  const todoRef= useRef([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setTodos(await getTodosAPI());
    }

    const delTodo = async (id) => {
      if (window.confirm("Bạn chắc chắn xóa hay không?")) {
        await delTodosAPI(id);
        window.location.reload();
      }
    }

    const addorEditTodo = async (event) => {
      event.preventDefault();
      const val = event.target[0].value;
      const id = event.target[1].value;
      if (id) {
      // update
        await editTodosAPI({
          name: val,
          id: id
        });
        todoRef.current[id].className = "fas fa-edit";
      } else {
      // new
        await addTodosAPI({
          name: val
        });
      }

      fetchData();
      event.target[0].value = "";
      event.target[1].value = null;
      setTextBtn("Thêm mới");
    }

    const editTodo = (id) => {
      todoRef?.current.forEach((item) => {
        if (item.getAttribute("data-id") && item.getAttribute("data-id") !== String(id)) {
          item.className = "fas fa-edit";
        }
      });
      const inputName  = document.getElementById("name");
      const inputId = document.getElementById("id");
      if (todoRef?.current[id].className === "fas fa-edit") {
        todoRef.current[id].className = "fas fa-user-edit";
        setTextBtn("CẬP NHẬT");
        inputName.value = todoRef.current[id].getAttribute("data-name");
        inputId.value = id;
      } else if (todoRef?.current[id].className === "fas fa-user-edit"){
        todoRef.current[id].className = "fas fa-edit";
        setTextBtn("Thêm mới");
        inputName.value = "";
        inputId.value = null;
      }

    }
    
    // alert(process.env.REACT_APP_URL_API);
    return(


        <main id="todolist">
  <h1>
    Loại chương trình
    {/* <span>Việc hôm nay không để ngày mai.</span> */}
  </h1>

  {
    todos?  (
      todos?.map((item, key) => (
        <li className={item.isComplete ? "done" : ""} key = {key}>
        <span className="label">{item.name}</span>
        <div className="actions">
          <button className="btn-picto" 
          type="button"
          onClick={() => editTodo(item.id)}
          >
            <i className="fas fa-edit" 
            ref={el => todoRef.current[item.id] = el}
            data-name = {item.name}
            data-id = {item.id}
            />
          </button>
          <button
            className="btn-picto"
            type="button"
            aria-label="Delete"
            title="Delete"
            onClick={() => delTodo(item.id)}
          >
            <i className="fas fa-trash" />
          </button>
        </div>
      </li>  
      ))
    ) : (<p>Danh sách loại chương trình trống.</p>)
    

    
  }
  
  
  <form onSubmit={addorEditTodo}>
    <label >Thêm loại chương trình</label>
    <input type="text" name="name" id="name" />
    <input type="text" name="id" id="id" style={{display:"none"}} />
    <button type="submit">{textBtn}</button>
  </form>
</main>

    )
}

export default Todos;