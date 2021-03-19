import React from 'react';
import {Header} from '../components/header/header';
import {Footer} from '../components/footer/footer';
import {Description} from '../components/description/description';
import {ReviewForm} from '../components/review-form/review-form';

const CarPage = () => {
    return (
        <React.Fragment>
            <Header/>
            <ReviewForm/>
            <Description/>
            <Footer/>
        </React.Fragment>
    );
};

export {CarPage};
