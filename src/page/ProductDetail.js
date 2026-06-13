import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  // 1. 현재 상품 데이터 가져오기
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/fensiel/geunho-shopping_website/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
    
    // 현재 상품을 가져온 후, 추천 상품 목록도 함께 계산/호출합니다.
    getAiRecommendations(data);
  };

  // 2. AI 추천 로직 (여기서는 현재 상품과 다른 상품 중 '인기 상품(choice)' 위주로 추천)
  const getAiRecommendations = async (currentProduct) => {
    let url = `https://my-json-server.typicode.com/fensiel/geunho-shopping_website/products`;
    let response = await fetch(url);
    let allProducts = await response.json();

    // 로직: 현재 보고 있는 상품은 제외하고, 'choice가 true'이거나 '가격대가 비슷한' 상품 filter
    let filtered = allProducts.filter(item => 
      item.id !== currentProduct.id && (item.choice === true || Math.abs(item.price - currentProduct.price) <= 20000)
    );

    // 상위 2개만 추출해서 추천 리스트에 저장
    setRecommendations(filtered.slice(0, 2));
  };

  useEffect(() => {
    getProductDetail();
  }, [id]); // id가 바뀔 때마다 새로 불러옴

  return (
    <Container>
      {/* 상품 상세 정보 (기존에 작성하실 코드 영역) */}
      <Row>
        <Col md={6}><img src={product?.img} width="100%" alt={product?.title} /></Col>
        <Col md={6}>
          <h2>{product?.title}</h2>
          <h3>${product?.price}</h3>
          {/* ... 사이즈 선택 버튼 등 ... */}
        </Col>
      </Row>

      <hr />

      {/* ✨ AI 상품 추천 섹션 ✨ */}
      <div className="ai-recommendation-section my-5">
        <h4 style={{ fontWeight: 'bold', color: '#2a2a2a' }}>
          🤖 AI가 분석한 {product?.title}와(과) 함께 어울리는 추천 아이템
        </h4>
        <p style={{ fontSize: '14px', color: 'gray' }}>고객님의 취향과 현재 상품의 스타일을 기반으로 추천합니다.</p>
        
        <Row className="mt-4">
          {recommendations.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={3}>
              {/* 기존에 잘 만들어두신 ProductCard를 그대로 재사용합니다! */}
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ProductDetail;