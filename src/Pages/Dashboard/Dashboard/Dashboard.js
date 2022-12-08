import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../../Sheard/Loading/Loading';

const Dashboard = () => {
    const { user } = useContext(AuthContext)

    const url = `https://guiter-server.vercel.app/bookings?email=${user?.email}`

    const { data: bookings, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data
        }

    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-slate-50 my-16'>
            <h1 className='font-bold text-3xl my-9'>My Products</h1>
            <div className="overflow-x-auto ">
                <table className="table  w-1/2 mx-auto">
                    <thead className=''>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>name</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.productName}</td>
                                <td><button className='btn btn-active'>Pay</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;