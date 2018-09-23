import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Paper
} from "@material-ui/core";

const styles = {
	root: {
		paddingTop: "48px",
		height: "100vh"
	},
	container: {
		margin: "0 auto",
		maxWidth: "600px",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	paper: {
		width: "90%",
		height: "500px",
		overflowY: "scroll"
	}
};

const Results = ({ values }) => {
	return (
		<div style={styles.root}>
			<div style={styles.container}>
				<Paper style={styles.paper}>
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
										<TableCell>{n.ingredient}</TableCell>
										<TableCell numeric>
											{n.probability}
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</Paper>
			</div>
		</div>
	);
};

export default Results;
