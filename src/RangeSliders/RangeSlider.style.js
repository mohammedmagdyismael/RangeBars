import styled from 'styled-components'


export const PriceSlider = styled.div`
    width: 300px;
    margin: auto;
    text-align: center;
    position: relative;
    height: 6em;
`;

 
export const InputSlider = styled.input`
    position: absolute;
    left: 0;
    bottom: 0;
    -webkit-appearance: none;
    width: 100%;
    border: solid 1px #f5f5f5;
    border-radius: 8px;
    background : linear-gradient(to right, #C3C3C3 0%, #0070cd 0%,#0070cd 100%,#C3C3C3 100%);
    :focus {
        outline: none;
    }
    ::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer; 
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }
    ::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #1da1f2;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: #a1d0ff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
    }
    ::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer; 
        border-radius: 1px;
        box-shadow: none;
        border: 0;
    }
    ::-moz-range-thumb {
        z-index: 2;
        position: relative;
        box-shadow: 0px 0px 0px #000;
        border: 1px solid #1da1f2;
        height: 18px;
        width: 18px;
        border-radius: 25px;
        cursor: pointer;
    }
    ::-ms-track {
        width: 100%;
        height: 2px;
        cursor: pointer; 
        border-color: transparent;
        color: transparent;
    }
`;

export const Container = styled.div`
    display : inline-block;
    background-color : white;
    border : 0.5px;
    border-style : solid;
    border-color : #616161;
    width : 200px;
    height : 20px;
  `;
  
  export const Fullrange = styled.div` 
    padding : 0.5px;
    width : 100%;
    margin : 0.5px;
  `;
  
  export const Movingrange = styled.div`
    display : block;
    width : 100px;
    height : 17px;
    background-color : red;
    background-image: linear-gradient(to right, lightgreen , green );
  `;