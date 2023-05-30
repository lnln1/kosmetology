Vue.component('contacts', {
    template: `<div class="contacts">
    <div class="contacts-container">
        <div class="contacts-address">
            <a class="adress" href="https://goo.gl/maps/ko8kVqDp7s4DoMxx7"> <span>г. Санкт-Петербург, ул. Марата, д.5 09:00-21:00</span></a>
        </div>
        <div class="contacts-items">

        <a class="number" href=" tel:+79215967243">  <span class="contacts-item">+79215967243</span></a>
        <a class="email" href="mailto:edelweiss23@gmail.com">  <span class="contacts-item">edelweiss23@gmail.com</span></a>

        </div>
        <div class="logo-img-container">
        <img src="images/logo.png" alt="" class="logo">
    </div>
    </div>
    
</div>`,
    
    
});

Vue.component('first-block', {
    template: `<main class="first-block" id="a1">
                    
    <div class="first-block-container">
    
        <h1 class="first-block-container-title animation">КОСМЕТОЛОГИЧЕСКАЯ КЛИНИКА 
        EDELWEISS</h1>
        <img src="images/1block.png" alt="" class="first-block-container-img">
    </div>
</main>`
});
Vue.component('consult', {
    template: `<main class="block-consult">
                    
    <div class="consult-container animation"  id="a2">
    <div class="consult-container-info">
    <div clas="consult-container-info-img">
      <img src="images/secondblock.png" alt="" class="consult-container-info-img">
      </div>
      <div class="consult-container-info-question">
        <h1 class="consult-container-info-question-title">В отделении косметологии лица и тела «EDELWEISS» доступны самые новые технологии омоложения, коррекции лица и тела, которые впитали в себя передовые научные достижения.
        В отделении эстетической медицины можно сделать контурную пластику, провести коррекцию губ, подбородка, лба, зоны декольте. Используем современные методы косметологии лица и тела, позволяющие достигать совершенной внешности</h1>
    <button class="button"><div class="consult-container-info-question-button">ЗАДАТЬ ВОПРОС ВРАЧУ</div></button>
 </div>
    
   
    </div>
    </div>
</main>`,

});

Vue.component('services', {
    template: `<main class="block-services">
                    
    <div class="services-container animation"  id="a3">
<h1 class="services-container-title ">КОСМЕТОЛОГИЧЕСКИЕ УСЛУГИ</h1>
<div class="services-container-laser-block">
<div class="services-container-laser-block-info">
<h1 class="services-container-laser-block-info-title">
ЛАЗЕРНАЯ КОСМЕТОЛОГИЯ
 </h1>
 <img src="images/Line1.png" alt="" class="services-container-laser-block-img">
 <ul class="services-container-laser-block-text">
 <li>  лечение акне </li>
 <li> лазерное омоложение </li>
 <li>удаление пигментации </li>
 <li>удаление шрамов и рубцов </li>
 </ul>
</div>
<img src="images/laser.png" alt="" class="services-container-laser-block-img2">
 </div>


 <div class="services-container-injections-block">

 <img src="images/injections.png" alt="" class="services-container-injections-block-img2">
  <div class="services-container-injections-block-info">
 <h1 class="services-container-injections-block-info-title">
 ИНЪЕКЦИОННАЯ КОСМЕТОЛОГИЯ
  </h1>
  <img src="images/Line1.png" alt="" class="services-container-injections-block-img">
  <ul class="services-container-injections-block-text">
  <li>  мезотерапия </li>
  <li> контурная пластика   </li>
  <li>биоревитализация  </li>
  <li> лечение гипергидроза </li>
  <li>коррекция мимических морщин </li>
  </ul>
 </div>
  </div>


 <div class="services-container-device-block">
 <div class="services-container-device-block-info">
 <h1 class="services-container-device-block-info-title">
 АППАРАТНЫЕ ПРОЦЕДУРЫ
  </h1>
  <img src="images/Line1.png" alt="" class="services-container-device-block-img">
  <ul class="services-container-device-block-text">
  <li>  SMAS-лифтинг  </li>
  <li>  фотоомоложение </li>
  <li>микротоки Biogenie, </li>
  <li>газожидкостный пилинг. </li>
  </ul>
 </div>
 <img src="images/device.png" alt="" class="services-container-device-block-img2">
  </div>
  


   <div class="services-container-therapy-block"><img src="images/therapy.png" alt="" class="services-container-therapy-block-img2">
   <div class="services-container-therapy-block-info">
   <h1 class="services-container-therapy-block-info-title">
   ТЕРАПЕВТИЧЕСКАЯ КОСМЕТОЛОГИЯ
    </h1>
    <img src="images/Line1.png" alt="" class="services-container-therapy-block-img">
    <ul class="services-container-therapy-block-text">
    <li>  лечение акне </li>
    <li> лазерное омоложение </li>
    <li>удаление пигментации </li>
    <li>удаление шрамов и рубцов </li>
    </ul>
   </div>
   
    </div>
 
 </div>
    
</main>`,

});





