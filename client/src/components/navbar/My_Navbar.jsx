import React from 'react'
import './my_navbar.css'
import '../../../dist/output.css'
import '../News/News.jsx'


function My_Navbar() {
  
  return (
  <>
    <div class="nav-display nav-font ">
      <a href="" class="logo tracking-widest">AWAGARD</a>

        <nav class="">
          <ul class="flex items-stretch nav-style ">
            <li><a href="/">HOME</a></li>
            <li><a href="News">News</a></li>
            <li><a href="Shop">SHOP</a></li>
            <li><a href="Blog">BLOG</a></li>
            <li><a href="Contact">CONTACT US</a></li>
          </ul>
        </nav>

        <ul class="nav-style">
          <li><a href="Login">LOGIN</a></li>
        </ul>
    </div>
  </>
  )
}

export default My_Navbar