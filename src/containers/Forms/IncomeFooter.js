import React from 'react'
import TableFooter from 'material-ui/Table'


const incomeFooter = (data) =>{
    console.log(data)     
    return(
       <TableFooter>
         Total = {data.amount.reduce(function (firstTotal,nextTotal){
          return firstTotal + nextTotal
       }
       )} 
         </TableFooter>
        
    )
}

export default incomeFooter