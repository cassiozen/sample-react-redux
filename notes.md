# React-Redux

1 - Add the `Provider` component
2 - Use the `connect` function to either:
    - Get state from the store
    - Dispatch action creators


# Examples

## Sample Usage: 

** TO GET STATE FROM THE STORE: **

`const mapStateToProps = state => ({ contacts: state.contacts });`

** TO MAKE DISPATCHES **

`const mapDispatchToProps = {addContact};`

** OR ** 

`const mapDispatchToProps = dispatch => ({addContact: dispatch(addContact)})`


**FINALLY, USE CONNECT**

export default connect(mapStateToProps, mapDispatchToProps)(Component);