Vue.component('dignity', {
    template: `<main class="block-dignity">
                    
    <div class="dignity-container animation"  id="a4">
<h1 class="dignity-container-title">НАШИ ДОСТОИНСТВА</h1>

<div class="dignity-container-items">
<div class="dignity-container-item">

<img src="images/icon1.svg" alt="" class="dignity-container-item-img">
<h1 class="dignity-container-item-title">19 лет работы в косметологии</h1>

</div>
<div class="dignity-container-item">

<img src="images/icon2.svg" alt="" class="dignity-container-item-img">
<h1 class="dignity-container-item-title">Безупречная репутация</h1>

</div>
<div class="dignity-container-item">

<img src="images/icon3.svg" alt="" class="dignity-container-item-img">
<h1 class="dignity-container-item-title">Удобное расположение</h1>

</div>
<div class="dignity-container-item">

<img src="images/icon4.svg" alt="" class="dignity-container-item-img">
<h1 class="dignity-container-item-title">Экспертный уровень врачей</h1>

</div>
<div class="dignity-container-item">

<img src="images/icon5.svg" alt="" class="dignity-container-item-img">
<h1 class="dignity-container-item-title">Конкурентные цены</h1>

</div>
<div class="dignity-container-item">

<img src="images/icon6.svg" alt="" class="dignity-container-item-img">
<h1 class="dignity-container-item-title">Гарантия результата</h1>

</div>


</div>

</div>
    
</main>`,

});




Vue.component('doctor', {
    template: `<main class="block-doctor ">
                    
    <div class="doctor-container animation"  id="a5">
<h1 class="doctor-container-title">НАШИ ВРАЧИ</h1>

<div class="doctor-container-items">
<div class="doctor-container-item">
<img src="images/doctor1.png" alt="" class="doctor-container-item-img">

<h1 class="doctor-container-item-title">Петрова Анастасия Сергеевна</h1>
<img src="images/line_doctor1.png" alt="" class="doctor-container-item-img2">

<p class="doctor-container-item-text">Врач дерматолог, косметолог, лазеротерапевт. Специалист по антивозрастной коррекции кожи лица.</p>
</div>






<div class="doctor-container-item">
<img src="images/doctor2.png" alt="" class="doctor-container-item-img">

<h1 class="doctor-container-item-title">Самсонова Дарья Александровна</h1>
<img src="images/line_doctor2.png" alt="" class="doctor-container-item-img2">

<p class="doctor-container-item-text">Заведующая отделением лазерной и аппаратной косметологии.  Специалист по анти-возрастной коррекции кожи лица. </p>
</div>










<div class="doctor-container-item">
<img src="images/doctor3.png" alt="" class="doctor-container-item-img">

<h1 class="doctor-container-item-title">Савина Евгения Викторовна</h1>
<img src="images/line_doctor3.png" alt="" class="doctor-container-item-img2">

<p class="doctor-container-item-text">Врач дерматовенеролог, косметолог, лазеротерапевт. Кандидат медицинских наук</p>
</div>

</div>
</div>
</main>`,

});









Vue.component('connect', {
    template: `<main class="block-connect">
                    
    <div class="connect-container animation"  id="a6">
<h1 class="connect-container-title">СВЯЗАТЬСЯ С НАМИ</h1>

<div class="connect-container-info">


<div class="connect-container-info-form">


<form class="form">
<input type="text" class="name" placeholder="Введите Ваше имя">
<img src="images/line_form_adress.png" alt="" class="name-line-img">
<input type="email" class="adress" placeholder="Введите ваш e-mail">
<img src="images/line_form_adress.png" alt="" class="name-line-img">
<button class="button button_form"><div class="сonnect-container-info-form-button"> ОТПРАВИТЬ</div></button>
</form>

</div>

<div class="connect-container-info-contact">
<p class=" connect-container-info-contact-text">Наш номер телефона: <a class="number" href=" tel:+79215967243">
+79215967243</a></p>
<img src="images/line_form_adress.png" alt="" class="name-line-img">
<p class=" connect-container-info-contact-text">Наше местоположение: <a class="adress" href="https://goo.gl/maps/ko8kVqDp7s4DoMxx7">г. Санкт-Петербург, ул. Марата, д.5</a></p>
<img src="images/line_form_adress.png" alt="" class="name-line-img">
<p class=" connect-container-info-contact-text">Рабочие часы:
ежедневно с 09:00 до 21:00</p>
<img src="images/line_form_adress.png" alt="" class="name-line-img">
</div>

</div>

</div>
</div>
</main>`,

});







Vue.component('navig', {
    template: `<main class="block-navig">
                    

  <div id="nav-icon7"  :class="{open: isActive}">
  <span @click="showMenu"></span>
  <div class="dropdown-content" :class="{open: isActive}">
    <a  href="#a1" @click="showMenu">КОСМЕТОЛОГИЧЕСКАЯ КЛИНИКА EDELWEISS</a>
    <a  href="#a2" @click="showMenu">О НАС</a>
    <a  href="#a3" @click="showMenu">КОСМЕТОЛОГИЧЕСКИЕ УСЛУГИ</a>
    <a  href="#a4" @click="showMenu">НАШИ ДОСТОИНСТВА</a>
    <a  href="#a5" @click="showMenu">НАШИ ВРАЧИ</a>
    <a  href="#a6" @click="showMenu">СВЯЗАТЬСЯ С НАМИ</a>
  </div>
</div>

</main>`,
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        showMenu(){
            this.isActive=!this.isActive;

        }
    }
});





new Vue({
    el: "#app"
})
