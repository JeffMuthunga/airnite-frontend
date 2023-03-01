import React from "react";


//Footer component
function Footer(){

    return(
        <footer>
        <div class="container">
            <p>Copyright ©2022 Jeff Wainaina</p>
            <nav>
            <ul>
                <li><a href="./home">Home</a></li>
                <li><a href="/properties">Properties</a></li>
                <li><a href="/add">Admin</a></li>
                <li><a href="/home">Contact</a></li>
            </ul>
            </nav>
            <div class="social-icons">
            <a href="https://facebook.com"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
            </div>
            <p>Contact us: <a href="mailto:jeff.wainaina@student.moringaschool.com">jeff.wainaina@student.moringaschool.com</a></p>
        </div>
        </footer>

    )
}

export default Footer
