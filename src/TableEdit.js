import React, { useState } from 'react';


const styles = {
    btnRemEdit: {
        display: 'flex',
		justifyContent: 'space-between',
    },
	val: {
		border: '3px solid rgba(78, 127, 190, .4)',
        borderRadius: '4px',
        fontSize: '1rem',
        fontWeight: '600',
	}
}

const TableEdit = ({ line, editUser, removeUser }) => {
	const [name, setName] = useState(line.data.name);
	const [surname, setSurname] = useState(line.data.surname);
	const [email, setEmail] = useState(line.data.email);
	const [edit, setEdit] = useState(false);

	const saveEditItem = () => {
		setEdit(false);
		editUser(line._id, name, surname, email);
	};

	return (
			<table>
				<tbody>
				<tr>
					<td style={styles.val}>
						<input  type="text" value={name} onChange={(event) => setName(event.target.value)} readOnly={!edit}/>
					</td>
					<td style={styles.val}>
						<input type="text" value={surname} onChange={(event) => setSurname(event.target.value)} readOnly={!edit}/>
					</td>
					<td style={styles.val}>
						<input type="text" value={email} onChange={(event) => setEmail(event.target.value)} readOnly={!edit}/>
					</td>
					<td style={styles.btnRemEdit} >
						<button className="waves-effect waves-circle waves-light red btn-floating " onClick={() => removeUser(line._id)}>x</button>
							{edit ? (
						<button className="waves-effect waves orange btn" onClick={saveEditItem}>Save</button>
							) : ( 
						<button className="waves-effect waves btn green" onClick={() => setEdit(true)}>Edit</button>
						)}
					</td>	
				</tr>	
				</tbody>
			</table>
	);
};

export default TableEdit;