import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Footer from '../pages/Shared/Footer';
import Header from '../Pages/Shared/Header';


const Main = () => {
    return (
        <>
            <Header/>
            <Outlet></Outlet>
            {/* <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            /> */}
            <Footer></Footer>
        </>
    );
};

export default Main;