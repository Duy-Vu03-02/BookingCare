import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/Section/HomeFooter'
import Information from '../../HomePage/Section/Information'
import './DetailDoctor.scss'
import { getDetalDoctor } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import ScrollToTop from '../../ScrollToTop';
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
        window.scrollTo(0, 0);
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
                                <h2 className='namedr'>Bác sĩ Chuyên khoa I Phan Vương Huy Đổng</h2>
                                <span>
                                    Hơn 30 năm kinh nghiệm khám và điều trị về Cơ xương khớp - Chấn thương chỉnh hình<br></br>
                                    Bác sĩ từng công tác tại Khoa Y học thể thao, Bệnh viện Nhân dân 115<br></br>
                                    Bác sĩ từng công tác tại Khoa Chi dưới, Bệnh viện Chấn thương chỉnh hình TP. HCM<br></br>
                                    Bác sĩ nhận khám từ 16 tuổi trở lên<br></br>
                                </span>
                                <i class="fas fa-map-marker-alt"></i> <span>Thành Phố Hồ Chí Minh</span><br></br>
                                <div className='like-btn'>
                                    <button className='like'><i class="fas fa-thumbs-up"></i> Thích 0</button>
                                    <button className='share'>Chia sẻ</button>
                                </div>
                            </div>
                            <div className='down'>
                                {/* {detail.MarkDown && detail.MarkDown.description &&
                                    <span>{detail.MarkDown.description}</span>
                                } */}

                            </div>
                        </div>
                    </div>
                    <div className='schedule-doctor'>
                        <div className='schedule'>
                            <div>
                                <select>
                                    <option>Thứ 3 - 5/11</option>
                                    <option>Thứ 4 - 5/11</option>
                                    <option>Bỏ qua</option>
                                </select>
                            </div>
                            <div className='calendar'>
                                <span><i class="fas fa-calendar"></i>LỊCH KHÁM</span>
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
                                <span>Chọn </span> <i class="fas fa-hand-pointer"></i> <span>và đặt (Phí đặt lịch 0đ)</span>
                            </div>
                        </div>
                        <div className='doctor-clinic'>
                            <div className='address'>
                                <span className='address1'>ĐỊA CHỈ KHÁM</span><br></br>
                                <span className='address2'> Phòng khám Chuyên khoa Nội An Phước</span><br></br>
                                <span className='address3'>391/8 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh</span>
                            </div>
                            <div className='cost'>
                                <label>GIÁ KHÁM: </label> <span>180.000đ</span> <a href=''>Xem chi tiết</a>
                            </div>
                            <div className='insurance'>
                                <label>LOẠI BẢO HIỂM ÁP DỤNG.  </label><a href=''>Xem chi tiết</a>
                            </div>
                        </div>
                    </div>
                    <div className='detail-info-doctor'>
                        {/* {detail && detail.MarkDown && detail.MarkDown.contentHTML &&
                            <div dangerouslySetInnerHTML={{ __html: detail.MarkDown.contentHTML }}>
                            </div>
                        } */}
                        <span>Thạc sĩ, Bác sĩ Hứa Thúy Vi</span>
                        <ul>
                            <li>Giám đốc Phòng khám Chuyên khoa Nội An Phước</li>
                            <li>Bác sĩ chuyên khoa Tiêu hóa - Gan mật - Nội soi tiêu hóa</li>
                            <li>Bác sĩ nhận khám cho bệnh nhân từ 15 tuổi trở lên</li>
                            <li>Hơn 15 năm công tác tại Bệnh viện Nhân dân 115</li>
                        </ul>

                        <span>Quá trình đào tạo</span>
                        <ul>
                            <li>Tốt nghiệp Thạc sĩ chuyên ngành Nội tổng quát, Đại học Y dược TPHCM (2012)</li>
                            <li>Tốt nghiệp Bác sĩ đa khoa, Đại học Y khoa Phạm Ngọc Thạch (2002)</li>
                            <li>Chứng chỉ Nội soi đại tràng, Bệnh viện Chợ Rẫy (2015)</li>
                            <li>Chứng chỉ Siêu âm tổng quát thực hành, Bệnh viện Đại học Y dược TPHCM (2005)</li>
                            <li>Chứng chỉ Nội soi dạ dày - tá tràng, Bệnh viện Nhân dân 115 (2014)</li>
                        </ul>

                        <span>Thành viên các Hội khoa học, tổ chức chuyên môn</span>
                        <ul>
                            <li>Hội Tiêu hóa - Gan mật</li>
                        </ul>
                        <span>Khám và điều trị</span>
                        <ul>
                            <li>Viêm loét dạ dày: đau bụng, nôn ói, đầy bụng</li>
                            <li>Viêm thực quản trào ngược: nghẹn, nuốt nghẹn, khó thở, ho kéo dài</li>
                            <li>Nhiễm HP dạ dày: đau bụng, nôn ói, đầy bụng</li>
                            <li>Loét thực quản: nuốt vướng</li>
                            <li>Đầy bụng chưa rõ nguyên nhân: đầy, chướng bụng</li>
                            <li>Đau bụng chưa rõ nguyên nhân: đau bụng</li>
                            <li>Viêm đại tràng: rối loạn đi tiêu lúc táo bón lúc tiêu chảy</li>
                            <li>Viêm ruột: đau bụng, tiêu lỏng, tiêu máu, sốt</li>
                            <li>Hội chứng ruột kích thích: rối loạn đi tiêu lúc táo bón lúc tiêu chảy</li>
                            <li>Bệnh Crohn: đau bụng, tiêu máu, sụt cân</li>
                            <li>Rối loạn tiêu hoá: rối loạn đi tiêu</li>
                            <li>Viêm gan siêu vi B tăng men gan, đầy bụng, vàng da, vàng mắt</li>
                            <li>Xơ gan do rượu: vàng da, vàng mắt, tiểu vàng</li>
                        </ul>
                    </div>
                    <div className='commnent-doctor'>
                        <h2>Phản hồi của bệnh nhân sau khi đi khám</h2>
                        <div className='comment'>
                            <label>Trần Gia Hân</label><span><i class="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                Đi khám thấy thoải mái, đúng quy trình, được phòng khám liên hệ trước hẹn thời gian đi khám. Tuy nhiên, vẫn phải kê khai lại thông tin mặc dù đã đặt lịch trước.
                            </p>
                        </div>

                        <div className='comment'>
                            <label>Nguyễn Thị Ái Khuê</label><span><i class="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                Tình trạng của tôi đã ổn. Cảm nhận bác sĩ tư vấn nhiệt tình, nhân viên hỗ trợ nhiệt tình. Được liên hệ trước xác nhận lịch và hướng dẫn quy trình.  Được khám đúng giờ và không phải chờ đợi
                            </p>
                        </div>

                        <div className='comment'>
                            <label>Đỗ Thị Minh Ngọc</label><span><i class="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                Ok
                            </p>
                        </div>

                        <div className='comment'>
                            <label>Nguyễn Song Vân Thùy</label><span><i class="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                không có  ý kiến gì
                            </p>
                        </div>

                        <div className='comment'>
                            <label>Diệp Phi Hùng </label><span><i class="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                Vậy là tốt rồi, kg cần cải thiện. Cám ơn rất nhiều!
                            </p>
                        </div>

                        <div className='comment'>
                            <label>Lý Sủi Nằng</label><span><i class="fas fa-check-circle"></i> đã khám ngày 20/07/2024</span>
                            <p>
                                Được cấp thêm thiết bị hiện đại thì quá tốt luôn
                            </p>
                        </div>
                    </div>
                    <div className='more-ques'>
                        <label> Cần tìm hiểu thêm? </label><span> Xem câu hỏi thường gặp.</span>
                    </div>
                </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
