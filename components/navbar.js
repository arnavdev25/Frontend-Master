function navbar() {
  return `<div class="header-wrap">
  <div class="left">
    <div class="logo">
      <a href="index.html">
        <img
          src="https://static.frontendmasters.com/assets/fm/js/static/frontendmasters.e1e10b58c1.svg"
          alt="Front-End"
        />
      </a>
    </div>
  </div>
  <div class="right">
    <ul>
      <li><a href="#">Courses</a></li>
      <li><a href="learn.html">Learn</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="Login.html">Login</a></li>
      <li><a href="joinnow.html">Join Now</a></li>
    </ul>
  </div>
  <div class="menu">
    <div class="icon">
    <i class="fas fa-bars"></i>
    </div>
  </div>
</div>
<div class="mobile">
    <ul>
      <li><a href="#">Courses</a></li>
      <li><a href="learn.html">Learn</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="Login.html">Login</a></li>
      <li><a href="joinnow.html">Join Now</a></li>
    </ul>
  </div>
<svg
  class="diagonal"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 10"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c02d28"></stop op>
      <stop offset="100%" stop-color="#e66225"></stop>
    </linearGradient>
  </defs>
  <polygon points="0,2 0,0 100,0 100,10" fill="url(#linear)"></polygon>
</svg>`;
}

export default navbar;
