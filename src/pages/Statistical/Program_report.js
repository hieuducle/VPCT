import '../../css/App.css';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';


    
  
function programReport() {
   

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
                            <h1>Báo cáo kết quả thực hiện chương trình</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Thống kê</a></li>
                                <li className="breadcrumb-item active">Báo cáo kết quả</li>
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
                        <div className='div-option'>
                                <label for="reportType">
                                  Báo cáo đầu ra:
                                  <span id='compulsory-sign'>
                                    (*)
                                  </span>
                                </label>
                          <select class="custom-select option-select">
                            <option value="" disabled selected hidden>Chọn báo cáo</option>
                            <option className='opchildren' value="1">Kết quả thực hiện chương trình(bản 1)</option>
                            <option className='opchildren' value="2">Kết quả thực hiện chương trình(bản 2)</option>
                            <option className='opchildren' value="3">Kết quả thực hiện chương trình(bản 3)</option>
                            <option value="3">Tổng hợp tình hình thực hiện của các nhiệm vụ theo chương trình</option>
                            <option value="3">Tổng hợp kế hoạch thực hiện(theo hợp đồng) của các nhiệm vụ theo chương trình</option>
                            <option value="3">Tổng hợp các nhiệm vụ dừng thực hiện</option>
                            <option value="3">Thống kê chương trình</option>
                            <option value="3">Tổng hợp các nhiệm vụ KH&CN</option>  
                          </select>
                         </div>


                         <div className='div-option'>
                                <label for="reportType" id='typeP'>Loại CT:</label>
                          <select class="custom-select option-select">
                            <option value="" disabled selected hidden>Chọn chương trình</option>
                            <option value="1">Chương trình trọng điểm cấp nhà nước</option>
                            <option value="2">Chương trinh độc lập quỹ gen</option>
                            
                          </select>
                         </div>


                         <div className='div-option'>
                                <label for="reportType" id='typeM'>Giai đoạn:</label>
                          <select class="custom-select option-select">
                            <option value="" disabled selected hidden>Chọn giai đoạn</option>
                            <option value="1">2006-2010</option>
                            <option value="2">2011-2015</option>
                            <option value="2">2016-2020</option>
                            <option value="2">2015-2025</option>
                            
                          </select>
                         </div>

   

                    <div className='div-button-report'>
                      <button className='button-report'>Xem báo cáo</button>
                      <button className='button-report'>In báo cáo</button>
                    </div>
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </section>
            
            </div>
        
        <Footer />
        </div>
    );
}

export default programReport;