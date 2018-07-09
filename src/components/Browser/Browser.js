import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';


const Browser = ({ onBrowserClick, changePage, disable }) => {

	return (
		<div>
			<Paper>
       		 <Tabs
         		  value= {changePage}		          
		          indicatorColor="primary"
		          textColor="primary"
		          centered
		        >
	          <Tab label="SEARCH" onClick = {() => {onBrowserClick(0)}} />
	          <Tab label="IMAGE" disabled= {disable} onClick = {() => {onBrowserClick(1)}} />
	          <Tab label="RESULTS" disabled= {disable} onClick = {() => {onBrowserClick(2)}} />
	       	 </Tabs>
      		</Paper>
	    </div>
		)
}

export default Browser;