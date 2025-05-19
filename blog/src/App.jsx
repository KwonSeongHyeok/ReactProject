/* eslint-disable */ // Ling끄는 기능

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(1);

  // map()사용법
  [1,2,3].map(function(a){
    return '1233211'
  })

  // onClick에는 함수 이름을 넣어야함
  // onClick={ function(){} } 이것도 가능 또는 () => {} 이것도 가능
  function 함수(){ // 긴 코드를 한 단어로 묶어주는 문법
    console.log(1);
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>Today-It Blog</h4>
      </div>

      <button onClick={()=>{
        let 정렬 = [...글제목];
        글제목변경(정렬.sort());
      }}>가나다순 정렬</button>

      <button onClick={() => {
          let copy = [...글제목]; // array 복사해올때는 [...array명] -> 새로운 화살표(주소)를 준다는 뜻
          // state가 array/object면 독립적 카피본을 만들어서 수정해야 함 
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}>글수정</button>

      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick={() => {따봉변경(따봉+1)} }>👍</span> {따봉} </h4>
        <p>5월 14일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>5월 14일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>5월 14일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                setModal(true);
                setTitle(i);
              }}>{ 글제목[i] }
                <span onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>👍</span> {따봉[i]} </h4>
              <p>5월 14일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
      }

    </div>
  )
}


function Modal(props){
  return(
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => { 
        props.글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬독학']);
      }}>글수정</button>
    </div>
  )
}

export default App
