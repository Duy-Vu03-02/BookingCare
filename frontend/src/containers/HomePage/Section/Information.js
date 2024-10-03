import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Information.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Information extends Component {

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
            <React.Fragment>
                <div className='cover'>
                    <div className='section-Informaion' >
                        <div className='inf1'>
                            <label>Công ty Cổ phần Công nghệ BookingCare</label>
                            <div className='inf-content'>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</span>
                            </div>
                            <div className='inf-content'>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>ĐKKD số. 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015</span>
                            </div>
                            <div className='inf-content'>
                                <i class="fas fa-phone"></i>
                                <span><a href='#'>024-7301-2468</a> (7h - 18h)</span>
                            </div>
                            <div className='inf-content'>
                                <i class="fas fa-envelope"></i>
                                <span>support@bookingcare.vn (7h - 18h)</span>
                            </div>
                            <label>Văn phòng tại TP Hồ Chí Minh</label>
                            <div className='inf-content'>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Tòa nhà H3, 384 Hoàng Diệu, Phường 6, Quận 4, TP.HCM</span>
                            </div>
                            <div className='check'>
                                <div className='check1'>

                                </div>
                                <div className='check1'>

                                </div>
                            </div>
                        </div>
                        <div className='inf2'>
                            <div className='icon'></div>
                            <div className='inf-content2'><span><a href='#'>Liên hệ hợp tác</a></span></div>
                            <div className='inf-content2'><span><a href='#'>Chính sách bảo mật</a></span></div>
                            <div className='inf-content2'><span><a href='#'>Quy chế hoạt động</a></span></div>
                            <div className='inf-content2'><span><a href='#'>Tuyển dụng</a></span></div>
                            <div className='inf-content2'><span><a href='#'>Điều khoản sử dụng</a></span></div>
                            <div className='inf-content2'><span><a href='#'>Câu hỏi thường gặp</a></span></div>
                        </div>
                        <div className='inf3'>
                            <label>Đối tác bảo trợ nội dung</label>
                            <div className='content3'>
                                <div className='content3-img0'>

                                </div>
                                <div className='content3-title'>
                                    <label>Hello Doctor</label><br></br>
                                    <span>Bảo trợ chuyên mục nội dung "sức khỏe tinh thần"</span>
                                </div>
                            </div>
                            <div className='content3'>
                                <div className='content3-img1'>

                                </div>
                                <div className='content3-title'>
                                    <label>Hệ thống y khoa chuyên sâu quốc tế Bernard</label><br></br>
                                    <span>Bảo trợ chuyên mục nội dung "y khoa chuyên sâu"</span>
                                </div>
                            </div>
                            <div className='content3'>
                                <div className='content3-img2'>

                                </div>
                                <div className='content3-title'>
                                    <label>Doctor Check - Tầm Soát Bệnh Để Sống Thọ Hơn</label><br></br>
                                    <span>Bảo trợ chuyên mục nội dung "sức khỏe tổng quát"</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>

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

export default connect(mapStateToProps, mapDispatchToProps)(Information);
