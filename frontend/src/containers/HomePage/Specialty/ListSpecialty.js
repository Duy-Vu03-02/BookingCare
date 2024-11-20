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
import { getDetailService } from '../../../services/userService';
class ListSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ListSpecialty: [],
        }

    }

    async componentDidMount() {
        let id = "671c94e6a213a0b6d2bc5ad6"
        let res = await getDetailService(id);
        console.log(res)
        if (res && res.data.error_code === 0) {
            this.setState({
                ListSpecialty: res.data.data,
            });
        }
    }
    componentDidUpdate(prepProps, preState, snapshot) {

    }
    render() {
        let { ListSpecialty } = this.state
        return (
            <>
                <HomeHeader />
                <div className='ListSpecialty-container'>
                    <div className='LS-address'>
                        <span><i className="fas fa-home" onClick={() => this.returnToHome()}></i> / <span style={{ color: "black" }}>Chuyên khoa khám</span></span>
                    </div>
                    <div className='LS-title'>Chuyên khoa khám</div>
                    {ListSpecialty && ListSpecialty.length > 0 && ListSpecialty.map((item, index) => {
                        return (
                            <div className='LS-specialty'>
                                <div className='LS-image' style={{ backgroundImage: `url(${item.img})` }}></div>
                                <div className='LS-name'>{item.name}</div>
                            </div>
                        );
                    })}
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
