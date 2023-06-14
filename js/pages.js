var navigationbar = `<nav class="">
<div>
    <a href="/index.html">
        <div id="logo"></div>
    </a>
    <ul id="navi">
    <li><a href="/Pages/models.html">Models</a></li>
    <li><a href="/Pages/textures.html">Textures</a></li>
    <li><a href="/Pages/edits.html">Edits</a></li>
    </ul>
    <div>
        <i class="fa fa-sun-o"></i>
    </div>
</div>
<div>
    <button class="btn" id="Login">Login</button>
    <button class="btn" id="sign">Sign Up</button>
    <button class="btn" id="cart"><i class="fa fa-cart-arrow-down"></i></button>
</div>

<div class="burger">
    <i class="fa fa-bars"></i>
</div>
<div class="sidebarnav">
    <div class="oologo"></div>
    <div id="logo"></div>
    <ul id="navi">
    <li><a href="/Pages/models.html">Models</a></li>
    <li><a href="/Pages/textures.html">Textures</a></li>
    <li><a href="/Pages/edits.html">Edits</a></li>
    </ul>

    <div>
        <button class="btn" id="Login">Login</button>
        <button class="btn" id="sign">Sign Up</button>
        <button class="btn" id="cart"><i class="fa fa-cart-arrow-down"></i></button>
    </div>
</div>
</nav>`

var footer = `<footer>
<div id="insidewall">
    <div class="details">
        <div id="logo"></div>
        <p class="cont1">A platform dedicated to providing high-quality services and a wide range of creative
            resources.</p>
        <p class="cont2">Unleash your creativity with our high-quality surface rendering services and creative
            resources. Discover 3D models, textures, and design assets tailored to architects, designers, and
            artists. Join our vibrant community at surfacerender.github.io and elevate your projects to new
            heights.</p>
    </div>
    <div class="linkdata">
        <div class="datatable">
            <ul>
                <li class="datahead">Assets</li>
                <li><a href="">Models</a></li>
                <li><a href="">Textures</a></li>
                <li><a href="">Edits</a></li>
            </ul>
            <ul>
                <li class="datahead">Software Links</li>
                <li><a href="https://www.blender.org/download/" target="_blank">Blender</a></li>
                <li><a href="https://www.adobe.com/in/products/photoshop.html?gclid=CjwKCAjwg-GjBhBnEiwAMUvNW8StI5zvtscy4FZqvbR5Uw7zVZMrdWrakcA8JOriKe_TI6sk4zoTVxoCCioQAvD_BwE&sdid=SGDJMMG3&mv=search&ef_id=CjwKCAjwg-GjBhBnEiwAMUvNW8StI5zvtscy4FZqvbR5Uw7zVZMrdWrakcA8JOriKe_TI6sk4zoTVxoCCioQAvD_BwE:G:s&s_kwcid=AL!3085!3!444587838671!e!!g!!photoshop%20download!221442788!17534777948"
                        target="_blank">Photoshope</a></li>
            </ul>
            <ul>
                <li class="datahead">Account</li>
                <li><a href="">Login</a></li>
                <li><a href="">Sign Up</a></li>
            </ul>
            <ul>
                <li class="datahead">Help ?</li>
                <li><a href="mailto:surfacerender1@gmail.com" target="_blank">Contact us</a></li>
            </ul>
        </div>
    </div>
</div>

<div class="social">
    <div class="socialmedia">
        <div class="socialicons">
            <a href="https://github.com/surfacerender">
                <i class="fa fa-github"></i>
            </a>
            <a href="">
                <i class="fa fa-instagram"></i>
            </a>

        </div>
        <span id="copyright">
            © Copyright 2023 surfacerender
        </span>
    </div>
    <span id="terms">
        <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>License</li>
        </ul>
    </span>
</div>
</footer>`

var myvar1 = document.getElementById('Headerdiv');
myvar1.innerHTML = navigationbar;

var myvar2 = document.getElementById('Footerdiv');
myvar2.innerHTML = footer;