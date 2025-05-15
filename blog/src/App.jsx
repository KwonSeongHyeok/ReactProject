/* eslint-disable */ // Ling끄는 기능

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  // let [a, b] = useState('남자 코트 추천')
  // a = state에 보관한 자료가 나옴
  // b = state 변경도와주는 함수
  // 변동시 자동으로 html에 반영되게 만들고 싶을 때 state 사용
  // 자주 변경될거같은 html 부분은 state로 만들기
  let [따봉, 따봉변경] = useState(0);
  // state 변경하는 법
  // 등호로는 변경 X
  // state변경함수(새로운 state)
  // ex 따봉변경(1)

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
      <div className='list'>
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
      </div>
    </div>
  )
}

export default App
