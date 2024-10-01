import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ForDoctor.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class ForDoctor extends Component {

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
            <div className='section-ForDoctor' >
                <div className='ForDoctor-container'>
                    <div className='ForDoctor-header'>
                        <span className='title1'>Dành cho bác sĩ và cơ sở y tế</span>
                        <button className='btn-xemthem'>Xem thêm</button>
                    </div>
                    <div className='ForDoctor-body'>
                        <Slider {...setting}>
                            <div className='img-custom'>
                                <div className='bg-img1'></div>
                                <div className='text-center fs-4 '>7 sáng kiến giúp giảm thời gian chờ trong bệnh viện, phòng...</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img2'></div>
                                <div className='text-center fs-4 '>Dùng thử BookingCare_DX miễn phí, có nhưng tính năng...</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img3'></div>
                                <div className='text-center fs-4 '>4 lợi ích Chuyển đổi số Phòng Khám</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img4'></div>
                                <div className='text-center fs-4 '>Learn Start Up là gì? Ứng dụng trong Marketing phòng khám</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img5'></div>
                                <div className='text-center fs-4 '>Marketing phòng khám trên facebook: Cách viết Content</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForDoctor);
