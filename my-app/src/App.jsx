import ProgramaPitaniya from './card.jsx'
import './App.css'
import DayWeek from './DayWeek.jsx'
import MenuCard from './MenuCard.jsx'
import OService from './OService.jsx'
import Aksiya from './Aksiya.jsx'
import Voprosi from './Voprosi.jsx'

const App = () => {


function App() {
  return (
    <div>
   <header>
    <img src="../public/img/Group 161.png" alt="" />

    <div style={{display:"flex", fontSize:"18px",gap:"20px", color:"#493E3E", fontWeight:"700"}}>
      <p>Подбор рациона</p>
      <p>Программы питания</p>
      <p>О нас</p>
      <p>Доставка</p>
      <p>Акции</p>
      <p>FAQ</p>
      <p>Отзывы</p>
    </div>

    <h1>+7 89892 14-14-14</h1>
   </header>



   <main style={{marginTop:"80px",display:"flex",justifyContent:"space-around",alignItems:"center",gap:"20%"}}>
    <div>
      <h1 style={{fontSize:"60px"}}>Прогрессивное питание <br /> на каждый день</h1>
      <p>Сбалансированный рацион в  современном формате — Супер-боул</p> <br /><br />
      <button style={{backgroundColor:"#4D8F76", color:"white", padding:"10px 20px", border:"none", borderRadius:"30px", fontSize:"18px",fontWeight:"700"}}>Подобрать рацион</button>
      <button style={{backgroundColor:"white", color:"#4D8F76", padding:"10px 20px", border:"2px solid #4D8F76", borderRadius:"30px", fontSize:"18px",fontWeight:"700"}}>Подобрать рацион</button>

    </div>

    <img src="../public/img/107823765_764851841011463_3291585847262786341_n 1.png" alt="" width={"580px"} />

   </main>


<div>
  <h1>Программа питания</h1>
  <p>Калорийность</p>
  <p>Норма калорий позволяет достигать цели. Как расчитать? На сайте есть калькулятор</p> <br />

  <div style={{display:"flex",justifyContent:"center",gap:"100px"}}>
<ProgramaPitaniya num1="900 kkal" num2="3 блюда"  />
<ProgramaPitaniya   num1="1250kkal"  num2="4 блюда" className={"card-lite"}   />
<ProgramaPitaniya num1="1 600l kkal" num2="5 блюд" />
<ProgramaPitaniya num1=" 2 050 kkal" num2="6 блюд" />
<ProgramaPitaniya num1="индивидуально подобрать" />
  </div> <br /> <br />

  <h3>Продолжительность</h3>

    <div style={{display:"flex",justifyContent:"center",gap:"100px" }} >
<ProgramaPitaniya num1="Пробные 2 дня kkal" num2=" за 2 900 ₽"  className={"card-lite"}  />
<ProgramaPitaniya   num1="1 неделя"  num2=" 1 700 ₽ в день"   className={"card-lite"}  />
<ProgramaPitaniya num1="2 недели" num2="5 блюд" className={"card-lite"}  />
<ProgramaPitaniya num1="4 недели" num2="6 блюд"  className={"card-lite"} />
<ProgramaPitaniya num1="3 недели" num2="1 520 ₽ в день"  className={"card-lite"} />
  </div> <br /> <br />

</div>





<h2>Пример недельного рациона</h2>
<p>6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г; углеводы — 120 г</p>

<div style={{display:"flex",gap:"100px"}}>

<DayWeek day="понедельник" className={"card-lite"} />
<DayWeek day="вторник"     className={"card-lite"}  />
<DayWeek day="четверг"     className={"card-lite"}/>
<DayWeek day="пятница"     className={"card-lite"}/>
<DayWeek day="суббота"     className={"card-lite"} />
<DayWeek day="воскресенье" className={"card-lite"} />
</div>

<div style={{display:"flex",gap:"60px",marginTop:"50px"}}>
  <MenuCard  img="../public/img/image 20.png" gr="Завтрак 300gr" name="Геркулес с зелёным яблоком и семенами льна " className={"card-menu"} />
  <MenuCard  img="../public/img/image 22.png" gr="Завтрак 300gr" name="Геркулес с зелёным яблоком и семенами льна " className={"card-menu"} />
  <MenuCard  img="../public/img/image 21.png" gr="Завтрак 300gr" name="Геркулес с зелёным яблоком и семенами льна " className={"card-menu"} />
  <MenuCard  img="../public/img/image 23 (2).png" gr="Завтрак 300gr" name="Геркулес с зелёным яблоком и семенами льна " className={"card-menu"} />
</div>


<h1 style={{fontSize:"60px"}}>О нашем сервисе</h1>

<div style={{display: "grid",gridTemplateColumns: "repeat(3, 1fr)", gap: "40px",marginLeft:"-2%"}}>

<OService img="../public/img/Group 39.png"name="Мы жарим на сухом гриле через  пергамент, запека ем в су-вид" about="Профессиональная команда поваров гарантирует вам прекрасный вкус и качество блюд" />
<OService img="../public/img/Group 40.png"name="Мы жарим на сухом гриле через  пергамент, запека ем в су-вид" about="Профессиональная команда поваров гарантирует вам прекрасный вкус и качество блюд" />
<OService img="../public/img/Group 41.png"name="Мы жарим на сухом гриле через  пергамент, запека ем в су-вид" about="Профессиональная команда поваров гарантирует вам прекрасный вкус и качество блюд" />
<OService img="../public/img/Group 39.png"name="Мы жарим на сухом гриле через  пергамент, запека ем в су-вид" about="Профессиональная команда поваров гарантирует вам прекрасный вкус и качество блюд" />
<OService img="../public/img/Group 42.png"name="Мы жарим на сухом гриле через  пергамент, запека ем в су-вид" about="Профессиональная команда поваров гарантирует вам прекрасный вкус и качество блюд" />
<OService img="../public/img/Group 39.png"name="Мы жарим на сухом гриле через  пергамент, запека ем в су-вид" about="Профессиональная команда поваров гарантирует вам прекрасный вкус и качество блюд" />
</div>



<div style={{marginTop:"100px",display:"flex", marginRight:"2%"}}>
  <div>
<p>Доставка правильного питания «Пора поесть» – это специально разработанные<br /> программы здорового, раздельного и, несомненно, вкусного питания. </p> <br />
<h1 style={{color:"#4D8F76"}}>Уникальность проекта заключается в объединении  медицинских знаний и современных методов <br /> приготовления пищи.</h1>
<p>Программы питания разработаны шеф-поваром нашей компании совместно <br /> с диетологами. А это предполагает, что организм регулярно будет <br /> получать в необходимом количестве и оптимальных соотношениях многие питательные <br /> вещества – белки, жиры, воду, минеральные вещества и витамины, а наш шеф-повар <br /> позаботился о вкусовых качествах наших блюд</p>
</div>
<div style={{display:"flex",justifyContent:"center"}}>
  <div>
    <img src="../public/img/Rectangle 29.png" alt="" />
    <img src="../public/img/Rectangle 46.png" alt="" />
   
  </div>
  <img src="../public/img/Rectangle 30.png" alt="" />
</div>
</div>



<div style={{backgroundColor:"#F4EDDE",height:"840px",borderRadius:"20px",marginTop:"50px",padding:"20px"}}>
<h1 style={{fontSize:"40px"}}>Карта доставки</h1>
<h3>Доставка осуществляется каждый день с 06:00 до 12:00. <br />Выбор интервала — 2 часа.</h3> <br /> <br />
<div style={{display:"flex",gap:"100px"}}>
<img src="../public/img/image 2 (2).png" alt="" width={1100} />
<div>
      <button style={{backgroundColor:"#F4EDDE",  padding:"10px 20px", border:"2px solid #4D8F76", borderRadius:"30px", fontSize:"18px",fontWeight:"700" ,width:"350px",height:"60px", marginBottom:"40px"}}>По городу бесплатно</button>
      <button style={{backgroundColor:"#F4EDDE",  padding:"10px 20px", border:"2px solid #D6CE72", borderRadius:"30px", fontSize:"18px",fontWeight:"700" ,width:"350px",height:"60px", marginBottom:"40px"}}>Пригород 25 км — 100 ₽н</button>
      <button style={{backgroundColor:"#F4EDDE",  padding:"10px 20px", border:"2px solid #FFBC4F", borderRadius:"30px", fontSize:"18px",fontWeight:"700" ,width:"350px",height:"60px", marginBottom:"40px"}}>Пригород 35 км — 300 ₽</button>
      <button style={{backgroundColor:"#F4EDDE",  padding:"10px 20px", border:"2px solid #FC5239", borderRadius:"30px", fontSize:"18px",fontWeight:"700" ,width:"350px",height:"60px", marginBottom:"40px"}}>Пригород 50 км — 500 ₽н</button>
<p>Уточните стоимость и время доставки</p>
<h2>+7 988 500-1-700</h2>
      <button style={{backgroundColor:"#4D8F76",color:"white", padding:"10px 20px", border:"none", borderRadius:"30px", fontSize:"18px",fontWeight:"700" ,width:"350px",height:"60px", marginBottom:"40px"}}>Подобрать рацион</button>

</div>

</div>
</div>


<h1 style={{marginTop:"80px",fontSize:"50px"}}>Акции</h1>
<div style={{display:"flex",gap:"70px"}}>
  <Aksiya name="Наименование акции" about="Краткое описание акции" className={"Aksiya1"} />
  <Aksiya name="Наименование акции" about="Краткое описание акции" className={"Aksiya2"} />

</div>


<h1 style={{marginTop:"80px",fontSize:"50px"}}>Частые вопросы</h1>


<div style={{display:"flex",gap:"100px"}}>
<DayWeek day="Продукты" className={"card-lite"}/>
<DayWeek day="Программы" className={"card-lite"}/>
<DayWeek day="Оплата " className={"card-lite"}/>
<DayWeek day="Хранение" className={"card-lite"}/>
</div>

<Voprosi name="Как я могу оплатить заказ?" />
<Voprosi name="Могу ли я изменить адрес и время доставки?" />
<Voprosi name="Могу ли я перенести день доставки?" />
<Voprosi name="Могу ли я приостановить доставку, на какой срок?" />






    </div>
  )
}

export default App;