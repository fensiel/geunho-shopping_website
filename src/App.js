import { useState , useEffect} from "react";
import { Routes, Route } from "react-router-dom"; // dom 확인!
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";


//1.전체상품페이지, 로그인, 상품상세페이지
//1-1. 네비게이션 바
//2.전체 상뭄페이지에서는 전체 상품을 볼 수 있다 
//3.로그인 버튼을 누르면 로그인 페이지가 나온다
//4.로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다
//5.로그아웃 버튼을 클릭하면 로그아웃이 된다

// const[상태값,상태변경함수] = useState(초기값);
function App() {
  const[authenticate,setAuthenticate] = useState(false); // true면 로그인이 됨 false면 로그인이 안됨
  useEffect(() => { 
    console.log("Aaaa",authenticate);
  },[authenticate]);
  
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* 2. path와 element 내용을 채워주기 */}
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} /> 
        {/* 여기서 setAuthenticate={setAuthenticate}를 Login 컴포넌트로 보내고 있음 */}
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;