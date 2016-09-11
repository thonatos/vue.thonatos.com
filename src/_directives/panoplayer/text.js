/**
 *
 * text.
 *
 * @project     vue.thonatos.com
 * @datetime    14:08 - 16/9/9
 * @author      Thonatos.Yang <thonatos.yang@gmail.com>
 * @copyright   Thonatos.Yang <https://www.thonatos.com>
 *
 */


var canvas = document.createElement('canvas')
var ctx = canvas.getContext('2d')
var data = 'data:image/svg+xml,' +
  '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
  '<foreignObject width="100%" height="100%">' +
  '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:12px">' +
  '<ul> <li style="color:red"> hello </li>  <li style="color:green">thomas</li> </ul> ' +
  '</div>' +
  '</foreignObject>' +
  '</svg>'

var img = new Image()
img.src = data
img.onload = function () { ctx.drawImage(img, 0, 0) }
var textMesh = new THREE.Mesh(new THREE.SphereGeometry(1000, 96, 48), new THREE.MeshBasicMaterial({
  // map: THREE.ImageUtils.loadTexture('test.jpg')
  map: new THREE.Texture(ctx)
}))
textMesh.scale.x = -1
textMesh.position.set(0, 0, 0)
scene.add(textMesh)
