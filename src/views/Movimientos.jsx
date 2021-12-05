import React from 'react';


const Movimientos = () => {
    return (
        <div >
             <h5 className='text-center'>Recent Transfers </h5>
            <table className='table table-light text-center'>
                <thead>
             <tr>
                 <th scope="col" className='text-center'>Id</th>
                 <th scope="col" className='text-center'>Date</th>
                 <th scope="col" className='text-center'>Transaction Type</th>
                 <th scope="col" className='text-center'>Asset type</th>
                 <th scope="col" className='text-center'>Rate</th>
                 <th scope="col" className='text-center'>State</th>
             </tr>
             </thead>
            <tbody>
                <tr>
                <td> 123213213</td>
                <td> 1/12/21</td>
                <td> Compra</td>
                <td> Bitcoin</td>
                <td> 0,00005</td>
                <td> Satisfactory</td>
               </tr>
                <tr>
                <td> 123213213</td>
                <td> 1/12/21</td>
                <td> Retiro</td>
                <td> Ethereum</td>
                <td> 0,00005</td>
                <td> Cancelled</td>
               </tr>
                <tr>
                <td> 123213213</td>
                <td> 1/12/21</td>
                <td> Venta</td>
                <td> Cardano</td>
                <td> 0,00005</td>
                <td> Satisfactory</td>
               </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Movimientos
