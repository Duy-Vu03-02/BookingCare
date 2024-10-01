import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FamousDoctor.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class FamousDoctor extends Component {

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
            <div className='section-FamousDoctor' >
                <div className='FamousDoctor-container'>
                    <div className='FamousDoctor-header'>
                        <span className='title1'>Bác sĩ nổi bật</span>
                        <button className='btn-xemthem'>Xem thêm</button>
                    </div>
                    <div className='FamousDoctor-body'>
                        <Slider {...setting}>
                            <div className='img-custom'>
                                <div className='img-custom2'>
                                    <div className='bg-img1'></div>
                                    <div className='position text-center '>
                                        <div className='ten-hocvi'>Tiến sĩ, Bác sĩ Lê Đức Tố</div>
                                        <div className='chuyenkhoa'>Cơ xương khớp, cột sống, chấn thương chỉnh hình</div>
                                    </div >
                                </div>
                            </div>
                            <div className='img-custom'>
                                <div className='img-custom2'>
                                    <div className='bg-img2'></div>
                                    <div className='position text-center'>
                                        <div className='ten-hocvi'>Thạc sĩ, Bác sĩ Nguyễn Thanh Nhàn</div>
                                        <div className='chuyenkhoa'>Thần kinh</div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-custom'>
                                <div className='img-custom2'>
                                    <div className='bg-img3'></div>
                                    <div className='position text-center'>
                                        <div className='ten-hocvi'>Thầy thuốc ưu tú, Bác sĩ chuyên khoa II Phạm Huy Huyên</div>
                                        <div className='chuyenkhoa'>Thận tiết niệu </div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-custom'>
                                <div className='img-custom2'>
                                    <div className='bg-img4'></div>
                                    <div className='position text-center'>
                                        <div className='ten-hocvi'>Tiến sĩ, Bác sĩ chuyên khoa II Lê Quốc Việt</div>
                                        <div className='chuyenkhoa'>Cơ xương khớp, Nội khoa</div>
                                    </div>
                                </div>
                            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(FamousDoctor);
