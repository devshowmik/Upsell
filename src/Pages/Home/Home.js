import React from 'react';
import AdvertisedSection from './AdvertisedSection';
import CategorySection from './CategorySection';
import TopBanner from './TopBanner';
import WorksFlow from './WorksFlow';

const Home = () => {
    return (
        <>
            <TopBanner />
            <CategorySection />
            <AdvertisedSection />
            <WorksFlow />
        </>
    );
};

export default Home;