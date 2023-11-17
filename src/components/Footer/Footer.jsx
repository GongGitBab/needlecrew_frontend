import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Container"></div>
      <img src="./footer-logo.png" className="footer-logo"></img>
      <hr className="hr"></hr>

      <li>
        <ul>
          대표 : 김현영 | 상호명 : 아나바고 | 사업자등록번호 : 748-61-00480
          |&nbsp;
          <a
            href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=7486100480"
            className="footer-a"
          >
            <b>사업자 정보 확인</b>
          </a>
          &nbsp;|
          <div className="copyright">
            Copyright ⓒ 2023 니들크루 All rights reserved.
          </div>
        </ul>

        <ul>
          전화 : 070-8095-4668 | 개인정보관리책임자 :
          김현영(soodal0605@naver.com) | 통신판매업 : 2021-부산부산진-1467
          <a href="" className="footer-a2">
            <b>이용약관 |</b>&nbsp;
          </a>
          <a href="" className="footer-a3">
            <b>개인정보처리방침</b>
          </a>
        </ul>
        <ul>주소: 부산시 진구 서전로8 Wework서면 05-105호</ul>
      </li>
    </div>
  );
}
