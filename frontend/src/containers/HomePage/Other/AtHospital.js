import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './AtHospital.scss'
import Healthy from '../Section/Healthy';
import DoctorQnA from '../Section/DoctorQnA';
import RemoteExamination from '../Section/RemoteExamination';
import HomeTest from '../Section/HomeTest';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
class AtHospital extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    async componentDidMount() {
    }
    componentDidUpdate(prepProps, preState, snapshot) {

    }
    returnToHome = () => {
        this.props.history.push(`/home`);
    }
    render() {
        let setting = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            arrows: false,
            draggable: false
        }
        return (
            <>
                <HomeHeader locations={"at-hospital"} />
                <div className='AtHospital-container'>
                    <div className='AH-banner'>
                        <Slider {...setting}>
                            <div className='img-custom'>
                                <img src='https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2023%2F11%2F02%2F134537-group-12314.png&w=1920&q=75' />
                            </div>
                            <div className='img-custom'>
                                <img src='https://bookingcare.vn/_next/image?url=https%3A%2F%2Fcdn.bookingcare.vn%2Ffo%2F2024%2F03%2F15%2F094346-hoi-dap-cong-dong.png&w=1920&q=75)' />
                            </div>
                            <div className='img-custom'>
                                <img src='https://cdn.bookingcare.vn/fo/w1920/2023/09/07/141422-144204-dat-lich-kham-bookingcare-pharmacity.jpg' />
                            </div>
                            <div className='img-custom'>
                                <img src='https://cdn.bookingcare.vn/fo/w1920/2023/10/10/163557-dat-lich-cham-soc-wecare247.png' />
                            </div>
                        </Slider>
                    </div>

                </div>
                {/* <HomeTest /> */}
                <HomeTest />
                <RemoteExamination />
                <DoctorQnA />
                <Healthy />
                <Information />
                <HomeFooter />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AtHospital);
