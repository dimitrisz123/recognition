import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';

const styles = {
	root: {
		display: 'flex',
		justifyContent: 'center',
		padding: '20px',
	},
	table: {
		width: '30%',
		height: '500px',
		overflowY: 'scroll',
		minWidth: '450px',	
	}
}

const Results = ({ values }) => {
	return (
		<div style = {styles.root} >
			<Paper style = {styles.table}>
		      <Table>
		        <TableHead>
		          <TableRow>
		            <TableCell>Ingredients</TableCell>
		            <TableCell numeric>Probability </TableCell>		            
		          </TableRow>
		        </TableHead>
				 <TableBody>
			     {values.map(n => {
		            return (
		              <TableRow key={n.ingredient}>
		                <TableCell>
		                  {n.ingredient}
		                </TableCell>
		                <TableCell numeric>{n.probability}</TableCell>		                	                
		              </TableRow>
		            );
		          })}
		        </TableBody>
		      </Table>
		    </Paper>
	    </div>
		)
}

export default Results;