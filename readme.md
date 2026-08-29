# React
## Basics
- react-dom creates a virtual dom to performs rendering of html 
- main.jsx contains createRoot function that renders the index.html and takes the div element with id=root and renders html in app.jsx 
- the Function.jsx files can be created in the source folder(src) and used in any of the .jsx files that gives a html tag element.(The name of the .jsx file has to be in upper case)
- each function can return a single tag hence many html tags can be wrapped inside <></> => fragment is returned
- The functions created in different .jsx files are called components that can be imported
- Render injects properties and tags to html
- HOOKS: Propagates changes throughout the ui
- useState: by default an array with two elements one the variable and the other a function is assigned to useState(initial value of the variable).Updates the variable throughout the ui
- onClick(): this function takes functions as argument not the value returned by a function hence a callback fun is assigned setColor("") not directly to setColor("") because it returns a value not allowed. Just setColor is a function which could be directly passed with no arguments that will not do the required task
- useCallback(): prevents re-rendering if refereshed only the function passed in this is re-rendered as many times there is a change in the dependencies(the value of variables)
- useEffect():the function passed in this is called as many times there is a change in the dependencies(the value of variables)
- Prop drilling : If the parent .jsx component wants to pass its props(object) to nested child (grandparent->parent->child) all the .jsx files should be passed with the same props
- To prevent this context api or react-redux (RTK-Redux-Toolkit) is used such that the props are declared globally 
- Context api gives a provider that provides variables to all the component fragments(all the components that wants to use the variable) **wrapped under the UserContext.Provider
```jsx
    <UserContext.Provider value={{user,setUser}}>
        <Login />
        <Profile />
    </UserContext.Provider >
```
- The children attribute helps in wrapping  components under  UserContextProvider
- tailwind css provides className called dark that automatically assigns changes to be set in the darkmode and under dark we can set styling in dark mode explicitly dark:text-white
- Redux: Comprises of store, reducers,
- slice contains name, state(initialState) ,reducers, useSelector, useDispatch
- reducers : object having feature: function
- every function under reducers will have two parameters state(present state) and action(the argument passed by the user while using this function in any component)
- slice.actions(object) contains the functions in the reducers
- slices have to export their reducer such that the store takes it
- useDispatch(reducer(parameter)) sets values of the state
- useSelector(reducer(parameter)) gets values of the state
-  <img width="831" height="407" alt="image" src="https://github.com/user-attachments/assets/6b24d501-414e-4676-aca1-686291842589" />
- Redux is a core library while react-redux is its implementation in react
- Every application must have a single store called the single source of truth
- The reducer in the store will get access to every slice's elements
