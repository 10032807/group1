import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Student,{ Student as NewStudent } from './student';
import reportWebVitals from './reportWebVitals';

// const title = 'Hello React';
// ReactDOM.render(<h1>{title} test</h1>,document.getElementById('root'));

// jsx bu html tag bn javascriptning stringlarini birdan foydalanishiga jsx format deyiladi
//   3
// const title = 'Hello React';
// ReactDOM.render(title,document.getElementById('root'));
//   2
// const title = <h1>Hello React</h1>;
// ReactDOM.render(title,document.getElementById('root'));
//    1
// ReactDOM.render(<h1>Hello React</h1>,document.getElementById('root'));

// React single pag hisoblanadi bu public ichida faqat bitta html tag bor va bunda barcha malumotlarni document.getElementById('root') shu yerga joylab qoyganligi uchun
// bunda qancha tag yozilishidan qattiy nazar bitta html tagga joylab berganligi uchun single pag hisoblanadi
// ReactDOM - bu reactni ichidagi kutubxonasi hisoblanadi va bu render bn birga ishlaydi
// render - bu ekranga malumotni chiqarib berish uchun xizmat qiladi.
// buni 2 ta parametiri bor masalan ReactDOM.render(<h1>birinchi parametir html tagni oladi</h1>va buni document.getElementById('root' bunga joylab qoyadigan parametr))

ReactDOM.render(
  <React.StrictMode>
    <TestStudent/>
   {/* { <App /> }  */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
