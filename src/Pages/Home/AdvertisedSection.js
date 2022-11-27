import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisCard from '../../Components/AdvertisCard/AdvertisCard';
const AdvertisedSection = () => {
    const { data: advertis = [] } = useQuery({
        queryKey: ['advertis'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertis`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <>
            {
                advertis
                    ?
                    <div className="home-Advertised py-3 text-capitalize">
                        <div className="container">
                            <h3 className='mb-4 fw-semibold fst-italic'>Browse Advertised products</h3>
                            <div className="row row-cols-1 row-cols-md-4 g-5">
                                {
                                    advertis.map(ads => <AdvertisCard key={ads._id} ads={ads} />)
                                }
                            </div>
                        </div>
                    </div>
                    :
                    ""
            }

        </>
    );
};

export default AdvertisedSection;