import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
        //fire redux event: actions
    }

    render() {
        let language = this.props.language;
        console.log("check user inf", this, this.props.userInfo);
        return (
            <React.Fragment>
                <div className='cover'>
                    <div className='homeheader-container'>
                        <div className='homeheader-content'>
                            <div className='left-content'>
                                <i className="fas fa-bars"></i>
                                <div className='header-logo'>
                                </div>
                            </div>
                            <div className='center-content'>
                                <div className='child-content1'>
                                    <div className='sub-title'>Tất cả</div>
                                </div>
                                <div className='child-content1'>
                                    <div className='sub-title'>Tại nhà</div>
                                </div>
                                <div className='child-content1'>
                                    <div className='sub-title'>Tại viện</div>
                                </div>
                                <div className='child-content1'>
                                    <div className='sub-title'>Sống khỏe</div>
                                </div>
                                <div className='child-content'>
                                    <div className='search'>
                                        <i className='fas fa-search '></i>
                                        <input type='text' placeholder='Tìm chuyên khoa'></input>
                                    </div>
                                </div>
                            </div>
                            <dvi className="right-content">
                                <div className='child-content-right'>
                                    <div><i class="fas fa-handshake"></i></div>
                                    <div className='sub-titles'>Hợp tác</div>
                                </div>
                                <div className='child-content-right'>
                                    <div><i class="fas fa-history"></i></div>
                                    <div className='sub-titles'>Lịch hẹn</div>
                                </div>
                                <div className='child-content-right-s'>
                                    <div><i className='fas fa-search '></i></div>
                                    <div className='sub-titles'>Tìm kiếm</div>
                                </div>
                            </dvi>

                        </div>

                    </div>

                    <div className='center-content2'>
                        <div className='cover-child-content2'>
                            <div className='child-content2'>
                                <div className='sub-title'>Tất cả</div>
                            </div>
                            <div className='child-content2'>
                                <div className='sub-title'>Tại nhà</div>
                            </div>
                        </div>
                        <div className='cover-child-content2'>
                            <div className='child-content2'>
                                <div className='sub-title'>Tại viện</div>
                            </div>
                            <div className='child-content2'>
                                <div className='sub-title'>Sống khỏe</div>
                            </div>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="text-center mb-4 check">
                            <span className="h1">Nơi khởi nguồn sức khỏe</span>
                        </div>
                        <div className='search-banner '>
                            <div className='border-input'>
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className='input'>
                                            <div><input type="text" className="ai" placeholder="Đặt câu hỏi với trợ lý AI" /></div>
                                            <div><i className="fas fa-paper-plane"></i></div>
                                        </div>
                                        <div className='upfile'>
                                            <div><i class="fas fa-file"></i></div>
                                            <div><input type="text" className="" placeholder="Đọc đơn thuốc/ xét nghiệm" /></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bonus-content">
                            <div className='content'>
                                <div className='i1'><i className="fas fa-tv"></i></div>
                                <div className='content-span'><span>Bị thủy đậu nên làm gì để tránh lây bệnh</span></div>
                            </div>

                            <div className='content'>
                                <div className='i2'><i className="fas fa-stethoscope"></i></div>
                                <div className='content-span'><span>Mệt mỏi, khó thở nguyên nhân do đâu?</span></div>
                            </div>

                            <div className='content'>
                                <div className='i3'><i class="fas fa-file"></i></div>
                                <div className='content-span'><span>Hắt hơi, sổ mũi là dâu hiện của bệnh gì?</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)) //fire 1 action của redux
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
