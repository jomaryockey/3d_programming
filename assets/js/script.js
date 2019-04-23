// declare variables and functions
let scene, camera, renderer, cubeA, cubeB, cubeC, sphereA, sphereB, torus;
let donuts = [];
let delta = 0.01;
let theta = 0.01;
let gamma = 0.05;

let createCube = function() {
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshNormalMaterial();
    cubeA = new THREE.Mesh(geometry, material);
    cubeB = new THREE.Mesh(geometry, material);
    cubeC = new THREE.Mesh(geometry, material);
    scene.add(cubeA, cubeB, cubeC);
}

let createSphere = function() {
    let geometry = new THREE.SphereGeometry(0.5, 10, 10);
    let material = new THREE.MeshNormalMaterial({wireframe: true});
    sphereA = new THREE.Mesh(geometry, material);
    sphereB = new THREE.Mesh(geometry, material);
    scene.add(sphereA, sphereB);
}

let createTorus = function() {
    let geometry = new THREE.TorusGeometry(5, 5, 50, 50);
    let material = new THREE.MeshNormalMaterial({wireframe: true});
    torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
}

let axesHelper = function() {
    let axes = new THREE.AxesHelper(5);
    scene.add(axes);
}

// -----------------------------------------------------------------------------------*
// setup of the environment

// INITIALIZE THE SCENE
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
    
    // axesHelper();

    // call the createCube function
    createCube();
    // call the createSphere function
    createSphere();
    // call the createTorus function
    createTorus();

    // create and set the size of the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add the scene, camera, and renderer to the DOM
    document.body.appendChild(renderer.domElement);
}

// MAIN ANIMATION LOOP
let loop = function() {
    // torus movement
    torus.position.z += gamma;

    torus.rotation.x += -0.01;
    torus.rotation.y += gamma;
    torus.rotation.z += delta;


    // sphereA movement
    sphereA.position.x += -theta;
    sphereA.position.y += gamma;
    sphereA.position.z += delta;

    sphereA.rotation.x += 0.05;
    sphereA.rotation.y += 0.05;
    sphereA.rotation.z += 0.05;

    // sphereB movement
    sphereB.position.x += delta;
    sphereB.position.y += -gamma;
    sphereB.position.z += -theta;

    sphereB.rotation.x += -0.05;
    sphereB.rotation.y += -0.05;
    sphereB.rotation.z += -0.05;

    // cubeA movement
    cubeA.position.x += delta;
    cubeA.position.y -= theta;
    cubeA.position.z += gamma;

    if (cubeA.position.x <= -1 || cubeA.position.x >= 0.5) {
        delta *= -1;
    }
    if (cubeA.position.y <= -1 || cubeA.position.y >= 3) {
        theta *= -1;
    }
    if (cubeA.position.z <= -10 || cubeA.position.z >= 3) {
        gamma *= -1;
    }

    cubeA.rotation.x += delta;
    cubeA.rotation.y += theta;
    cubeA.rotation.z += gamma;

    // cubeB movement
    cubeB.position.x += -delta;
    cubeB.position.y -= -theta;
    cubeB.position.z -= -theta;

    cubeB.rotation.x += delta;
    cubeB.rotation.y += theta;
    cubeB.rotation.z += gamma;

    // cubeC movement
    cubeC.position.x += delta;
    cubeC.position.y -= -theta;
    cubeC.position.z -= delta * (Math.PI/2);

    cubeC.rotation.x += -delta;
    cubeC.rotation.y += -theta;
    cubeC.rotation.z += -gamma;

    renderer.render(scene, camera);
    requestAnimationFrame(loop);
}

// -----------------------------------------------------------------------------------*
// call the intial and main loop functions
init();
loop();