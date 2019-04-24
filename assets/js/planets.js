// DECLARE VARIABLES AND FUNCTIONS
let scene, camera, renderer;

let sphere, torusA, torusB, torusC;

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
    createSphere();
    createTorus();

    // create and set the size of the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add the scene, camera, and renderer to the DOM
    document.body.appendChild(renderer.domElement);
}

// MAIN LOOP
let loop = function() {
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;

    torusA.rotation.x += -0.01;
    torusA.rotation.y += -0.03;

    torusB.rotation.x += 0.01;
    torusB.rotation.y += 0.02;

    torusC.rotation.x += -0.01;
    torusC.rotation.y += -0.04;

    renderer.render(scene, camera);
    requestAnimationFrame(loop);

}

// FUNCTION CALLS
init();
loop();