import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HandBook.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class HandBook extends Component {

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
                <div className='section-HandBook' >
                    <div className='HandBook-container'>
                        <div className='HandBook-header'>
                            <span className='title1'>Cẩm nang</span>
                            <button className='btn-xemthem'>Xem thêm</button>
                        </div>
                        <div className='HandBook-body'>
                            <Slider {...setting}>
                                <div className='img-custom'>
                                    <div className='bg-img1'></div>
                                    <div className='text-center fs-4 '>Top 6 bệnh viện mổ mắt cận tốt, uy tín tại TPHCM</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img2'></div>
                                    <div className='text-center fs-4 '>Kinh nghiệm đi khám tại Bệnh viện Nam Học và Hiếm Muộn H...</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img3'></div>
                                    <div className='text-center fs-4 '>8 bác sĩ Sản Phụ Khoa giỏi và uy tín tại TPHCM (Phần 1)</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img4'></div>
                                    <div className='text-center fs-4 '>Kinh nghiệm làm IVF Bệnh viện Nam học Hiếm muộn Hà Nội v...</div>
                                </div>
                                <div className='img-custom'>
                                    <div className='bg-img5'></div>
                                    <div className='text-center fs-4 '>9 địa chỉ thụ tinh ống nghiệm IVF uy tín tại Hà Nội</div>
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
