import '../../css/App.css';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import '../../css/Usage_procedure.css'


function Usage_procedure() {
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
                            <h1>Quy trình sử dụng</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Trợ giúp</a></li>
                                <li className="breadcrumb-item active">Quy trình sử dụng</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            

            <section className="content">
                <img className='img-use' src='https://detaiduan.vpct.gov.vn/Uploads/Images/QTSD.png'></img>
            </section>
            {/* /.content */}
            </div>
        <Footer />
        </div>
    );
}

export default Usage_procedure