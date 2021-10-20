import logo from './logo.svg';
import './App.css';
// App component hisoblanaddi va bu doim bosh harflari katta harflar bn yozilishi kk 
// bunda function return qeymat qaytaradi va shu qaytgan qiymat App ga teng boladi
// buni ishga tushirish uchun export default App; qilib olamiz va bu oddiy html tag bolib qolayabdi 
// buni reactda ishlatishimiz uchun index.js ga import App from './App'; buni olib boramiz 
// buni ReactDOM da render qilib chiqarib olamiz va shu componentnning nomini xoxlagan nom bn kuchirib olamiz faqat
// export default ga berilgan nomini
function App() {
  return (
    <div className='App'>
      <h1>App component</h1>
    </div>
  );
}

export default App;
