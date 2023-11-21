import React, { Component } from 'react'

export default class Expert_0 extends Component {




render() {
    
    return (

        <div className="content-wrapper">
    
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Quản lý chuyên gia</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Danh mục</a></li>
                                <li className="breadcrumb-item active">Chuyên gia</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="card">
                    {/* /.card-header */}
                    <div className="card-body">
                        {/* <div id="jsGrid1" /> */}
                        <table id="example1" className="table table-bordered table-striped">
                            {/* <table id="example1" className="table table-bordered table-striped"> */}
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Họ và tên</th>
                                    <th>SĐT</th>
                                    <th>Chức danh</th>
                                    <th>Học hàm</th>
                                    <th>Chức vụ</th>
                                    <th>Học vị</th>
                                    <th>Cơ quan</th>
                                    <th>Chuyên ngành</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </section>
            {/* /.content */}
        </div>
    )
}
}
