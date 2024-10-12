import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FamousDoctor.scss'
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
//import css file 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class FamousDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slidesToShow: 4,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }

    handleResize = () => {
        // Detect zoom level using window.devicePixelRatio or window.innerWidth
        const zoomLevel = Math.round(window.devicePixelRatio * 100);

        if (zoomLevel >= 200 && zoomLevel < 300) {
            this.setState({ slidesToShow: 3 });
        } else if (zoomLevel >= 300 && zoomLevel < 350) {
            this.setState({ slidesToShow: 2 });
        } else if (zoomLevel >= 350) {
            this.setState({ slidesToShow: 1 });
        } else {
            this.setState({ slidesToShow: 4 });
        }
    }


    render() {
        let setting = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: this.state.slidesToShow,
            slidesToScroll: 1,
        }
        return (
            <div className='cover'>
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
                                <div className='img-custom'>
                                    <div className='img-custom2'>
                                        <div className='bg-img4'></div>
                                        <div className='position text-center'>
                                            <div className='ten-hocvi'>Tiến sĩ, Bác sĩ chuyên khoa II Lê Quốc Việt</div>
                                            <div className='chuyenkhoa'>Cơ xương khớp, Nội khoa</div>
                                        </div>
                                    </div>
                                </div >
                                <div className='img-custom'>
                                    <div className='img-custom2'>
                                        <div className='bg-img4'></div>
                                        <div className='position text-center'>
                                            <div className='ten-hocvi'>Tiến sĩ, Bác sĩ chuyên khoa II Lê Quốc Việt</div>
                                            <div className='chuyenkhoa'>Cơ xương khớp, Nội khoa</div>
                                        </div>
                                    </div>
                                </div >
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
