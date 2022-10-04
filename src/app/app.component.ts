import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { BufferGeometry, Scene, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scene: Scene = new THREE.Scene();
  camera: PerspectiveCamera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 500 );
  points: any = [];
  title = 'Nets';
  allPoints: any
  MAX_POINTS = 6000
  
  renderer = new THREE.WebGLRenderer();
  animate(){
    const positions = this.allPoints.geometry.attributes.position.array
    for ( let i = 0, l = this.MAX_POINTS; i <= l; i ++ ) {
      positions[ i*3 + 0 ] += 0;
      positions[ i*3 + 1 ] += 0;
      if(positions[ i*3 + 2 ]>100){
        positions[ i*3 + 2 ] = -100;
      }else{
       positions[ i*3 + 2 ] += 0.2;
      }
    }
    this.allPoints.geometry.attributes.position.needsUpdate = true;
    this.renderer.render( this.scene, this.camera );
    setTimeout(()=>this.animate(), 40)
  }
    constructor() {
      
      this.camera.position.set( 0, 0, 100 );
      this.camera.lookAt( 0, 0, 0 );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( this.renderer.domElement );
      
      for(let n = 0; n<=this.MAX_POINTS; n++){
        let star = new THREE.Vector3(
            300*Math.random() - 150,
            200*Math.random() - 100,
            200*Math.random() - 100
        );
        this.points.push(star)
      }
      let sprite = new THREE.TextureLoader().load('./assets/img/admin_page/star.svg');
      let material = new THREE.PointsMaterial({
        color: 0x888888,
        size: 0.8,
        map: sprite
      });

      const geometry = new THREE.BufferGeometry().setFromPoints( this.points );
      
      this.allPoints = new THREE.Points( geometry, material );
      this.scene.add( this.allPoints );
      requestAnimationFrame(()=>{this.animate()})
    }

}
