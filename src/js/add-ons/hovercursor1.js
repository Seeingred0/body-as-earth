// import hoverEffect from 'hover-effect';
import gsap from "gsap";
import * as THREE from 'three';
import Cursor from './cursor';

const cursor = new Cursor(document.querySelector('.cursor'));

[...document.querySelectorAll('a')].forEach(el => {
    el.addEventListener('mouseenter', () => cursor.emit('enter'));
    el.addEventListener('mouseleave', () => cursor.emit('leave'));
});










