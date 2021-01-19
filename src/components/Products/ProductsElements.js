import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem 2rem;
  background: #ececec;
  color: #150f0f;
  margin-bottom: 5rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
  
`;

export const ProductCard = styled.div`
  margin: 2rem 2rem;
  line-height: 2;
  border-radius: 2%;
  padding: 2rem 2rem;
  width: 360px;
  box-shadow: 8px 8px #d4d4d4;
  background: #fff;
  &:hover {
    color: #fff;
    cursor: pointer;
    border-style: solid;
    border-color: #66a103;
    border-width: 1px;
  }
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  border-radius: 50%;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
`;

export const ProductTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: #1c2237;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 40px;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  background: #66a103;
  
  transition: 0.2 ease-out;
  border-radius: 4px;
  
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

