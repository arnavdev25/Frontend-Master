function navbar(){
    return ` <nav class="navbar">
    <img src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg" id="logo">
       <ul class="nav-menu">
           <li class="nav-item">
               <a href="#" class="nav-link">Courses</a>
           </li>
           <li class="nav-item">
               <a href="#" class="nav-link">Learn</a>
           </li>
           <li class="nav-item">
               <a href="#" class="nav-link">Pricing</a>
           </li>
           <li class="nav-item">
               <a href="Login.html" class="nav-link">Login</a>
           </li>

           <li class="nav-item"><a  href=""><button>Join Now</button></a></li>
       </ul>
       <div class="hamburger">
           <span class="bar"></span>
           <span class="bar"></span>
           <span class="bar"></span>
       </div>
   </nav>`
}

export default navbar;