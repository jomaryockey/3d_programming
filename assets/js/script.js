let scene, camera, renderer, cubeA, cubeB, cubeC;
let delta = 0.01;
let theta = 0.02;
let gamma = 0.05;

let createCube = function() {
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshNormalMaterial();
    cubeA = new THREE.Mesh(geometry, material);
    cubeB = new THREE.Mesh(geometry, material);
    cubeC = new THREE.Mesh(geometry, material);
    scene.add(cubeA, cubeB, cubeC);
}
// setup of the environment
// initalize the scene, camera objects and renderer
let init = function() {
    // create the scene
    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xababab);

    // create and positon the camera
    camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth/window.innerHeight,
        1,
        1000
    );
    camera.position.z = 10;


    // call the createCube function
    createCube();

    // create and set the size of the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add the scene, camera, and renderer to the DOM
    document.body.appendChild(renderer.domElement);
}

// function to run the main animation loop
let loop = function() {
    // cubeA movement
    cubeA.position.x += delta;
    cubeA.position.y -= theta;

    if (cubeA.position.x <= -2 || cubeA.position.x >= 2) {
        delta *= -1;
    }
    if (cubeA.position.y <= -2 || cubeA.position.y >= 2) {
        theta *= -1;
    }

    cubeA.rotation.x += delta;
    cubeA.rotation.y += theta;
    cubeA.rotation.z += gamma;

    // cubeB movement
    cubeB.position.x += -delta;
    cubeB.position.y -= -theta;

    if (cubeB.position.x <= -2 || cubeB.position.x >= 2) {
        delta *= -1;
    }
    if (cubeB.position.y <= -2 || cubeB.position.y >= 2) {
        theta *= -1;
    }

    cubeB.rotation.x += delta;
    cubeB.rotation.y += theta;
    cubeB.rotation.z += gamma;

    // cubeC movement
    cubeC.position.x += delta;
    cubeC.position.y -= -theta;

    if (cubeC.position.x <= -2 || cubeC.position.x >= 2) {
        delta *= -1;
    }
    if (cubeC.position.y <= -2 || cubeC.position.y >= 2) {
        theta *= -1;
    }

    cubeC.rotation.x += -delta;
    cubeC.rotation.y += -theta;
    cubeC.rotation.z += -gamma;

    renderer.render(scene, camera);
    requestAnimationFrame(loop);
}

// call the intial and main loop functions
init();
loop();