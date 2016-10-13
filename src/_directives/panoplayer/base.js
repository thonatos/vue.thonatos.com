/**
 *
 * play.js.
 *
 * @project     vue.thonatos.com
 * @datetime    17:09 - 16/9/8
 * @author      Thonatos.Yang <thonatos.yang@gmail.com>
 * @copyright   Thonatos.Yang <https://www.thonatos.com>
 *
 */

import MoveControls from './moveControls'

var STATS = require('./stats')
var THREE = require('three')
var VIDEO_ERROR = {
  1: 'video loading aborted',
  2: 'network loading error',
  3: 'video decoding failed / corrupted data or unsupported codec',
  4: 'video not supported'
}

export default function (bundleInterface, bundleProtected) {

  var obj = {}
  var _protected = bundleProtected || {}
  // _interface = bundleInterface || {}

  var camera
  var scene
  var renderer
  var video
  var videoCanvas
  var controls
  var container
  var videoTexture
  var videoContext
  var clock
  var videoMesh
  var requestID
  var stats

  _protected.init = function (options) {

    // Video
    video = document.createElement('video')
    video.width = 2048
    video.height = 1024
    video.autoplay = true
    video.setAttribute('loop', 'true')
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')
    video.setAttribute('preload', 'auto')
    video.setAttribute('crossorigin', 'anonymous')
    video.src = options.url || ''
    video.onerror = function () {
      var err = VIDEO_ERROR[video.error.code] || 'unknown'
      console.error(' (error.code=' + video.error.code + '):' + err)
    }

    video.addEventListener('play', function () {
      console.log('play', video.currentTime)
    }, false)

    video.addEventListener('canplay', function () {
      console.log('canplay', video.currentTime)
    }, false)

    // Canvas
    videoCanvas = document.createElement('canvas')
    videoCanvas.width = video.width
    videoCanvas.height = video.height
    videoContext = videoCanvas.getContext('2d')

    // WebGl
    videoTexture = new THREE.Texture(videoCanvas)
    // videoTexture.minFilter = THREE.LinearFilter
    videoTexture.minFilter = THREE.NearestFilter
    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 10000)
    scene = new THREE.Scene()
    videoMesh = new THREE.Mesh(new THREE.SphereGeometry(1000, 96, 48), new THREE.MeshBasicMaterial({
      // map: THREE.ImageUtils.loadTexture('test.jpg')
      map: videoTexture
    }))

    videoMesh.scale.x = -1
    scene.add(videoMesh)

    scene.add(_protected.createLabel('this is a test', 100, 'white', 'green'))

    // var size = 150
    // var geometry = new THREE.BoxGeometry(size, size, size)
    // var material = new THREE.MeshBasicMaterial({
    //   wireframe: true,
    //   wireframeLinewidth: 1
    // })
    // var mesh = new THREE.Mesh(geometry, material)
    // mesh.position.set(0, 0, 500)
    // scene.add(mesh)

    var helper = new THREE.GridHelper(1000, 100)
    helper.position.set = 0
    helper.material.opacity = 0.25
    helper.material.transparent = true
    scene.add(helper)

    var axis = new THREE.AxisHelper(500)
    axis.position.set(0, 0, 0)
    scene.add(axis)

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(container.clientWidth, container.clientHeight)

    container.appendChild(renderer.domElement)

    stats = new STATS()
    container.appendChild(stats.dom)

    clock = new THREE.Clock()
    controls = new MoveControls(camera, container)

  }

  _protected.createLabel = function (text, size, color, background) {
    var width
    var margin = 20
    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')

    ctx.font = size + 'px arial'
    width = ctx.measureText(text).width

    canvas.width = width + margin
    canvas.height = size + margin

    ctx.fillStyle = background
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = color
    ctx.font = size + 'px arial'
    ctx.fillText(text, canvas.width / 2, canvas.height / 2)

    var texture = new THREE.Texture(canvas)
    texture.needsUpdate = true

    var material = new THREE.MeshBasicMaterial({
      map: texture
    })

    var mesh = new THREE.Mesh(new THREE.PlaneGeometry(canvas.width, canvas.height), material)
    mesh.position.set(0, 100, 100)
    // mesh.rotation.set(0, Math.PI / 2, 0)
    return mesh
  }

  _protected.animate = function () {
    requestID = requestAnimationFrame(_protected.animate)
    _protected.render()
  }

  _protected.render = function () {
    videoContext.drawImage(video, 0, 0)
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      videoTexture.needsUpdate = true
    }
    renderer.render(scene, camera)

    // for update
    var delta = clock.getDelta()
    controls.update(delta)
    stats.update()
  }

  obj.init = function (element, options) {
    container = element
    _protected.init(options)
    _protected.animate()
    video.play()
  }

  obj.mute = function (mute) {
    // !!video
    if (video) {
      video.muted = mute
    }
  }

  obj.resize = function () {
    console.log('resize')
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  }

  obj.dispose = function () {
    video.pause()
    cancelAnimationFrame(requestID)
  }

  return obj
}
