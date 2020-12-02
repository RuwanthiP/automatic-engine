import React from 'react'

function Navbar (){
    
        return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/useme">NameList</a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
        );
    
}
export default Navbar

