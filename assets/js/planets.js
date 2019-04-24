// DECLARE VARIABLES AND FUNCTIONS
let scene, camera, renderer;

let sphere, torusA, torusB, torusC;
let planet;
let rings = [];
let delta = 0.05;


let createSaturn = function() {
    let geometry = new THREE.SphereGeometry(4, 30, 30);
    let material = new THREE.MeshNormalMaterial({wireframe: true});
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

let createTorus = function() {
    let geometryA = new THREE.TorusGeometry(2.5, 0.5, 2, 200);
    let geometryB = new THREE.TorusGeometry(5, 0.5, 2, 200);
    let geometryC = new THREE.TorusGeometry(7, 0.5, 2, 200);
    let material = new THREE.MeshNormalMaterial();
    torusA = new THREE.Mesh(geometryA, material);
    torusB = new THREE.Mesh(geometryB, material);
    torusC = new THREE.Mesh(geometryC, material);
    scene.add(torusA, torusB, torusC);
}

let createSphere = function() {
    let geometry = new THREE.SphereGeometry(1, 20, 20);
    let material = new THREE.MeshNormalMaterial();
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
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
    // createSphere();
    // createTorus();
    createSaturn();

    // create and set the size of the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add the scene, camera, and renderer to the DOM
    document.body.appendChild(renderer.domElement);
}

// MAIN LOOP
let loop = function() {
    // sphere.rotation.y += 0.01;
    // sphere.rotation.z += 0.01;

    // torusA.rotation.x += -0.01;
    // torusA.rotation.y += -0.03;

    // torusB.rotation.x += 0.01;
    // torusB.rotation.y += 0.02;

    // torusC.rotation.x += -0.01;
    // torusC.rotation.y += -0.04;

    planet.position.x += -delta;
    planet.position.y += -delta;
    // planet.position.z += -delta;

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

    renderer.render(scene, camera);
    requestAnimationFrame(loop);

}

// FUNCTION CALLS
init();
loop();