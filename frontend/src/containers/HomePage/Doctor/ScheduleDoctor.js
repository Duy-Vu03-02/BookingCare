import React, { Component, Ref } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './ScheduleDoctor.scss'
import { getDetalDoctor } from '../../../services/userService';
import ScrollToTop from "react-scroll-to-top";
import { NumericFormat } from 'react-number-format';
import moment from 'moment';
import localization from 'moment/locale/vi'
class DetailDoctor extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.state = {
            detailDoctor: {},
            isShowPrice: false,
            isShowIns: false,
            allDay: []
        }

    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    setArrDay = () => {
        let arrDate = []
        for (let i = 0; i < 7; i++) {
            let object = {}
            if (i == 0) {
                let label = moment(new Date()).add(i, 'days').format('DD/MM');
                let toDay = `Hôm nay - ${label}`;
                object.label = toDay;
            } else {
                let label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
                object.label = this.capitalizeFirstLetter(label);
            }
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();
            arrDate.push(object);
        }
        console.log("Generated Dates:", arrDate);
        return arrDate;
    };
    async componentDidMount() {
        let allday = this.setArrDay();
        this.setState({
            allDay: allday
        })
    }
    componentDidUpdate(prepProps, preState, snapshot) {

        if (prepProps.detailDoctor !== this.props.detailDoctor) {
            this.setState({
                detailDoctor: this.props.detailDoctor,
            })
        }
    }
    handleOnChangeSelect = (event) => {

    }
    render() {
        // console.log(this.props.match.params.id)
        // console.log(this.state);
        let { detailDoctor, allDay } = this.state
        let { isShowPrice, isShowIns } = this.state;
        // console.log("check detail: ", detailDoctor)
        return (
            <div className='schedule'>
                <div>
                    <select onChange={(event) => this.handleOnChangeSelect(event)}>
                        {allDay && allDay.length > 0 && allDay.map((item, index) => {
                            return (
                                <option value={item.value} key={index}>{item.label}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='calendar'>
                    <span><i className="fas fa-calendar"></i>LỊCH KHÁM</span>
                </div>
                <div className='time'>
                    <button> 15:00 - 15:30 </button>
                    <button> 15:00 - 15:30 </button>
                    <button> 15:00 - 15:30 </button>
                    <button> 15:00 - 15:30 </button>
                    <button> 15:00 - 15:30 </button>
                    <button> 15:00 - 15:30 </button>
                    <button> 15:00 - 15:30 </button>
                    <button> 15:00 - 15:30 </button>
                    <button> 15:00 - 15:30 </button>
                    <button> 15:00 - 15:30 </button>
                </div>
                <div className='choose'>
                    <span>Chọn </span> <i className="fas fa-hand-pointer"></i> <span>và đặt (Phí đặt lịch 0đ)</span>
                </div>
            </div>
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
