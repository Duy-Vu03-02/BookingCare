import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter'
import './DetailDoctor.scss'
import { getDetalDoctor } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
class DetailDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: {}
        }

    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {

            let id = this.props.match.params.id;
            let res = await getDetalDoctor(id);
            // console.log(res);
            if (res && res.data.errCode === 0) {
                this.setState({
                    detailDoctor: res.data.data
                })
            }
            // let imag eBase64 = '';
            // if (user.image) {
            //     imageBase64 = new Buffer(user.image, 'base64').toString('binary');
            // }
        }
    }
    componentDidUpdate(prepProps, preState, snapshot) {

    }
    render() {
        // console.log(this.props.match.params.id)
        console.log(this.state);
        let detail = this.state.detailDoctor;
        let namevi = '', nameen = '';
        let { language } = this.props;
        if (detail && detail.positionData) {
            namevi = `${detail.positionData.valueVi}, ${detail.fullname}`
            nameen = `${detail.positionData.valueEn}, ${detail.fullname}`
        }
        return (
            <>
                <HomeHeader isShowBanner={false} />
                <div className='doctor-detail-container'>
                    <div className='info-doctor'>
                        <div className='content-left' style={{ backgroundImage: `url(${detail && detail.image ? detail.image : ""})` }}>

                        </div>
                        <div className='content-right'>
                            <div className='up'>
                                {language === LANGUAGES.VI ? namevi : nameen}
                            </div>
                            <div className='down'>
                                {/* {detail.MarkDown && detail.MarkDown.description &&
                                    <span>{detail.MarkDown.description}</span>
                                } */}
                            </div>
                        </div>
                    </div>
                    <div className='schedule-doctor'>
                    </div>
                    <div className='detail-info-doctor'>
                        {detail && detail.MarkDown && detail.MarkDown.contentHTML &&
                            <div dangerouslySetInnerHTML={{ __html: detail.MarkDown.contentHTML }}>
                            </div>
                        }
                    </div>
                    <div className='commnent-doctor'>
                    </div>
                </div>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
