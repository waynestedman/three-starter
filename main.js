const scene = new THREE.Scene();

const container = document.getElementById('sceneContainer');

// Create the camera
const fov = 75; // field of view
const aspect = container.innerWidth / container.innerHeight; // aspect ratio
const near = 0.1; // near clipping plane
const far = 1000; // far clipping plane
const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( container.innerWidth, container.innerHeight);


// Render or Animate the scene
const animate = function () {
  requestAnimationFrame( animate );

  // add animations here

  renderer.render( scene, camera );
}; // animate

animate();