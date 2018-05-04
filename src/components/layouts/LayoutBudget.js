import React from 'react'
import Grid from 'material-ui/Grid'
import BudgetMonth from './Main/BudgetMonth';
import ActualMonth from './Main/ActualMonth';

const styles = {
     grid: {marginLeft: '270px'}
 }

const LayoutBudget = () => (
<Grid container style={styles} spacing={8}>
        <Grid item sm >
        <BudgetMonth/>
        </Grid>
        <Grid item sm>
        <ActualMonth/>
        </Grid>
</Grid>
)

export default LayoutBudget