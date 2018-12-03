import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Paper,
	Button
} from "@material-ui/core";

const styles = {
	container: {
		display: "flex",
		flexDirection: "column"
	},
	paper: {
		overflowY: "auto"
	}
};

const DataPresentation = ({ values, toHomePage }) => {
	return (
		<div style={styles.container}>
			<Paper style={styles.paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Predicted Concept</TableCell>
							<TableCell numeric>Probability </TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{values.map(n => {
							return (
								<TableRow key={n.ingredient}>
									<TableCell>
										{n.ingredient.toUpperCase()}
									</TableCell>
									<TableCell numeric>
										{n.probability}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</Paper>
			<Button
				fullWidth={true}
				size="large"
				variant="contained"
				color="primary"
				onClick={() => toHomePage(false)}
			>
				TRY YOUR OWN IMAGE
			</Button>
		</div>
	);
};

export default DataPresentation;
