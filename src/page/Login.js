import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


//

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();  // 페이지 이동 기능 가져오기
  const loginUser =(event)=>{
    event.preventDefault();  // 폼 제출 시 새로고침 막기
    console.log("login user function issue"); // 콘솔에 로그 출력
    setAuthenticate(true); // 로그인 상태로 변경
    navigate("/"); // 메인 페이지 (/)로 이동
  }
  return <Container>
    <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        로그인
      </Button>
    </Form>
     </Container>;
};

export default Login