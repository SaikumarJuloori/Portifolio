// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
renderer.setClearColor(0x000000, 0); // Set clear color to transparent
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-animation').appendChild(renderer.domElement);

// Create a rotating octahedron
const geometry = new THREE.OctahedronGeometry(3);
const material = new THREE.MeshNormalMaterial(); // Use MeshNormalMaterial for color gradient effect
const octahedron = new THREE.Mesh(geometry, material);
scene.add(octahedron);

camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    octahedron.rotation.x += 0.01;
    octahedron.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive canvas
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
