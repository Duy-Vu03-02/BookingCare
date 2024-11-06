import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './ListSpecialty.scss'
import { getDetalDoctor } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import ScrollToTop from '../../ScrollToTop';
class ListSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListSpecialty: {}
        }

    }

    async componentDidMount() {

    }
    componentDidUpdate(prepProps, preState, snapshot) {

    }
    render() {

        return (
            <>
                <HomeHeader />
                <div className='ListSpecialty-container'>
                    <div className='LS-address'>
                        <span><i className="fas fa-home" onClick={() => this.returnToHome()}></i> / <span style={{ color: "black" }}>Chuyên khoa khám</span></span>
                    </div>
                    <div className='LS-title'>Chuyên khoa khám</div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                    <div className='LS-specialty'>
                        <div className='LS-image' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fo/w384/2023/12/26/101627-co-xuong-khop.png)` }}></div>
                        <div className='LS-name'>Cơ Xương Khớp</div>
                    </div>
                </div>
                <Information />
                <HomeFooter />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSpecialty);
