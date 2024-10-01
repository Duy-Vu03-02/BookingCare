import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MetalHealth.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class MetalHealth extends Component {

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
            <div className='section-MetalHealth' >
                <div className='MetalHealth-container'>
                    <div className='MetalHealth-header'>
                        <span className='title1'>Sức khỏe tinh thần</span>
                        <button className='btn-xemthem'>Xem thêm</button>
                    </div>
                    <div className='MetalHealth-body'>
                        <Slider {...setting}>
                            <div className='img-custom'>
                                <div className='bg-img1'></div>
                                <div className='text-center fs-4 fw-bold'>Bài test sức khỏe</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img2'></div>
                                <div className='text-center fs-4 fw-bold'>Sức khỏe tâm thần</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img3'></div>
                                <div className='text-center fs-4 fw-bold'>Tư vấn trị liệu tâm lý từ xa</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img4'></div>
                                <div className='text-center fs-4 fw-bold'>Sức khỏe tâm thần từ xa</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img5'></div>
                                <div className='text-center fs-4 fw-bold'>Tư vấn trị liệu tâm lý</div>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(MetalHealth);
