import React, { useEffect, useContext } from 'react';
import { Center, shaderMaterial } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import DNA from "./dna-02.glb";
import * as THREE from 'three';
import { Vector2 } from 'three'
import { extend } from '@react-three/fiber';
import glsl from "babel-plugin-glsl/macro";
import { useRef } from 'react';
import { AppContext } from './components/Context';
import {motion} from "framer-motion-3d"



const color1 = new THREE.Color(0x143d7d);
const color2 = new THREE.Color(0xcfe1fc);
const color3 = new THREE.Color(0x82aff5);
const degrees_to_radians = (degrees) =>
{
  var pi = Math.PI;
  return degrees * (pi/180);
}


const DNAMaterial = shaderMaterial(
    {   color1: color1,
        color2: color2,
        color3: color3,
        uResolution: new Vector2(window.innerWidth, window.innerHeight)
        },
    glsl`
    uniform vec3 color2;
    uniform vec3 color3;
    varying vec2 vUv;
    varying vec3 vPosition;
    varying float vColorRandom;
    attribute float randoms;
    attribute float colorRandoms;
    void main() {
        vUv = uv;
        vColorRandom = colorRandoms;
        vec4 mvPosition = modelViewMatrix * vec4( position, 1.);
        gl_PointSize = (50. *randoms) * (1. / -mvPosition.z );
        gl_Position = projectionMatrix * mvPosition;
    }
    `,
    glsl`
    mat2 Rot(float a) {
        float s=sin(a), c=cos(a);
        return mat2(c,-s,s,c);
    }

    float Star(vec2 uv, float flare) {
        float disk = length(gl_PointCoord - vec2(0.5));
        float m = .02/disk;
        float rays = max(0., 1.-abs(uv.x * uv.y*50.));
        m += rays*flare;
        uv *= Rot(3.1415/4.);
        rays = max(0., 1.-abs(uv.x * uv.y*50.));
        m += rays *.2*flare;

        return m;
    }
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    varying vec2 vUv;
    varying float vColorRandom;
    uniform vec2 uResolution;
    void main() {
        vec2 uv = vUv;
        float disk = length(gl_PointCoord - vec2(0.5));
        float scale= 3.;
        vec2 uV =(gl_PointCoord-.5)*scale;
        vec3 col = vec3(0);
        float alpha = 1. - smoothstep(0.1,0.3,length(gl_PointCoord - vec2(0.5)));
        alpha *=0.9;
        vec3 finalColor = color1;


        if(vColorRandom>0.33 && vColorRandom<0.66){
            finalColor = color2;
        }
        if (vColorRandom>0.66){
            finalColor = color3;
        }
        col += Star(uV, 1.)*finalColor;
        float gradient = smoothstep(0.38,0.55,vUv.y);
        gl_FragColor = vec4(finalColor, alpha);
        gl_FragColor = vec4(col,alpha*gradient); //alpha*gradient
      }
    `
);

extend({ DNAMaterial });

function Points() {
    const{spin} = useContext(AppContext);

    const gltf = useLoader(GLTFLoader, DNA, loader => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath("/gltf/");
        loader.setDRACOLoader(dracoLoader);

       })

       let number = gltf.scene.children[0].geometry.attributes.position.array.length
       console.log();
       let randoms = new Float32Array(number/3);
       let colorRandoms = new Float32Array(number/3);
console.log(colorRandoms)
       for (let i = 0; i < number/3; i++) {
        randoms.set([Math.random()],i);
        colorRandoms.set([Math.random()], i);
       }
  return (
  <Center>
 <motion.points animate={[spin ? "pageIn": 'initial']} 
    variants={{
        initial: {rotateY: degrees_to_radians(360), transition:{ duration: 12, ease:"linear", repeat: Infinity}},
        pageIn:{ rotateY: degrees_to_radians(-720), transition: { duration: 3, ease: "circOut", repeat: Infinity }}
    }}
 >
    <bufferGeometry attach='geometry' {...gltf.scene.children[0].geometry}>
        <bufferAttribute attach="attributes-randoms" name="randoms" itemSize={1} array={randoms}/>
        <bufferAttribute attach="attributes-colorRandoms" name="colorRandoms" itemSize={1} array={colorRandoms}/>
    </bufferGeometry>
    <dNAMaterial transparent={true} depthTest={false} depthWrite={false}  />
 </motion.points>
 </Center>
  )
}

export default Points