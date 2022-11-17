
// 1
function gkfo() {
	let elem = document.createElement('option')
	let opt = document.querySelector('.select')
	opt.insertAdjacentElement("afterbegin", elem)
	elem.value = 'classic'
	elem.innerHTML = 'Классика'
	elem.selected = true
	
}
gkfo()

// 2
let area = null
let text = document.querySelector('.view')

text.onclick = function() {
	this.remove()
	area = document.createElement("textarea")
	document.querySelector('.kgi').appendChild(area)
	area.setAttribute('class', 'view')
	area.innerHTML = text.innerHTML
	area.focus()
	area.onkeydown = function(event) {
		if (event.key == 'Enter') {
			this.onblur()
		}
	}
	area.onblur = function() {
		this.remove()
		document.querySelector(".kgi").appendChild(text)
		text.setAttribute('class', 'view')
		text.innerHTML = this.value
	}
}

// 3

document.querySelector('.btn').onclick = function () {
	let dep = Number(document.getElementById('input__dep').value)
	let mon = Number(document.getElementById('input__mon').value)
	let stav = Number(document.getElementById('input__stav').value)
	let elems = document.getElementsByClassName('jhasudfgo')
	document.querySelector('.before').innerHTML = dep
	let pr = parseInt(dep*(1+stav/100)**(mon/12))
	document.querySelector('.after').innerHTML = pr
	if (pr >0) {
		elems[0].style.cssText = 
		`display: initial;
		background: red;`
		elems[1].style.cssText = 
		`height: ${pr*100/dep}px;
		display: initial;`
	} else {
		elems[0].style.cssText = 
		`display: none;`
		elems[1].style.cssText = 
		`display: none;`
	}
}
