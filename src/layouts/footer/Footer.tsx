import React from "react";
import footerStyle from "./Footer.css";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className={footerStyle.footer}>
      {/* <!-- 푸터 영역 -->*/}
      <div className={footerStyle.customerGuide}>
        <ul className={footerStyle.customerGuideList}>
          <li>
            <Link href="/">인재채용</Link>
          </li>
          <li>
            <span />
            <Link href="/">입점/제휴문의</Link>
          </li>
          <li>
            <span />
            <Link href="/">공지사항</Link>
          </li>
          <li>
            <span />
            <Link href="/">고객의 소리</Link>
          </li>
          <li>
            <span />
            <Link href="/">
              <strong>개인정보 처리방안</strong>
            </Link>
          </li>
          <li>
            <span />
            <Link href="/">쿠팡페이이용약관</Link>
          </li>
          <li>
            <span />
            <Link href="/">
              <strong>쿠팡페이 개인정보 처리방안</strong>
            </Link>
          </li>
          <li>
            <span />
            <Link href="/">신뢰관리센터</Link>
          </li>
          <li>
            <span />
            <Link href="/">제휴마케팅</Link>
          </li>
          <li>
            <span />
            <Link href="/">광고안내</Link>
          </li>
        </ul>
      </div>

      {/* <!-- 쿠팡 고객센터 및 관련정보영역 --> */}
      <div className={footerStyle.coupangInformation}>
        {/* <!-- 로고 --> */}
        <figure className={footerStyle.logo}>
          <Image
            src={"/images/colorful.svg"}
            alt="로고"
            width={246}
            height={56}
          />
        </figure>

        {/* <!-- 고객센터 정보 목록 --> */}
        <ul className={footerStyle.coupangInformationList}>
          <li>
            <span>
              상호명 및 호스팅 서비스 제공<span> : </span>쿠팡(주)
            </span>
          </li>
          <li>
            <span>
              대표이사<span> : </span>강한송, 박태준
            </span>
          </li>
          <li>
            <span>서울시 송파구 송파대로 570</span>
          </li>
          <li>
            <span>
              사업자 등록번호<span> : </span>120-88-00767
            </span>
          </li>
          <li>
            <span>
              통신판매업신고<span> : </span>2017-서울송파-0680
            </span>
          </li>
        </ul>

        {/* <!-- 고객센터 정보 --> */}
        <div className={footerStyle.customerCenter}>
          {/* <!-- 고객센터 정보 링크 목록 --> */}
          <ul className={footerStyle.customerCenterList}>
            <li className={footerStyle.customerCenterItem}>
              <Link href="/">365고객센터</Link>
            </li>
            <li className={footerStyle.customerCenterItem}>
              <span className={footerStyle.divider}></span>
              <Link href="/">전자금융거래분쟁처리담당</Link>
            </li>
          </ul>

          {/* <!-- 고객센터 전화번호 --> */}
          <div className={footerStyle.customerCenterTelephone}>
            <Link href="tel:15777011">1577-7011</Link>
          </div>

          {/* <!-- 고객센터주소 --> */}
          <div className={footerStyle.customerCenterAddress} role="text">
            서울시 송파구 송파대로 570
          </div>

          {/* <!-- 고객센터 이메일  --> */}
          <div className={footerStyle.customerCenterEmail}>
            email<span>:</span>{" "}
            <Link href="mailto:help@coupang.com?subject=문의사항">
              help@coupang.com
            </Link>
          </div>
        </div>
        {/* <!-- 채무지급보중안내 --> */}
        <div className={footerStyle.paymentGuarantee}>
          <strong className={footerStyle.paymentGuaranteeTitle}>
            우리은행 채무지급보증 안내
          </strong>
          <p>
            당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증
            계약을 체결하여 안전거래를 보장하고 있습니다.
          </p>
        </div>
      </div>

      {/* <!-- 저작권 및 SNS영역 --> */}
      <div className={footerStyle.copyrightArea}>
        <div className={footerStyle.copyrightAreaInner}>
          {/* <!-- 저작권 --> */}
          <div className={footerStyle.copyright}>
            <span>
              사이버몰 내 판매되는 상품 중에는 쿠팡에 등록한 개별 판매자가
              판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
            </span>
            <span>
              마켓플레이스(오픈마켓) 상품의 경우 쿠팡은 통신판매중개자이며
              통신판매의 당사자가 아닙니다.
            </span>
            <span>
              쿠팡은 마켓플레이스(오픈마켓) 상품, 거래정보 및 거래 등에 대하여
              책임을 지지 않습니다.
            </span>
            <span>
              쿠팡은 소비자 보호와 안전거래를 위해
              신뢰관리센터(CM112@coupang.com)를 운영하고 있으며, 관련 분쟁이
              발생할 경우 별도의 분쟁처리절차에 의거 분쟁이 처리됩니다.
            </span>
            <small className={footerStyle.copyrightText}>
              Copyright &copy; Coupang Corp. 2010-2020 All Right Reserved.
            </small>
          </div>

          {/* <!-- sns --> */}
          <div className={footerStyle.sns}>
            <ul className={footerStyle.snsList}>
              <li>
                <Link href="https://www.facebook.com" className="facebook">
                  <Image
                    src={"/images/sns-facebook.svg"}
                    alt="페이스북"
                    width={34}
                    height={34}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://section.blog.naver.com/"
                  className="naverBlog"
                >
                  <Image
                    src={"/images/sns-naver-blog.svg"}
                    alt="네이버"
                    width={34}
                    height={34}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/" className={"instagram"}>
                  <Image
                    src={"/images/sns-instagram.svg"}
                    alt="인스타그램"
                    width={34}
                    height={34}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
