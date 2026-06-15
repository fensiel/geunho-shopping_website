import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

// 💡 중요: 꼭 중괄호 { } 안에 authenticate와 setAuthenticate를 적어서 받아와야 합니다!
const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'Home', 'Sale', '지속가능성'];
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    };

    // 로그아웃을 처리해주는 함수
    const handleLogout = () => {
        setAuthenticate(false); // 로그인 상태를 다시 false로!
        navigate("/"); // 메인으로 튕겨내기
    };

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    };

    return (
        <div>
            <div>
                {/* 💡 여기가 핵심입니다! 로그인 상태에 따라 버튼이 스위치처럼 바뀝니다. */}
                {authenticate ? (
                    <div className="login-button" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faUser} />
                        <div>로그아웃</div>
                    </div>
                ) : (
                    <div className="login-button" onClick={goToLogin} style={{ cursor: 'pointer' }}>
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