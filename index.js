// alert("Js works!!!!")
 const counter = document.querySelector('.counter') //The querySelector() method returns the first element that matches a CSS selector.
 const btns = document.querySelectorAll('.btn') // The querySelectorAll() method returns all elements that matches a CSS selector(s).

 let count = 0; //Value starts at 0

 //The forEach() method calls a function for each element in an array.
 btns.forEach((btn) => { 
	btn.addEventListener('click', (e) => { //The addEventListener() method attaches an event handler to a document. In this case the buttons
		const styles = e.currentTarget.classList //The classList property returns the CSS classnames of an element.

        //if else statement saying if the button that says increase is clicked then the count increments by 1. If the decrease button is pressed then the count will decrement by 1
        //The contains() method returns true if a node is a descendant of a node.
        //The contains() method returns false if not.
		if (styles.contains('increase')) {
			count++
		} else if (styles.contains('decrease')) {
			count--
		} else {
			count = 0
		}

		if (count > 0) {
			counter.style.color = 'green'
		}

		if (count < 0) {
			counter.style.color = 'red'
		}

		if (count === 0) {
			counter.style.color = 'grey'
		}

		counter.textContent = count //The textContent property sets or returns the text content of the specified node
	})
})
