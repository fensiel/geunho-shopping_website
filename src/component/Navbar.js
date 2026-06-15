import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

// 1. props로 authenticate와 setAuthenticate를 받아옵니다.
const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();

    // 로그인 페이지로 이동하는 함수
    const goToLogin = () => {
        navigate("/login");
    };

    // ✨ 로그아웃 처리 함수 추가
    const handleLogout = () => {
        setAuthenticate(false); // 로그인 상태를 false로 변경
        navigate("/"); // 로그아웃 후 메인 페이지로 이동
    };

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            console.log("keyword", keyword);
            navigate(`/?q=${keyword}`);
        }
    };

    return (
        <div>
            <div>
                {/* ✨ 2. authenticate 상태에 따라 로그인/로그아웃 버튼을 다르게 보여줍니다 (삼항연산자) */}
                {authenticate ? (
                    <div className="login-button" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </div>
                ) : (
                    <div className="login-button" onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그인</div>
                    </div>
                )}
            </div>

            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
               
                <div>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;