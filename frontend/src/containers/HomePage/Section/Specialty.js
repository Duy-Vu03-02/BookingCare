import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Specialty extends Component {

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
            <div className='section-specialty' >
                <div className='specialty-container'>
                    <div className='specialty-header'>
                        <span className='title1'>Chuyên khoa</span>
                        <button className='btn-xemthem'>Xem thêm</button>
                    </div>
                    <div className='specialty-body'>
                        <Slider {...setting}>
                            <div className='img-custom'>
                                <div className='bg-img1'></div>
                                <div className='text-center fs-4 fw-bold'>Cơ xương khớp</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img2'></div>
                                <div className='text-center fs-4 fw-bold'>Thần kinh</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img3'></div>
                                <div className='text-center fs-4 fw-bold'>Tiêu hóa</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img4'></div>
                                <div className='text-center fs-4 fw-bold'> Tim mạch</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img5'></div>
                                <div className='text-center fs-4 fw-bold'>Tai mũi họng</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img6'></div>
                                <div className='text-center fs-4 fw-bold'>Cột sống</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
