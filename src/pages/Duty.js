    import '../css/App.css';

    import Header from '../components/Header';
    import Menu from '../components/Menu';
    import Table from '../components/Table';
    import Footer from '../components/Footer';

    function Duty() {
        return (
            <div class="wrapper">
            <Header />
            <Menu />
            <Table />
            <Footer />
            </div>
        );
    }

    export default Duty;

// import React, { useEffect, useState } from 'react';

// const Duty = () => {
//   const [serverDatetime, setServerDatetime] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/Handlers/HomeHandler.ashx', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           // Các tham số khác nếu cần
//         });

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setServerDatetime(data.serverDatetime);
//         setLoading(false); // Dữ liệu đã được tải thành công
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message);
//         setLoading(false); // Xảy ra lỗi khi tải dữ liệu
//       }
//     };

//     fetchData();
//   }, []); // Chạy một lần khi component mount

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <p>Server datetime: {serverDatetime}</p>
//       )}
//     </div>
//   );
// };

// export default Duty;

