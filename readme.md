# Question no : 1
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
1. get element by id = returns a single element by id.
2. get element by class name =  returns HTMLCollection of elements by class.
3. querySelector = returns first element that matches a CSS selector


# Question no : 2
How do you create and insert a new element into the DOM?

Ans :
const div = document.createElement('div')
div.textContent = "Hello World"  
document.body.appendChild(div)


# Question no : 3
What is Event Bubbling and how does it work?

Ans:
Event Bubbling is a process where when an event is triggered on an element, it is sequentially propagated from **child to parent.


# Question no:4
What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event Delegation is a technique where a single event listener is attached to a **parent element**, which handles events on its **child elements**.
its usefullnes..
1. Dynamic elements can be handled
2. . Memory and performance are saved, no need to install separate listeners on all children


# Question no:5
What is the difference between preventDefault() and stopPropagation() methods?

Ans:
1.  **preventDefault():** Prevents the default browser action for an event (e.g., form submit, link click)
2. **stopPropagation():** Stops the event from bubbling up the DOM tree, preventing parent listeners from triggering