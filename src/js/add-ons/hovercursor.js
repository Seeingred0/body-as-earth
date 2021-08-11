// import hoverEffect from 'hover-effect';
import gsap from "gsap";
import * as THREE from 'three';
import hoverEffect from 'hover-effect/dist/hover-effect.umd';
import Cursor from './cursor';
import Chloe1 from './Chloe1.jpg';
import Chloe2 from './Chloe2.jpg'
import displacement from './4.png'

const cursor = new Cursor(document.querySelector('.cursor'));

[...document.querySelectorAll('a')].forEach(el => {
    el.addEventListener('mouseenter', () => cursor.emit('enter'));
    el.addEventListener('mouseleave', () => cursor.emit('leave'));
});



new hoverEffect({

    parent: document.querySelector('.img'),
    intensity: 0.7,
    image1: Chloe1,
    image2: Chloe2,
    displacementImage: displacement,
    // image1: 'https://i.ibb.co/Brf10FK/Chloe1.jpg',
    // image2: 'https://i.ibb.co/ChJb62r/Chloe2.jpg',
    imagesRatio: ' 1.5'

});

console.log('alive')






