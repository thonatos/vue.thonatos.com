/**
 *
 * orbitControls.
 *
 * @project     localhost_panoplayer
 * @datetime    14:55 - 28/07/2015
 * @author      Thonatos.Yang <thonatos.yang@gmail.com>
 * @copyright   Thonatos.Yang <https://www.thonatos.com>
 *
 */

var THREE = require('three')

export default function (object, domElement) {

  var _this = this
  var lon = 0
  var lat = 0
  var phi = 0
  var theta = 0
  var distance = 500

  _this.enabled = true
  _this.object = object
  _this.object.target = new THREE.Vector3(0, 0, 0)
  _this.domElement = (domElement !== undefined) ? domElement : document

  _this.prop = {}
  _this.prop.mousePositionRelative = [0, 0]

  function getContainerDimensions () {

    return _this.domElement !== document ? {
      size: [_this.domElement.offsetWidth, _this.domElement.offsetHeight],
      offset: [_this.domElement.offsetLeft, _this.domElement.offsetTop]
    } : {
      size: [window.innerWidth, window.innerHeight],
      offset: [0, 0]
    }
  }

  function onMouseMove (event) {

    event.preventDefault()

    if (_this.enabled === false) return

    // absolute axis
    var aX = event.pageX || 0
    var aY = event.pageY || 0

    _this.prop.mousePosition = [aX, aY]

    // relative axix
    var dims = _this.prop.dims
    var mousePosition = _this.prop.mousePosition
    var containerOffset = dims.offset
    var containerSize = dims.size

    var rX = mousePosition[0] - containerOffset[0]
    var rY = mousePosition[1] - containerOffset[1]

    // change axis to container center(x/2,y/2)
    _this.prop.mousePositionRelative = [rX - containerSize[0] / 2, rY - containerSize[1] / 2]

  }

  _this.connect = function () {
    _this.prop.dims = getContainerDimensions()
    _this.domElement.addEventListener('mousemove', onMouseMove, false)
  }

  _this.disconnect = function () {
    _this.domElement.removeEventListener('mousemove', onMouseMove, false)
    _this.enabled = false
  }

  _this.update = function () {

    if (!_this.enabled) return

    lon = _this.prop.mousePositionRelative[0] * 0.2
    lat = -_this.prop.mousePositionRelative[1] * 0.1
    // lat = Math.max(-90, Math.min(90, lat))

    phi = THREE.Math.degToRad(lat)
    theta = THREE.Math.degToRad(lon) + Math.PI * 0.5

    _this.object.position.x = distance * Math.sin(theta) * Math.cos(phi)
    _this.object.position.y = distance * Math.sin(phi)
    _this.object.position.z = distance * Math.cos(phi) * Math.cos(theta)
    _this.object.lookAt(_this.object.target)

    // _this.object.position.y = distance * Math.sin(phi + Math.PI/6)
  }

  _this.connect()
}

