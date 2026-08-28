//This is just an idea how react actually renders connects index.html elements

function customRender(container,reactElement){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(let prop in reactElement.props) {
      if(prop === 'children') continue
      domElement.setAttribute(prop,reactElement.props[prop])
    }
    



    //add the domElement to the container
    container.appendChild(domElement)

}
const reactElement = {
    type: 'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:'Click me to visit Google'
}//object
// The html tags are parsed in react in the above way 
const mainContainer = document.querySelector("#root")
customRender(mainContainer,reactElement)