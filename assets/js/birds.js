// DECLARE VARIABLES AND FUNCTIONS
let scene, camera, renderer, plane, cube, text1, text2;

let fontJSON = { "glyphs": { "A": { "ha": 953, "x_min": -7, "x_max": 958, "o": "m 476 967 l 172 33 l 172 35 q 149 1 164 14 q 114 -12 135 -12 q 92 -10 103 -12 q 71 -6 82 -8 l 72 -6 q 14 83 -7 19 l 331 1046 q 355 1083 338 1068 q 396 1101 372 1099 q 442 1108 419 1106 q 476 1110 464 1110 q 511 1108 489 1110 q 557 1103 533 1106 q 595 1082 576 1100 q 624 1046 614 1064 q 781 565 701 807 q 939 83 861 322 q 881 -6 958 19 q 860 -10 869 -8 q 840 -12 851 -12 q 805 1 821 -12 q 782 35 789 14 l 782 33 l 476 967 m 581 333 q 549 258 581 289 q 474 226 518 226 q 399 258 429 226 q 368 333 368 289 q 399 409 368 378 q 474 440 429 440 q 549 409 518 440 q 581 333 581 378 z " }, "C": { "ha": 950, "x_min": 110, "x_max": 860, "o": "m 860 222 q 785 54 860 110 q 710 13 749 28 q 636 -1 672 -1 l 333 -1 q 259 13 297 -1 q 185 54 221 28 q 129 123 149 82 q 110 222 110 164 l 110 882 q 129 980 110 938 q 185 1049 149 1022 l 183 1049 q 258 1088 219 1072 q 333 1103 297 1103 l 636 1103 q 711 1088 672 1103 q 786 1049 750 1072 l 785 1049 q 840 980 821 1022 q 860 882 860 938 l 860 786 q 776 719 860 719 q 694 786 694 719 l 694 869 q 674 933 694 904 q 601 963 653 963 l 368 963 q 296 933 317 963 q 275 869 275 904 l 275 233 q 296 168 275 197 q 368 139 317 139 l 601 139 q 674 168 653 139 q 694 233 694 197 l 694 314 q 776 379 694 379 q 860 314 860 379 l 860 222 z " }, "E": { "ha": 800, "x_min": 113, "x_max": 764, "o": "m 200 -1 q 131 25 149 -1 q 113 83 113 51 l 113 1019 q 131 1077 113 1051 q 200 1103 149 1103 l 683 1103 q 738 1033 735 1103 q 683 963 740 963 l 276 963 l 276 139 l 708 139 q 761 71 760 139 q 708 -1 764 -1 l 200 -1 m 632 574 q 598 492 632 525 q 515 458 564 458 q 435 492 468 458 q 401 574 401 525 q 435 656 401 622 q 515 689 468 689 q 598 656 564 689 q 632 574 632 622 z " }, "J": { "ha": 750, "x_min": 58, "x_max": 638, "o": "m 638 222 q 563 54 638 110 q 488 13 526 28 q 414 -1 450 -1 l 281 -1 q 206 13 244 -1 q 132 54 168 28 q 58 222 58 108 l 58 314 q 139 379 58 379 q 222 314 222 379 l 222 233 q 243 168 222 197 q 315 139 264 139 l 379 139 q 451 168 431 139 q 472 233 472 197 l 472 1043 q 554 1110 472 1110 q 638 1043 638 1110 l 638 222 z " }, "K": { "ha": 904, "x_min": 110, "x_max": 900, "o": "m 699 1086 q 746 1111 719 1111 q 806 1085 775 1111 q 831 1054 821 1069 q 842 1024 842 1039 q 824 981 842 999 l 638 764 l 275 338 l 275 58 q 192 -8 275 -8 q 110 58 110 -8 l 110 1043 q 192 1110 110 1110 q 275 1043 275 1110 l 275 589 l 699 1086 m 501 426 q 488 474 488 446 q 522 540 488 515 l 521 540 q 576 560 549 560 q 621 529 603 560 l 889 138 l 888 139 q 900 97 900 119 q 864 33 900 61 l 865 33 q 836 18 850 24 q 811 13 822 13 q 788 21 800 13 q 765 42 776 29 l 501 426 z " }, "M": { "ha": 1193, "x_min": 103, "x_max": 1108, "o": "m 963 1110 q 1060 1089 1007 1110 q 1108 1015 1108 1069 l 1108 58 q 1026 -8 1108 -8 q 944 58 944 -8 l 944 772 l 904 776 l 849 596 l 682 40 q 607 -7 667 -8 q 561 7 581 -6 q 535 43 542 19 l 435 367 q 374 562 404 463 q 307 782 343 661 l 267 776 l 267 58 q 185 -8 267 -8 q 103 58 103 -8 l 103 1015 q 151 1089 103 1068 q 250 1108 203 1110 q 293 1103 271 1108 q 335 1087 315 1097 q 369 1060 354 1076 q 393 1024 385 1044 l 611 281 q 661 458 635 363 q 715 653 688 554 q 770 848 743 751 q 821 1028 797 944 q 844 1063 829 1047 q 879 1088 860 1078 q 920 1104 899 1099 q 963 1110 942 1110 z " }, "O": { "ha": 958, "x_min": 110, "x_max": 860, "o": "m 636 1103 q 711 1088 672 1103 q 786 1049 750 1072 l 785 1049 q 840 980 821 1022 q 860 882 860 938 l 860 222 q 785 54 860 110 q 710 13 749 28 q 636 -1 672 -1 l 333 -1 q 259 13 297 -1 q 185 54 221 28 q 129 123 149 82 q 110 222 110 164 l 110 882 q 129 980 110 938 q 185 1049 149 1022 l 183 1049 q 258 1088 219 1072 q 333 1103 297 1103 l 636 1103 m 601 139 q 674 168 653 139 q 694 233 694 197 l 694 869 q 674 933 694 904 q 601 963 653 963 l 368 963 q 296 933 317 963 q 275 869 275 904 l 275 233 q 296 168 275 197 q 368 139 317 139 l 601 139 z " }, "R": { "ha": 936, "x_min": 111, "x_max": 918, "o": "m 504 457 l 397 457 q 360 476 374 457 q 347 526 347 494 q 406 597 347 597 l 568 597 q 640 626 619 597 q 661 690 661 656 l 661 869 q 640 933 661 904 q 568 963 619 963 l 275 963 l 275 57 q 193 -10 275 -10 q 111 57 111 -10 l 111 1019 q 137 1086 111 1069 q 199 1103 163 1103 l 603 1103 q 678 1088 639 1103 q 753 1049 717 1072 l 751 1049 q 807 980 788 1022 q 826 882 826 938 l 826 679 q 751 511 826 567 q 719 490 736 500 q 683 471 701 481 l 906 104 q 914 86 910 97 q 918 68 918 75 q 871 4 918 35 l 871 6 q 817 -14 839 -14 q 765 18 785 -14 l 767 17 l 504 457 z " }, "Y": { "ha": 864, "x_min": 33, "x_max": 836, "o": "m 517 56 q 435 -11 517 -11 q 353 56 353 -11 l 353 425 l 42 1017 q 33 1054 33 1035 q 81 1114 33 1094 l 79 1114 q 128 1125 110 1125 q 183 1089 164 1125 l 436 614 q 496 727 464 667 q 560 850 528 788 q 625 974 593 913 q 686 1089 657 1035 q 710 1115 697 1106 q 743 1125 724 1125 q 789 1114 763 1125 l 788 1114 q 836 1053 836 1093 q 835 1035 836 1044 q 828 1017 833 1026 q 797 956 815 992 q 744 855 778 919 q 656 687 710 790 q 517 421 601 583 l 517 56 z " } }, "familyName": "Gugi", "ascender": 1192, "descender": -197, "underlinePosition": -278, "underlineThickness": 56, "boundingBox": { "yMin": -235, "xMin": -32, "yMax": 1203, "xMax": 1411 }, "resolution": 1000, "original_font_information": { "format": 0, "copyright": "Copyright (c) 2017 by TAE System & Typefaces Co.. All rights reserved.", "fontFamily": "Gugi", "fontSubfamily": "Regular", "uniqueID": "3.00;SWAP;Gugi-Regular", "fullName": "Gugi Regular", "version": "Version 3.00", "postScriptName": "Gugi-Regular", "licenceURL": "http://scripts.sil.org/OFL" }, "cssFontWeight": "normal", "cssFontStyle": "normal" };



let createText = function() {
    let loader = new THREE.FontLoader();
    let font = new loader.parse(fontJSON);
    let geometry1 = new THREE.TextGeometry('JOMAR', {
        font: font,
        size: 0.4,
        height: 0.25
    });
    let geometry2 = new THREE.TextGeometry('YOCKEY', {
        font: font,
        size: 0.4,
        height: 0.25
    });
    let material = new THREE.MeshNormalMaterial();
    text1 = new THREE.Mesh(geometry1, material);
    text2 = new THREE.Mesh(geometry2, material);
    text1.position.x = -1;
    text1.position.y = 0.6;
    text2.position.x = -1.1;
    scene.add(text1, text2);
}


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
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 10;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    
    createText();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);
}

// MAIN ANIMATION LOOP
let loop = function() {
    text1.rotation.x += -0.05;
    text2.rotation.x += 0.05;

    renderer.render(scene, camera);
    requestAnimationFrame(loop);
}

// MAIN FUNCTION CALLS
init();
loop();

