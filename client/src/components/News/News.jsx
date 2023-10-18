import React from 'react'
import My_Navbar from '../navbar/My_Navbar'
import './News.css'
import '../../../dist/output.css'
import Footer from '../footer/Footer.jsx'

function News() {
  return (
    <>
    <div id="title" class='gird-news'>
      <header class="page-header absolute top-0 left-0 right-0 bg-black">
         <My_Navbar />
      </header>
      <div class="page-main-news "> 
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto max-w-7x1">
    <div class="flex flex-wrap w-full mb-4 p-4">
      <div class="w-full mb-6 lg:mb-0">
        <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">News</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div class="flex flex-wrap m-4">
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-white p-6 rounded-lg">
          <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src="https://spaceth.co/wp-content/uploads/2018/05/techly-voyager1-799x423.jpg" alt="Image Size 720x400"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">ยาน Voyager 2 ของ NASA ขาดการติดต่อกับโลกชั่วคราว</h2>
          
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-white p-6 rounded-lg">
          <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/1CAE/production/_118524370_upperatmospherejannispinter.png" alt="Image Size 720x400"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">ทำไมท้องฟ้าถึงเป็นสีฟ้า (Why is the Sky Blue?)</h2>
          
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-white p-6 rounded-lg">
          <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/392871902_887430019407967_3203451022473461417_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHzlikHJH1NtSpXJwveBB_8r1ptxj5Vo52vWm3GPlWjnVccveoXNDH5XwFlDhLQWRTV-maGiMNYxZ7880sQkKqG&_nc_ohc=FfYAf-NX0pcAX-KqP2Y&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfD-ipayqg7i7AQM45lVB3ezjM1SS4Xzpjswjo-wrCyIBw&oe=65356681" alt="Image Size 720x400"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Solar Flare</h2>
     
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-white p-6 rounded-lg">
          <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://scontent.fbkk29-7.fna.fbcdn.net/v/t39.30808-6/383227726_878457133638589_1376710746818769415_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFdK1XFzCnjFQSoOMBZV8-yR4Vjm9qGw4hHhWOb2obDiND01kdGxvtBIxhd__XschgGqZ-zbkxhsNR-zSgk3e4S&_nc_ohc=45HEthWKjMQAX-xm1RB&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfDJSkVbMdGRP8caFd-q_VUru0Y-exzzIoSz1pCK7myGqQ&oe=6535D28E" alt="Image Size 720x400"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">เหมืองโมสุมิ : จากพิษร้ายแรงจนถึงการศึกษาจิ๊กซอว์ของเอกภพ</h2>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
      <footer class="page-footer-news bg-black">
        <Footer/>
      </footer> 
    </div>
    </>
  )
}

export default News