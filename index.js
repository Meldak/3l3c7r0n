const remote = require('electron').remote
const main = remote.require('./main.js')

//let button = document.createElement('button')
//button.textContent = "Open Window"
//document.body.appendChild(button)

//button.addEventListener('click', () => {
//	main.openWindow()
//})

document getElementById('drag').ondragstart = (event) => {
	event.preventDefault()
	ipcRender.send('ondragstart','./item')
}