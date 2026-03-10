
import './App.css'
import DayWeek from './DayWeek.jsx'
import MenuCard from './MenuCard.jsx'
import OService from './OService.jsx'
import Aksiya from './Aksiya.jsx'
import Voprosi from './Voprosi.jsx'

const App = () => {

import Card from './card.jsx';
import Card2 from './card2.jsx';

const App = () => {
  const data = [
    { id: 1, img:"../public/img/unsplash_Xp9hn1HzzDk.png",name:"Латофлекс",about:"Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина" },
    { id: 1, img:"../public/img/unsplash_Xp9hn1HzzDk.png",name:"Латофлекс",about:"Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина" },
    { id: 1, img:"../public/img/unsplash_Xp9hn1HzzDk.png",name:"Латофлекс",about:"Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина" },
    { id: 1, img:"../public/img/unsplash_Xp9hn1HzzDk.png",name:"Латофлекс",about:"Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина" },
    { id: 1, img:"../public/img/unsplash_Xp9hn1HzzDk.png",name:"Латофлекс",about:"Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина" },
    { id: 1, img:"../public/img/unsplash_Xp9hn1HzzDk.png",name:"Латофлекс",about:"Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина" },
    { id: 1, img:"../public/img/unsplash_Xp9hn1HzzDk.png",name:"Латофлекс",about:"Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина" },

  ];

    const data2 = [
    { id: 1, img:"../public/img/unsplash_6tAIO3pxde4.jpg",name:"Латофлекс",about:"Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина" },
    { id: 1, img:"../public/img/unsplash_okI5SSlYAvM.jpg",name:"Латофлекс",about:"Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина" },
    { id: 1, img:"../public/img/unsplash_6tAIO3pxde4.jpg",name:"Латофлекс",about:"Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина" },


  ];



function App() {
  return (
<div>

  <div className='Glava'>
<header>
<img src="../public/img/Ресурс 1 1 (1).png" alt="" />

<h3>Продукция</h3>
<h3>Поставщикам</h3>
<h3>Вакансии</h3>
<h3>Новости</h3>
<h3>контакты</h3>

</header>

<h1 style={{fontSize:"60px",marginTop:"200px"}}>Группа компаний <br /> Гремячинский ДОК</h1>

<p>Современное предприятие по производству гнуто-клееных изделий <br /> (латофлекс), фанеры, топливных брикетов RUF, березового угля, <br /> пиломатериалов</p>
<button style={{width:"170px",borderRadius:"10px",backgroundColor:"green",color:"white",height:"50px"}}>Связаться с нами</button>

</div>















    <div style={{display:"grid",gridTemplateColumns: "repeat(3, 1fr)",marginLeft:"10%"}}>
      {data.map((item) => (
        <Card 

          key={item}
          img = {item.img}
          name={item.name}
          about={item.about}
       
        />
      ))}
    </div>


<h1>основная деятельность</h1>


    <div style={{display:"flex",gap:"180px",justifyContent:"center",fontSize:"22px",marginTop:"80px"}}>
<div >
  <h1 style={{color:"green"}}>Производство</h1>

  <p>Оборудование предприятия поставляется <br />
от мировых лидеров в сфере деревообработки <br />
и обеспечивает стабильный выпуск продукции. <br /> 
</p>

  <p>Оборудование предприятия поставляется <br />
от мировых лидеров в сфере деревообработки <br />
и обеспечивает стабильный выпуск продукции. <br /> 
</p>


</div>
<img src="../public/img/unsplash_zbD8iz5ZJk4.jpg" alt="" width={1000} />

</div>

<div style={{display:"flex",gap:"20px",justifyContent:"center",fontSize:"22px",marginTop:"50px"}}>
  <img src="../public/img/unsplash_2yNMsw-A2eI (1).jpg" width={500} alt="" />
  <img src="../public/img/unsplash_2yNMsw-A2eI (2).jpg" width={500} alt="" />
  <img src="../public/img/unsplash_2yNMsw-A2eI.jpg"     width={500}  alt="" />
</div>



<h1>основная деятельность</h1>


    <div style={{display:"flex",gap:"180px",justifyContent:"center",fontSize:"22px",marginTop:"80px"}}>
<div >
  <h1 style={{color:"green"}}>Производство</h1>

  <p>Оборудование предприятия поставляется <br />
от мировых лидеров в сфере деревообработки <br />
и обеспечивает стабильный выпуск продукции. <br /> 
</p>

  <p>Оборудование предприятия поставляется <br />
от мировых лидеров в сфере деревообработки <br />
и обеспечивает стабильный выпуск продукции. <br /> 
</p>


</div>
<img src="../public/img/unsplash_2yNMsw-A2eI (2).jpg" alt="" width={1000} />

</div>

<div style={{display:"flex",gap:"20px",justifyContent:"center",fontSize:"22px",marginTop:"50px"}}>
  <img src="../public/img/unsplash_2yNMsw-A2eI (1).jpg" width={500} alt="" />
  <img src="../public/img/unsplash_2yNMsw-A2eI (2).jpg" width={500} alt="" />
  <img src="../public/img/unsplash_2yNMsw-A2eI.jpg"     width={500}  alt="" />
</div>





<h1>основная деятельность</h1>


    <div style={{display:"flex",gap:"180px",justifyContent:"center",fontSize:"22px",marginTop:"80px"}}>
<div >
  <h1 style={{color:"green"}}>Производство</h1>

  <p>Оборудование предприятия поставляется <br />
от мировых лидеров в сфере деревообработки <br />
и обеспечивает стабильный выпуск продукции. <br /> 
</p>

  <p>Оборудование предприятия поставляется <br />
от мировых лидеров в сфере деревообработки <br />
и обеспечивает стабильный выпуск продукции. <br /> 
</p>


</div>
<img src="../public/img/unsplash_zbD8iz5ZJk4.jpg" alt="" width={1000} />

</div>

<div style={{display:"flex",gap:"20px",justifyContent:"center",fontSize:"22px",marginTop:"50px"}}>
  <img src="../public/img/unsplash_2yNMsw-A2eI (1).jpg" width={500} alt="" />
  <img src="../public/img/unsplash_2yNMsw-A2eI (2).jpg" width={500} alt="" />
  <img src="../public/img/unsplash_2yNMsw-A2eI.jpg"     width={500}  alt="" />
</div>


<h1 style={{fontSize:"50px",textAlign:"center",marginTop:'250px'}}>География Поставок</h1>


<img src="../public/img/Group 1536.png" width={1300} alt="" style={{marginLeft:"100px"}} />



    <div style={{display:"grid",gridTemplateColumns: "repeat(3, 1fr)",marginLeft:"10%"}}>
      {data2.map((item) => (
        <Card2 

          key={item}
          img = {item.img}
          name={item.name}
          about={item.about}
       
        />
      ))}
    </div>

    <footer className="bg-[#2f2f2f] text-gray-300 pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-10">
            <div>
              <img src="/images/Logo.png" className="mb-4 w-40" />
              <p className="text-sm text-gray-400 leading-relaxed">
                Современное предприятие по производству гнуто-клееных изделий
                (латофлекс), фанеры, топливных брикетов RUF, березового угля,
                пиломатериалов
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4 font-semibold">Реализация</h4>
              <ul className="space-y-2 text-sm">
                <li>Латофлекс</li>
                <li>Фанера</li>
                <li>Брикеты топливные RUF</li>
                <li>Пиломатериалы</li>
                <li>Кроватные основания</li>
                <li>Уголь</li>
                <li>Саженцы</li>
                <li>Отходы производства</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-semibold">О компании</h4>
              <ul className="space-y-2 text-sm">
                <li>Продукция</li>
                <li>Деятельность</li>
                <li>Преимущества</li>
                <li>Поставщикам</li>
                <li>Вакансии</li>
                <li>Новости</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-semibold">Отдел закупок</h4>
              <ul className="space-y-2 text-sm">
                <li>purchase@grdok.ru</li>
                <li className="mt-4 text-gray-400">Отдел продаж</li>
                <li>sale@grdok.ru</li>
                <li>@gremdok_bot</li>
                <li className="mt-2">
                  Мелкий опт, «карандаш», «пятак» : +7 (342) 502-16-91
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4 font-semibold">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>info@grdok.ru</li>
                <li className="mt-4 text-gray-400">Адрес</li>
                <li>
                  Гремячинск Пермский край 618270 РФ, г. Гремячинск, ул.
                  Коммунистическая, д.1
                </li>
              </ul>
            </div>
          </div>
          <div >
            <p>© 2022 ГремДок, все права защищены</p>
            <p className="mt-2 md:mt-0">Политика конфиденциальности</p>
          </div>
        </div>
      </footer>



    </div>

  );
};

export default App;