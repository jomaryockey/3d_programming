// DECLARE VARIABLES AND FUNCTIONS
let scene, camera, renderer, plane, cube;

let createPlane = function(size) {
    var geometry = new THREE.PlaneGeometry(size, size);
    var material = new THREE.MeshNormalMaterial({
        side: THREE.DoubleSide
    });
    var plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = Math.PI/2;
    scene.add(plane);
}

let createCube = function(w, l, h) {
    var geometry = new THREE.BoxGeometry(w, l, h);
    var material = new THREE.MeshNormalMaterial();
    var cube = new THREE.Mesh(geometry, material);
    cube.position.y = cube.geometry.parameters.height/2;
    scene.add(cube);
}

// INITIALIZE THE SCENE
let init = function() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.x = 5;
    camera.position.y = 10;
    camera.position.z = 10;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    
    
    createPlane(10);
    createCube(1, 1, 1);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
}

// MAIN ANIMATION LOOP
let loop = function() {

    renderer.render(scene, camera);
    requestAnimationFrame(loop);
}

// MAIN FUNCTION CALLS
init();
loop();

