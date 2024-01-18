import React, { useEffect } from 'react';
import * as THREE from 'three';

const Carousel = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(4, 4, 4); // Increase cube size

    const materials = [
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww&w=1000&q=80') }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1546464677-c25cd52c470b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60') }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZyZWUlMjBpbwFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60') }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80') }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww&w=1000&q=80') }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1546464677-c25cd52c470b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60') }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZyZWUlMjBpbwFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60') }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80') }),
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 8; // Adjust camera position for better visibility

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    });

  }, []);

  return (
    <div></div>
  );
};

export default Carousel;
