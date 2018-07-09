import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';


const Results = ({ values }) => {
	console.log(values)
	return (
		<div>
			<Paper>
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
		                <TableCell component="th" scope="row">
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