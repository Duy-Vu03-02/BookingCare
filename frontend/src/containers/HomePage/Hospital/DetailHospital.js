import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './DetailHospital.scss'
import Select from 'react-select';
import { Helmet } from 'react-helmet'
const options = [
    { value: '1', label: 'Bác sĩ khoa Phục hồi chức năng Bệnh viện Hữu nghị Việt Đức' },
    { value: '2', label: 'Review về Bệnh viện Hữu nghị Việt Đức' },
    { value: '3', label: 'Cách đặt khám tại Khoa Chi trên và Y học thể thao, Bệnh viện Hữu nghị Việt Đức' },
];

class DetailHospital extends Component {
    constructor(props) {
        super(props);
        this.introduceRef = React.createRef();
        this.myRef = React.createRef()
        this.state = {

        }

    }
    handleScrollToIntroduce = () => {
        if (this.introduceRef.current) {
            this.introduceRef.current.scrollIntoView(
                { behavior: 'smooth', block: 'start' }
            );
        }
    };
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {

            let id = this.props.match.params.id;
            console.log(id)

        }
    }
    componentDidUpdate(prepProps, preState, snapshot) {

    }
    render() {

        return (
            <>
                <Helmet>
                    <title></title>
                </Helmet>
                <HomeHeader />
                <div className='detail-hospital-container'>
                    <div className='hospital-banner'>
                        <div className='group-banner'>
                            <div className='info-hospital'>
                                <div className='hospital-img'>
                                    <img alt="" src=''></img>
                                </div>
                                <div className='detail-hospital'>
                                    <h1>Bệnh viện hữu nghị Việt Đức</h1>
                                    <h2>Số 16-18 Phủ Doãn - Hoàn Kiếm - Hà Nội</h2>
                                </div>
                            </div>
                            <div className='menu-hospital'>
                                <div onClick={this.handleScrollToIntroduce}>GIỚI THIỆU</div>
                                <div>THẾ MẠNH CHUYÊN MÔN</div>
                                <div>TRANG THIẾT BỊ</div>
                                <div>VỊ TRÍ</div>
                                <div>QUY TRÌNH KHÁM</div>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="text-center mb-4 check">
                            <span className="titles">Trợ lý sức khỏe với AI - Hỏi đáp nhanh thông tin Bệnh viện Hữu nghị Việt Đức</span>
                        </div>
                        <div className='search-banner '>
                            <div className='border-input'>
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className='input'>
                                            <Select
                                                value={this.state.selectedDoctor}
                                                onChange={this.handleChange}
                                                options={options}
                                                className='select1 col-12'
                                                placeholder="Đặt câu hỏi với trợ lý AI"
                                                noOptionsMessage={() => null}
                                                styles={{
                                                    option: (provided, state) => ({
                                                        ...provided,
                                                        backgroundColor: state.isSelected ? 'white' : state.isFocused ? '#f0f0f0' : null,
                                                        color: state.isSelected ? 'black' : 'black',
                                                        padding: 20,
                                                        transition: 'all 0.2s ease',
                                                        borderRadius: 'none'
                                                    }),
                                                }}
                                            />
                                            <div><i className="fas fa-paper-plane"></i></div>
                                        </div>
                                        <input
                                            type='file'
                                            ref={this.fileInputRef}
                                            style={{ display: 'none' }}
                                        // onChange={this.handleFileChange}
                                        />
                                        <div className='upfile' onClick={this.handleDivClick}>
                                            <div><i className="fas fa-file"></i></div>
                                            <div>
                                                <input type="text" className="" placeholder="Hỏi đáp nhanh Bệnh viện top đầu" disabled />
                                            </div>
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
                                <div className='i3'><i className="fas fa-file"></i></div>
                                <div className='content-span'><span>Hắt hơi, sổ mũi là dâu hiện của bệnh gì?</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='hospital-greet'>
                        <div className='greet-1'>
                            BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt Nam
                            kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn 1,500
                            bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế chất lượng cao
                        </div>
                        <div className='greet-2'>
                            Từ nay, người bệnh có thể đặt lịch tại Khu khám bệnh theo yêu cầu, Bệnh viện Hữu nghị Việt Đức thông qua hệ thống đặt khám BookingCare.
                            <ul>
                                <li>Được lựa chọn các giáo sư, tiến sĩ, bác sĩ chuyên khoa giàu kinh nghiệm</li>
                                <li>Hỗ trợ đặt khám trực tuyến trước khi đi khám (miễn phí đặt lịch) </li>
                                <li>Giảm thời gian chờ đợi khi làm thủ tục khám và ưu tiên khám trước</li>
                                <li>Nhận được hướng dẫn chi tiết sau khi đặt lịch</li>
                            </ul>
                        </div>
                    </div>
                    <div className='introduce ' ref={this.introduceRef}>

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

export default connect(mapStateToProps, mapDispatchToProps)(DetailHospital);
