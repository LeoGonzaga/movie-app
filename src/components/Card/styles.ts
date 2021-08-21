import styled from "styled-components";

export const Container = styled.div`
  height: 17rem;
  border-radius: 8px;
  background-color: white;
  background-size: contain;
  overflow: hidden;
  margin: 0.4rem;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: none;
  border: 1px solid #ccc;
  position: absolute;
  right: 10px;
  top: 5px;
`;

export const Avarage = styled.button`
  font-size: 20px;
  z-index: 200;
  color: black;
  position: absolute;
  top: 5px;
  left: 10px;
  background-color: white;
  width: 40px;
  height: 40px;
  padding: 2px;
  text-align: center;
  border-radius: 50%;
`;
