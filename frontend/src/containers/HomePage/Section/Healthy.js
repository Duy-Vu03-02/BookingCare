import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Healthy.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Healthy extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }


    render() {
        let setting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        return (
            <div className='cover'>
                <div className='section-Healthy' >
                    <div className='Healthy-container'>
                        <div className='Healthy-header'>
                            <span className='title1'>Sống khỏe suốt đời</span>
                            <button className='btn-xemthem'>Xem thêm</button>
                        </div>
                        <div className='Healthy-body'>
                            <Slider {...setting}>
                                <div className='img-custom'>
                                    <div className='bg-img1'></div>
                                    <div className='text-center fs-4 '>Khám và điều trị tăng huyết áp ở đâu tốt nhất Hà Nội</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img2'></div>
                                    <div className='text-center fs-4 '>Giải đáp: Trẻ sốt 38 độ có nên uống thuốc hạ sốt?</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img3'></div>
                                    <div className='text-center fs-4 '>Top 5 bênh thường gặp trong mùa mưa</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img4'></div>
                                    <div className='text-center fs-4 '>Hướng dẫn cách chăm sóc răng miệng khi cắm Implant</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img5'></div>
                                    <div className='text-center fs-4 '>Dấu hiệu nhiễm trùng sau khi nhổ răng khôn</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Healthy);
