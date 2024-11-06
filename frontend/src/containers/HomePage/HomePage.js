import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import FullService from './Section/FullService';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import FamousDoctor from './Section/FamousDoctor';
import RemoteExamination from './Section/RemoteExamination';
import MetalHealth from './Section/MetalHealth';
import DoctorQnA from './Section/DoctorQnA';
import HandBook from './Section/HandBook';
import Healthy from './Section/Healthy';
import About from './Section/About';
import ForDoctor from './Section/ForDoctor';
import Information from './Section/Information';
import HomeFooter from './Section/HomeFooter';

class HomePage extends Component {
    constructor(props) {
        super(props);
        // Khởi tạo state cho vị trí cuộn
        this.state = {
            scrollX: 0,
            scrollY: 0
        };
    }

    render() {
        const { scrollX, scrollY } = this.state;
        return (
            <div>
                <HomeHeader isShowBanner={true} locations={"all"} />
                <FullService />
                <Specialty />
                <MedicalFacility />
                <FamousDoctor />
                <RemoteExamination />
                <MetalHealth />
                <DoctorQnA />
                <HandBook />
                <Healthy />
                <About />
                <ForDoctor />
                <Information />
                <HomeFooter />
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
