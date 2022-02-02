import React from 'react'
import TableEdit from './TableEdit';

const styles ={
    table:{
        border: '3px solid rgba(78, 127, 190, .4)',
        borderRadius: '4px',
        fontSize: '1rem',
        fontWeight: '600',
        width: '700px',  
    },
	table2:{
        border: '3px solid rgba(78, 127, 190, .4)',
        borderRadius: '4px',
        fontSize: '1rem',
        fontWeight: '600',
        width: '84.5%',  
    },
	th: {
		textAlign:'center',
	},

}


const Table =({table, removeUser, editUser})=> {
	return (
	<div style={styles.table}> 
		<div style={styles.table2}>
			<table>
				<thead>
				<tr>
					<th style={styles.th}>Name</th>
					<th style={styles.th}>Surname</th>
					<th style={styles.th}>Email</th>
				</tr>
				</thead>
			</table>
			</div >
					{table &&table.map((line, _id) => (
						<TableEdit
							key={line._id}
							line={line}
							editUser={editUser}
							removeUser={removeUser}
							
						/>
				))}
			
			</div>
	); 

};
export default Table