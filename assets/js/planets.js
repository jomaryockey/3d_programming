// DECLARE VARIABLES AND FUNCTIONS
let scene, camera, renderer;

let ico1;
let planet;
let donuts = [];
let rings = [];

let delta = 0.05;
let theta = 0.1;
let gamma = 0.1;
let beta = 0.001;

let createIco = function() {
    let geometryA = new THREE.IcosahedronGeometry(50, 6);
    let geometryB = new THREE.IcosahedronGeometry(30, 5);
    let material = new THREE.MeshNormalMaterial({wireframe: true});
    ico1 = new THREE.Mesh(geometryA, material);
    ico2 = new THREE.Mesh(geometryB, material);
    scene.add(ico1, ico2);
}

let createSaturn = function() {
    let geometry = new THREE.SphereGeometry(4, 30, 30);
    let material = new THREE.MeshNormalMaterial();
    planet = new THREE.Mesh(geometry, material);
    scene.add(planet);

    geometry = new THREE.TorusGeometry(5.1, 0.7, 2, 500);
    let ring = new THREE.Mesh(geometry, material);
    rings.push(ring);

    geometry = new THREE.TorusGeometry(6.9, 0.7, 2, 500);
    ring = new THREE.Mesh(geometry, material);
    rings.push(ring);

    geometry = new THREE.TorusGeometry(8.5, 0.7, 2, 500);
    ring = new THREE.Mesh(geometry, material);
    rings.push(ring);

    rings.forEach(ring => {
        ring.rotation.x = 1.7;
        ring.rotation.y = 0.5;
        scene.add(ring);
    });
}

let randomRange = function(from, to) {
    let x = Math.random() * (to - from);
    return x + from;
}

let createDonut = function () {
    let geometry = new THREE.TorusKnotGeometry(2, 1, 20, 100);
    let material = new THREE.MeshNormalMaterial({wireframe: true});
    torus = new THREE.Mesh(geometry, material);

    torus.position.x = randomRange(-50, 50);
    torus.position.y = 30;
    torus.position.z = randomRange(-50, -30);

    scene.add(torus);
    donuts.push(torus);
}

// INITIALIZE THE SCENE
let init = function() {
    // create the scene
    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xababab);

    // create and positon the camera
    camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.z = 50;

    // call polygon functions
    createIco();
    createSaturn();

    // create and set the size of the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add the scene, camera, and renderer to the DOM
    document.body.appendChild(renderer.domElement);
}

// MAIN LOOP
let loop = function() {
    ico1.position.y += delta;
    ico1.rotation.z += beta;

    ico2.rotation.y += beta;
    ico2.rotation.z -= beta;

    planet.position.x += -delta;
    planet.position.y += -delta;
    

    planet.rotation.x += 0.01;
    planet.rotation.y += 0.02;
    planet.rotation.z += 0.01;

    rings.forEach(ring => {
        ring.rotation.x += 0.05;
        ring.rotation.y += -0.02;
        ring.rotation.z += -0.05;
    });

    rings[0].rotation.x += -0.02;
    rings[0].rotation.y += -0.02;
    rings[0].rotation.z += -0.02;

    rings[0].position.y += delta;
    rings[0].position.x += delta;
    rings[0].position.z += delta;

    rings[1].position.y += 1.2 * -delta;
    rings[1].position.x += 1.2 * -delta;
    rings[1].position.z += 1.2 * -delta;

    rings[2].position.y += 1.2 * delta;
    rings[2].position.x += 1.2 * delta;
    rings[2].position.z += 1.2 * delta;


    camera.position.y += delta;
    if(camera.position.y >= 5 || camera.position.y <= -5) {
        delta *= -1;
    }
    
    let random = Math.random();
    if(random < 0.05) {
        createDonut();
    }

    donuts.forEach(torus => {
        torus.position.y -= theta;
        torus.position.x += gamma;
        if(torus.position.x >= 15 || torus.position.x <= -5) {
            gamma *= -1;
        }
        torus.rotation.x += theta;
        torus.rotation.y += theta;
        torus.rotation.z += delta;
    });

    renderer.render(scene, camera);
    requestAnimationFrame(loop);

}

// FUNCTION CALLS
init();
loop();