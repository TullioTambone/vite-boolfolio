<script>

import { RouterLink } from 'vue-router';
export default{
    name: "HeaderComp",
    components: { RouterLink }
}
</script>

<template>
<nav>
    <div id="container">
        <div class="text-center p-4 top-layer">
            <h1>
                <a class="navbar-brand text-danger" href="#">RED</a>
            </h1>
            <h6 class="d-block">Web Developer</h6>
        </div>
        <ul class="d-flex flex-column">
            <li class="nav-item">
                <RouterLink class="nav-link active" aria-current="page" :to="{name: 'home'}">Home</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" :to="{name: 'projects'}">projects</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/">Contact</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink class="nav-link" to="/">Skills</RouterLink>
            </li>
        </ul>
        <div class="socials">
            <a class="fa-brands fa-linkedin-in"></a>
            <a href="https://github.com/TullioTambone" class="fa-brands fa-github"></a>
            <a href="https://www.instagram.com/tulliotambone/" class="fa-brands fa-instagram"></a>
            <a href= "mailto:tulliotambone97@gmail.com" class="fa-solid fa-envelope"></a>
        </div>

    </div>
</nav>
</template>

<style lang="scss" scoped>
nav{
    height: 100vh;
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #181818;
    #container{
        display: flex;
        flex-direction: column;
        .top-layer{
            h6{
                color: gray;
            }
            &:hover h6{
                color: white;
                transition: 0.2s linear;
            }
            &:hover{
                cursor: pointer;
            }
        }

        ul{
            padding: 0;
            text-align: center;
            border-top: 1px solid gray;
            li{
                border-bottom: 1px solid gray;
                color: gray;
                padding: 0.5rem;
                font-weight: 600;

                &:hover{
                    color: white;
                    transition: 0.2s linear;
                }
            }
        }

        .socials{
            display: flex;
            justify-content: center;

            a{
                margin: 0 0.5rem;
                color: gray;
                font-size: large;
                &:hover{
                    color: white;
                    transition: 0.2s linear;
                }
            }
        }
    }
}
</style>