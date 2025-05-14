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

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>Today-It Blog</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]}</h4>
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
