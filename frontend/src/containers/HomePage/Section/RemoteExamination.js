import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RemoteExamination.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class RemoteExamination extends Component {

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
            <div className='section-RemoteExamination' >
                <div className='RemoteExamination-container'>
                    <div className='RemoteExamination-header'>
                        <span className='title1'>Khám từ xa</span>
                        <button className='btn-xemthem'>Xem thêm</button>
                    </div>
                    <div className='RemoteExamination-body'>
                        <Slider {...setting}>
                            <div className='img-custom'>
                                <div className='bg-img1'></div>
                                <div className='text-center fs-4 fw-bold'>Tư vấn, trị liệu Tâm lý từ xa</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img2'></div>
                                <div className='text-center fs-4 fw-bold'>Sức khỏe tâm thần từ xa</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img3'></div>
                                <div className='text-center fs-4 fw-bold'>Bác sĩ Da liễu từ xa</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img4'></div>
                                <div className='text-center fs-4 fw-bold'>Bác sĩ Cơ-Xương-Khớp từ xa</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img5'></div>
                                <div className='text-center fs-4 fw-bold'>Bác sĩ Tiêu hóa từ xa</div>
                            </div>
                            <div className='img-custom'>
                                <div className='bg-img6'></div>
                                <div className='text-center fs-4 fw-bold'>Bác sĩ Nội khoa từ xa</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RemoteExamination);
