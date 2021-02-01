import './style.css'

import * as THREE from "three"

const sizes = {
  width: 800,
  height: 600
}

const scene = new THREE.Scene()

// a Mesh is combination of geometry (shape) and material (how it looks)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// a Camera is the point of view for the scene
const fieldOfView = 75; // how focused you are on a point vs. a wide view
const aspectRatio = sizes.width / sizes.height; // the width divided by height of scene
const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio)
// move the camera so we can see the cube
camera.position.x = 1
camera.position.z = 3
scene.add(camera)

const canvas = document.querySelector(".webgl")
// a Renderer is the scene from the camera's point of view, result is drawn on a canvas
// renderers can be CSS or SVG or WebGL
const renderer = new THREE.WebGLRenderer({
  canvas
})
renderer.setSize(sizes.width, sizes.height)

// .render takes a scene and a camera
renderer.render(scene, camera)