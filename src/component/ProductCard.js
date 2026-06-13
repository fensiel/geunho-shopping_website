// import React from 'react';

// const ProductCard = () => {
//   return (
//     <div>
//         <img src="https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=500"/>
//         <div>벨티드 트윌 코트</div>
//         <div>99000원</div>
//         <div>신제품</div>
//     </div>

    

    
//   );
// };

// export default ProductCard;


import React from 'react';
import {useNavigate} from "react-router-dom"

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail=()=>{
        navigate(`/product/${item.id}`);
  }
  return (
    // 카드의 전체 폭을 100~200px 정도로 잡아주면 이미지가 그 안에 꽉 찹니다.
      <div className='card' onClick={showDetail}>
      
          <img 
  src={item?.img} 
  width="100%" 
  style={{ height: "300px", objectFit: "cover" }} 
/>
         
          <div>{item?.title}</div>
          <div>${item?.price}</div>
          <div>{item?.new == true ? "":"재고품절"}</div>
      </div>
  );
};

export default ProductCard;