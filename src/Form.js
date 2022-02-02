import React, { useState } from 'react'

const styles = {
    input: {
        display: 'flex',
        displayDirection: 'column',
        marginBottom: '1rem',
        padding: '5px 10px',
        border: '1px solid rgba(78, 127, 190, .4)',
        borderRadius: '4px',
        fontSize: '1rem',
        fontWeight: '600',
        color: 'rgb(49, 48, 54)',
    },

}
const Form =({addUser})=> {
	const [state, setState] = useState({name: '',surname:'',email:''})
			const nameChange = (event) => { 
				setState({...state, name:event.target.value})
					}
			const surnameChange = (event) => {
				setState({...state,surname:event.target.value})
			}
			const emailChange = (event) => {
				setState({...state,email:event.target.value})
			}
			const addClick =(event) => {
				addUser(state.name, state.surname, state.email)
			}

				return(
		<div>
			<form>

				<input style={styles.input} placeholder='Write name' type="text" name="name" id="name" value={state.name} onChange={nameChange} />
				<input style={styles.input} placeholder='Write surname' type="text" name="surname" id="surname" value={state.surname} onChange={surnameChange} />
				<input style={styles.input} placeholder='Write email' type="text" name="email" id="email" value={state.email} onChange={emailChange} />
				<input  type='button' value='Add' className='btn waves-effect waves-teal' onClick={addClick}/>

</form>
	
	</div>
	) 
}
export default Form