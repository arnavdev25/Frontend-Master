function navbar() {
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
       <svg class="diagonal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><defs><linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#c02d28"></stop><stop offset="100%" stop-color="#e66225"></stop></linearGradient></defs><polygon points="0,2 0,0 100,0 100,10" fill="url(#linear)"></polygon></svg>
   </nav>`;
}

export default navbar;
