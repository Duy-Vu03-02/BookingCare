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
            <div className='cover'>
                <div className='section-FullService'>
                    <div className='FullService-container'>
                        <div className='FullService-header'>
                            Dịch vụ toàn diện
                        </div>
                        <div className='FullService-body'>
                            <div className='service'>
                                <div className='service-child'>
                                    <div className='child-img1'></div>
                                    <div className='child-content'>
                                        Khám chuyên khoa
                                    </div>
                                </div>
                                <div className='service-child'>
                                    <div className='child-img2'></div>
                                    <div className='child-content'>
                                        Khám từ xa
                                    </div>
                                </div>
                            </div>
                            <div className='service'>
                                <div className='service-child'>
                                    <div className='child-img3'></div>
                                    <div className='child-content'>
                                        Khám tổng quát
                                    </div>
                                </div>
                                <div className='service-child'>
                                    <div className='child-img4'></div>
                                    <div className='child-content'>
                                        Xét nghiệm y học
                                    </div>
                                </div>
                            </div>
                            <div className='service'>
                                <div className='service-child'>
                                    <div className='child-img5'></div>
                                    <div className='child-content'>
                                        Sức khỏe tinh thần
                                    </div>
                                </div>
                                <div className='service-child'>
                                    <div className='child-img6'></div>
                                    <div className='child-content'>
                                        Khám nha khoa
                                    </div>
                                </div>
                            </div>
                            <div className='service'>
                                <div className='service-child'>
                                    <div className='child-img7'></div>
                                    <div className='child-content'>
                                        Gói phẫu thuật
                                    </div>
                                </div>
                                <div className='service-child'>
                                    <div className='child-img8'></div>
                                    <div className='child-content'>
                                        Sống khỏe tiểu đường
                                    </div>
                                </div>
                            </div>
                            <div className='service'>
                                <div className='service-child'>
                                    <div className='child-img9'></div>
                                    <div className='child-content'>
                                        Bài Test sức khỏe
                                    </div>
                                </div>
                                <div className='service-child'>
                                    <div className='child-img10'></div>
                                    <div className='child-content'>
                                        Y tế gần bạn
                                    </div>
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
