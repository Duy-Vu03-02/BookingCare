import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import ForYou from './Section/ForYou';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import FamousDoctor from './Section/FamousDoctor';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './Section/HomeFooter';
import FullService from './Section/FullService';
import RemoteExamination from './Section/RemoteExamination';
import MetalHealth from './Section/MetalHealth';
import DoctorQnA from './Section/DoctorQnA';
import Healthy from './Section/Healthy';
import ForDoctor from './Section/ForDoctor';
import Information from './Section/Information';

class HomePage extends Component {

    render() {

        return (
            <div>
                <HomeHeader />
                {/* <ForYou /> */}
                <FullService />
                {/* <Specialty /> */}
                {/* <MedicalFacility /> */}
                {/* <FamousDoctor /> */}
                {/* <RemoteExamination /> */}
                {/* <MetalHealth /> */}
                {/* <DoctorQnA /> */}
                {/* <HandBook /> */}
                {/* <Healthy /> */}
                {/* <About /> */}
                {/* <ForDoctor /> */}
                {/* <Information /> */}
                {/* <HomeFooter /> */}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
