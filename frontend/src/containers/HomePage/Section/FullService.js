import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FullService.scss'
import { FormattedMessage } from 'react-intl';
class FullService extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }


    render() {

        return (
            <div className='section-FullService'>
                <div className='FullService-container'>
                    <div className='FullService-header'>
                        <span className='title1'>Dịch vụ toàn diện</span>
                    </div>
                    <div className='FullService-body'>
                        <div className='service'>
                            <div className='service-child'>
                                <div className='child-img1'></div>
                                <div className='child-content'>
                                    <span>Khám chuyên khoa</span>
                                </div>
                            </div>
                            <div className='service-child'>
                                <div className='child-img2'></div>
                                <div className='child-content'>
                                    <span>Khám từ xa</span>
                                </div>
                            </div>
                        </div>
                        <div className='service'>
                            <div className='service-child'>
                                <div className='child-img3'></div>
                                <div className='child-content'>
                                    <span>Khám tổng quát</span>
                                </div>
                            </div>
                            <div className='service-child'>
                                <div className='child-img4'></div>
                                <div className='child-content'>
                                    <span>Xét nghiệm y học</span>
                                </div>
                            </div>
                        </div>
                        <div className='service'>
                            <div className='service-child'>
                                <div className='child-img5'></div>
                                <div className='child-content'>
                                    <span>Sức khỏe tinh thần</span>
                                </div>
                            </div>
                            <div className='service-child'>
                                <div className='child-img6'></div>
                                <div className='child-content'>
                                    <span>Khám nha khoa</span>
                                </div>
                            </div>
                        </div>
                        <div className='service'>
                            <div className='service-child'>
                                <div className='child-img7'></div>
                                <div className='child-content'>
                                    <span>Gói phẫu thuật</span>
                                </div>
                            </div>
                            <div className='service-child'>
                                <div className='child-img8'></div>
                                <div className='child-content'>
                                    <span>Sống khỏe tiểu đường</span>
                                </div>
                            </div>
                        </div>
                        <div className='service'>
                            <div className='service-child'>
                                <div className='child-img9'></div>
                                <div className='child-content'>
                                    <span>Bài Test sức khỏe</span>
                                </div>
                            </div>
                            <div className='service-child'>
                                <div className='child-img10'></div>
                                <div className='child-content'>
                                    <span>Y tế gần bạn</span>
                                </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(FullService);
