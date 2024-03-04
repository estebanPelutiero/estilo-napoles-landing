import React from 'react';
import Layout from './Layout';
import Cuatroque from '../assets/imgs/cuatroque.png';

const MostOrders = () => {
  return (
    <Layout className={""}>
        <article className='w-full lg:w-[31.25rem] flex items-center py-4 px-6 rounded-lg card-shadow'>
            <figure className=''>
                <img className='w-[85%] lg:w-[75%] bg-transparent drop-shadow-lg' src={Cuatroque} alt="" />
            </figure>
            <div className='text-center'>
                <h3 className='text-blue text-3xl bavi mb-3'>Cuatroque</h3>
                <p className='text-sm text-gray'>Salsa pomodoro, muzzarella, provolone, parmesano, queso azul, nueces, orégano y aceite de oliva extra virgen de pepperoncino.</p>
            </div>
        </article>
        <article className='w-1/2 lg:w-[31.25rem] flex flex-col lg:flex-row items-center py-4 px-6 rounded-lg card-shadow'>
            <figure className='mb-4'>
                <img className='w-full lg:w-[75%] bg-transparent drop-shadow-lg' src={Cuatroque} alt="" />
            </figure>
            <div className='text-center'>
                <h3 className='text-blue text-3xl bavi mb-3'>Cuatroque</h3>
                <p className='text-sm text-gray'>Salsa pomodoro, muzzarella, provolone, parmesano, queso azul, nueces, orégano y aceite de oliva extra virgen de pepperoncino.</p>
            </div>
        </article>
    </Layout>
  )
}

export default MostOrders;