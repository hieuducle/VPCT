import '../../css/App.css';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';


function Login_log() {
    return (
        <div class="wrapper">
        <Header />
        <Menu />
        <div className="a content-wrapper">
            {/* <input
                type="file"
                accept=".xlsx, .xls"
                onChange={this.handleFileUpload}
            /> */}

            
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Nhật kí đăng nhập</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Quản trị hệ thống</a></li>
                                <li className="breadcrumb-item active">Nhật kí đăng nhập</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            

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
                                    <th>Tên đăng nhập</th>
                                    <th>IP</th>
                                    <th>Thời gian đăng nhập</th>
                                    
                                    
                                    
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
        <Footer />
        </div>
    );
}

export default Login_log