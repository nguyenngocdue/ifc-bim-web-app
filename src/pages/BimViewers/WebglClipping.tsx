import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import Stats from "three/addons/libs/stats.module.js";

const WebglClipping: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let object: THREE.Mesh;
    let stats: Stats;
    let gui: GUI;
    let startTime = Date.now();

    // Scene & Renderer Setup
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.localClippingEnabled = true;

    // Camera Setup
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.25, 50);
    camera.position.set(0, 1.3, 3);

    // Lighting Setup
    scene.add(new THREE.AmbientLight(0xcccccc));
    const spotLight = new THREE.SpotLight(0xffffff, 60);
    spotLight.angle = Math.PI / 5;
    spotLight.penumbra = 0.2;
    spotLight.position.set(2, 3, 3);
    spotLight.castShadow = true;
    spotLight.shadow.camera.near = 3;
    spotLight.shadow.camera.far = 10;
    spotLight.shadow.mapSize.set(1024, 1024);
    scene.add(spotLight);

    const dirLight = new THREE.DirectionalLight(0x55505a, 3);
    dirLight.position.set(0, 3, 0);
    dirLight.castShadow = true;
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 10;
    dirLight.shadow.camera.right = 1;
    dirLight.shadow.camera.left = -1;
    dirLight.shadow.camera.top = 1;
    dirLight.shadow.camera.bottom = -1;
    dirLight.shadow.mapSize.set(1024, 1024);
    scene.add(dirLight);

    // Clipping Planes
    const localPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0.3);
    const globalPlane = new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0.2);
    const globalPlanes: THREE.Plane[] = [globalPlane];
    const Empty: THREE.Plane[] = [];
    renderer.clippingPlanes = Empty;

    // Material & Object
    const material = new THREE.MeshPhongMaterial({
      color: 0x80ee10,
      shininess: 100,
      side: THREE.DoubleSide,
      clippingPlanes: [localPlane],
      clipShadows: true,
      alphaToCoverage: true,
    });

    const geometry = new THREE.TorusKnotGeometry(0.4, 0.08, 95, 20);
    object = new THREE.Mesh(geometry, material);
    object.castShadow = true;
    scene.add(object);

    // Ground Plane
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(5,5),
      new THREE.MeshPhongMaterial({ color: 0xa0adaf, shininess: 150 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1, 0);
    controls.update();

    // Stats
    stats = new Stats();

    // GUI Setup
    gui = new GUI();
    gui.add({ alphaToCoverage: true }, "alphaToCoverage").onChange((value) => {
      ground.material.alphaToCoverage = value;
      ground.material.needsUpdate = true;
      material.alphaToCoverage = value;
      material.needsUpdate = true;
    });

    const folderLocal = gui.addFolder("Local Clipping");
    folderLocal.add(renderer, "localClippingEnabled").name("Enabled");
    folderLocal.add(material, "clipShadows").name("Shadows");
    folderLocal.add(localPlane, "constant", 0.3, 1.25).name("Plane");

    const folderGlobal = gui.addFolder("Global Clipping");
    folderGlobal.add({
      get Enabled() { return renderer.clippingPlanes !== Empty; },
      set Enabled(v) { renderer.clippingPlanes = v ? globalPlanes : Empty; }
    }, "Enabled");
    folderGlobal.add(globalPlane, "constant", -0.4, 3).name("Plane");

    // Append Elements
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
      mountRef.current.appendChild(stats.dom);
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      const time = (Date.now() - startTime) / 1000;
      object.rotation.x = time * 0.5;
      object.rotation.y = time * 0.2;
      object.scale.setScalar(Math.cos(time) * 0.125 + 0.875);
      renderer.render(scene, camera);
      stats.update();
    }
    animate();

    // Window Resize Handler
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        mountRef.current.removeChild(stats.dom);
      }
      gui.destroy();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default WebglClipping;
