<template>
    <div id="particles-js">
        <div class="login">
           <div>O W E N</div>
        </div>
    </div>
</template>

<script>
import "@/assets/js/particles.min.js";
import particlesConfig from "@/assets/js/particles.json"
  export default {
      name:"login",
      data(){
          return {
            
          }
      },
      methods:{

      },
      mounted(){
          let _self = this;
          try {
              particlesJS("particles-js",{
 "particles": {
 "number": {
 "value": 80,
 "density": {
 "enable": true,
 "value_area": 800
 }
 },
 "color": {
 "value": "#ffffff"
 },
 "shape": {
 "type": "circle",
 "stroke": {
 "width": 0,
 "color": "#000000"
 },
 "polygon": {
 "nb_sides": 5
 },
 "image": {
 "src": "img/github.svg",
 "width": 100,
 "height": 100
 }
 },
 "opacity": {
 "value": 0.5,
 "random": false,
 "anim": {
 "enable": false,
 "speed": 1,
 "opacity_min": 0.1,
 "sync": false
 }
 },
 "size": {
 "value": 10,
 "random": true,
 "anim": {
 "enable": false,
 "speed": 80,
 "size_min": 0.1,
 "sync": false
 }
 },
 "line_linked": {
 "enable": true,
 "distance": 300,
 "color": "#ffffff",
 "opacity": 0.4,
 "width": 2
 },
 "move": {
 "enable": true,
 "speed": 12,
 "direction": "none",
 "random": false,
 "straight": false,
 "out_mode": "out",
 "bounce": false,
 "attract": {
 "enable": false,
 "rotateX": 600,
 "rotateY": 1200
 }
 }
 },
 "interactivity": {
 "detect_on": "canvas",
 "events": {
 "onhover": {
 "enable": false,
 "mode": "repulse"
 },
 "onclick": {
 "enable": true,
 "mode": "push"
 },
 "resize": true
 },
 "modes": {
 "grab": {
 "distance": 800,
 "line_linked": {
 "opacity": 1
 }
 },
 "bubble": {
 "distance": 800,
 "size": 80,
 "duration": 2,
 "opacity": 0.8,
 "speed": 3
 },
 "repulse": {
 "distance": 400,
 "duration": 0.4
 },
 "push": {
 "particles_nb": 4
 },
 "remove": {
 "particles_nb": 2
 }
 }
 },
 "retina_detect": true
})
          }
      }
  }

</script>

<style lang="less" scoped>
  .login{
      z-index: 2;
      position: absolute;
      width: 380px;
      border-radius: 5px;
      background: #fff;
      box-shadow: 0 0 5px #333;
      top: 50%;
      left:50%;
      margin-top:-250px;
      margin-left:-190px;
      transition: all 1s;
      -moz-transition: all 1s;
      -o-transition: all 1s;
  }
</style>