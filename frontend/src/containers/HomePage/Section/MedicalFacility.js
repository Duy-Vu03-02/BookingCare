import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class MedicalFacility extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }


    render() {
        let setting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
        }
        return (
            <div className='cover'>
                <div className='section-MedicalFacility' >
                    <div className='MedicalFacility-container'>
                        <div className='MedicalFacility-header'>
                            <span className='title1'>Cơ sở y tế nổi bật</span>
                            <button className='btn-xemthem'>Xem thêm</button>
                        </div>
                        <div className='MedicalFacility-body'>
                            <Slider {...setting}>
                                <div className='img-custom'>
                                    <div className='bg-img1'></div>
                                    <div className='text-center fs-5 fw-bold'>Bệnh viễn hữu nghị Việt Đức</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img2'></div>
                                    <div className='text-center fs-5 fw-bold'>Bệnh viện chợ rẫy</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img3'></div>
                                    <div className='text-center fs-5 fw-bold'>Doctor Check - Tầm Soát Bệnh Để Sống Thọ Hơn</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img4'></div>
                                    <div className='text-center fs-5 fw-bold'>Phòng khám Bệnh viện Đại học Y Dược 1</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img5'></div>
                                    <div className='text-center fs-5 fw-bold'>Trung Tâm khám sức khỏe định kỳ, Bệnh viên Trung ương Quân đội 108</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img6'></div>
                                    <div className='text-center fs-5 fw-bold'>Bệnh viện u bướu Hưng Việt</div>
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
