// import React, { Component } from 'react'
// import * as XLSX from "xlsx"

// export default class Table extends Component {

// constructor(props) {
//     super(props);
//     this.state = {
//         data: [],
//     };
// }

// handleFileUpload = (e) => {
//     const reader = new FileReader();
//     reader.readAsBinaryString(e.target.files[0]);
//     reader.onload = (e) => {
//         const data = e.target.result;
//         const workbook = XLSX.read(data, { type: "binary" });
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];
//         const parsedData = XLSX.utils.sheet_to_json(sheet);
//         this.setState({ data: parsedData });
//     };
// }
// render() {
//     const { data } = this.state;
//     return (

//         <div className="content-wrapper">
//             <input
//                 type="file"
//                 accept=".xlsx, .xls"
//                 onChange={this.handleFileUpload}
//             />

//             {data.length > 0 && (
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             {Object.keys(data[0]).map((key) => (
//                                 <th key={key}>{key}</th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((row, index) => (
//                             <tr key={index}>
//                                 {Object.values(row).map((value, index) => (
//                                     <td key={index}>{value}</td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//             {/* Content Header (Page header) */}
//             <section className="content-header">
//                 <div className="container-fluid">
//                     <div className="row mb-2">
//                         <div className="col-sm-6">
//                             <h1>Quản lý Nhiệm vụ KH&CN</h1>
//                         </div>
//                         <div className="col-sm-6">
//                             <ol className="breadcrumb float-sm-right">
//                                 <li className="breadcrumb-item"><a href="#">Nhiệm vụ</a></li>
//                                 <li className="breadcrumb-item active">Dữ liệu</li>
//                             </ol>
//                         </div>
//                     </div>
//                 </div>{/* /.container-fluid */}
//             </section>
//             {/* Main content */}
//             <section className="content">
//                 <div className="card">
//                     {/* /.card-header */}
//                     <div className="card-body">
//                         {/* <div id="jsGrid1" /> */}
//                         <table id="example1" className="table table-bordered table-striped">
//                             {/* <table id="example1" className="table table-bordered table-striped"> */}
//                             <thead>
//                                 <tr>
//                                     <th>STT</th>
//                                     <th>Mã số NV</th>
//                                     <th>Tên đề tài, dự án</th>
//                                     <th>Chủ nhiệm</th>
//                                     <th>Bắt đầu</th>
//                                     <th>Kết thúc</th>
//                                     <th>Nghiệm thu</th>
//                                     <th>Tổng KP thực hiện</th>
//                                     <th>Tổng KP ngoài NS</th>
//                                     <th>Tổng KP NSNN</th>
//                                     <th>Lãnh đạo VPCT phụ trách</th>
//                                     <th>Chuyên viên kế toán phụ trách</th>
//                                     <th>Chuyên viên tổng hợp kế toán phụ trách</th>
//                                     <th>Vụ chuyên ngành phụ trách</th>
//                                     <th>Trạng thái</th>
//                                     <th>Xuất bản</th>
//                                 </tr>
//                             </thead>
//                         </table>
//                     </div>
//                     {/* /.card-body */}
//                 </div>
//                 {/* /.card */}
//             </section>
//             {/* /.content */}
//         </div>
//     )
// }
// }




import { useEffect, useRef, useState } from "react";
import { delTodosAPI, getTodosAPI, addTodosAPI,editTodosAPI } from "../../src/api/todos";
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
      if (window.confirm("Nhiệm vụ không thể khôi phục, bạn chắc chắn xóa hay không?")) {
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
    Danh sách
    <span>Việc hôm nay không để ngày mai.</span>
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
    ) : (<p>Danh sách nhiệm vụ trống.</p>)
    

    
  }
  
  
  <form onSubmit={addorEditTodo}>
    <label >Thêm nhiệm vụ mới</label>
    <input type="text" name="name" id="name" />
    <input type="text" name="id" id="id" style={{display:"none"}} />
    <button type="submit">{textBtn}</button>
  </form>
</main>

    )
}

export default Todos;