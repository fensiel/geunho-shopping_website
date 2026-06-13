import React, { useEffect,useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {

  // 1. 함수 정의는 한 번만! async를 붙여서 데이터를 기다리게 합니다.
  const [productList,setProductList]= useState([]);
  const [query,setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은?",searchQuery);
    let url = `https://my-json-server.typicode.com/fensiel/geunho-shopping_website/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);

    console.log("데이터 확인:", data);
  };

  // 2. 컴포넌트가 나타날 때 getProducts를 실행합니다.
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
         <Row>
         {productList.map((menu)=>(
            <Col lg={3}>
              <ProductCard item={menu}/>
              
            </Col>
          ))}
       
          </Row>
        </Container>
      
    </div>
  );
};

export default ProductAll;