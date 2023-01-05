import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import PageHeader from '../components/PageHeader';

const AboutPage = () => {
	return (
		<Container>
			<PageHeader
				title="About Page"
				subtitle="On this page you can find explanations about using the application
"
			/>
			<Grid container spacing={2}>
				<Grid item xs={12} mb={8} alignSelf="center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
					aliquid ea voluptatum distinctio dolore nulla facilis reiciendis
					accusamus vitae modi expedita architecto tempore, explicabo voluptate
					iure id saepe asperiores similique.
				</Grid>
				<Grid
					item
					xs={12}
					mb={4}
					sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center' }}
				>
					<img src="/assets/images/card.jpg" alt="card" width="100%" />
				</Grid>
			</Grid>
		</Container>
	);
};

export default AboutPage;
