import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
import { Scene, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-for-business-page',
  templateUrl: './for-business-page.component.html',
  styleUrls: ['./for-business-page.component.scss']
})
export class ForBusinessPageComponent implements OnInit {
  scene: Scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  renderer = new THREE.WebGLRenderer();


  constructor() {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );

    const geometry = new THREE.PlaneGeometry(2.5, 1, 1);
    const texture = new THREE.TextureLoader().load( '/assets/img/logoB2B.svg' );
    const material = new THREE.MeshBasicMaterial( { map: texture } );
    const cube = new THREE.Mesh( geometry, material );
    this.scene.add( cube );
    this.camera.position.z = 10;
    
    const animate = () => {
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(animate)
    }
    animate()
  }

  ngOnInit() {}

}
