  function StarBucks(){
    return(
      <React.Fragment>
        <SkipComponent/>
        <WrapComponent/>
        <MobileMenuComponent/>
        <QuickMenuComponent/>
        <GoTopComponent/>
        <ValidatorComponent/>
      </React.Fragment>
    )
  }

  // StarBucks > Skip
  class SkipComponent extends React.Component {
    render() {
      return (
        <React.Fragment>
          <ul id="skip">
            <li><a href="#header" title="메뉴바로가기">메뉴바로가기</a></li>
            <li><a href="#main" title="콘텐츠바로가기">콘텐츠바로가기</a></li>
            <li><a href="#footer" title="하단메뉴바로가기">하단메뉴바로가기</a></li>
          </ul>        
        </React.Fragment>
      );
    }
  }

  // StarBucks > Wrap
  class WrapComponent extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div id="wrap">
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
          </div>
        </React.Fragment>
      );
    }
  }
  
  // StarBucks > Wrap > Header
  class HeaderComponent extends React.Component {
    render() {
      return (
        <React.Fragment>
          <header id="header">
            <div className="container">
              <div id="logo_box">
                <h1>
                  <a href="#" title="logo"><img src="./img/logo.png" alt="logo" /></a>
                </h1>
              </div>
              <div id="nav_box">
                <aside id="aside">
                  <ul>
                    <li><a href="#" title="Sign In">Sign In</a></li>
                    <li><a href="#" title="My Starbucks">My Starbucks</a></li>
                    <li><a href="#" title="Customer Service & Ideas">Customer Service & Ideas</a></li>
                    <li><a href="#" title="Find a Store">Find a Store</a></li>
                    <li>
                      <div className="search">
                        <input type="text" name="searchBox" id="searchBox" placeholder="통합 검색" />
                        <a href="#" title="통합 검색">
                          <img src="./img/icon_magnifier_black.png" alt="통합 검색" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </aside>
                <nav id="nav">
                  <ul>
                    <li>
                      <a href="#" className="main_menu" title="COFFEE">COFFEE</a>
                      <div className="sub sub1">
                        <div className="sub_top">
                          <div className="sub_container">
                            <ul className="clearfix">
                              <li>
                                <dl>
                                  <dt><a href="#" title="커피">커피</a></dt>
                                  <dd><a href="#" title="스타벅스 원두">스타벅스 원두</a></dd>
                                  <dd><a href="#" title="스타벅스 비아">스타벅스 비아</a></dd>
                                  <dd><a href="#" title="스타벅스앳홈 by 캡슐">스타벅스앳홈 by 캡슐</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="나와 어울리는 커피">나와 어울리는 커피</a></dt>
                                  <dd></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="스타벅스 리저브™">스타벅스 리저브™</a></dt>
                                  <dd><a href="#" title="RESERVE MAGAZINE">RESERVE MAGAZINE</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="에스프레소 음료">에스프레소 음료</a></dt>
                                  <dd><a href="#" title="도피오">도피오</a></dd>
                                  <dd><a href="#" title="에스프레소 마키아또">에스프레소 마키아또</a></dd>
                                  <dd><a href="#" title="아메리카노">아메리카노</a></dd>
                                  <dd><a href="#" title="마키아또">마키아또</a></dd>
                                  <dd><a href="#" title="카푸치노">카푸치노</a></dd>
                                  <dd><a href="#" title="라떼">라떼</a></dd>
                                  <dd><a href="#" title="모카">모카</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="최상의 커피를 즐기는 법">최상의 커피를 즐기는 법</a></dt>
                                  <dd><a href="#" title="커피 프레스">커피 프레스</a></dd>
                                  <dd><a href="#" title="푸어 오버">푸어 오버</a></dd>
                                  <dd><a href="#" title="아이스 푸어 오버">아이스 푸어 오버</a></dd>
                                  <dd><a href="#" title="커피 메이커">커피 메이커</a></dd>
                                  <dd><a href="#" title="리저브를 매장에서 다양하게 즐기는 법">리저브를 매장에서 다양하게 즐기는 법</a></dd>
                                </dl>
                              </li>
                            </ul>
                            <ul className="clearfix supply">
                              <li>
                                <dl>
                                  <dt><a href="#" title="커피 이야기">커피 이야기</a></dt>
                                  <dd><a href="#" title="농장에서 우리의 손으로">농장에서 우리의 손으로</a></dd>
                                  <dd><a href="#" title="최상의 아라비카 원두">최상의 아라비카 원두</a></dd>
                                  <dd><a href="#" title="스타벅스 로스트 스펙트럼">스타벅스 로스트 스펙트럼</a></dd>
                                  <dd><a href="#" title="스타벅스 디카페인">스타벅스 디카페인</a></dd>
                                  <dd><a href="#" title="클로버® 커피 추출 시스템">클로버® 커피 추출 시스템</a></dd>
                                </dl>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sub_bottom">
                          <div className="sub_container">
                            <dl>
                              <dt><a href="#" title="나와 어울리는 커피 찾기">나와 어울리는 커피 찾기</a></dt>
                              <dd>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</dd>
                            </dl>
                            <dl>
                              <dt><a href="#" title="최상의 커피를 즐기는 법">최상의 커피를 즐기는 법</a></dt>
                              <dd>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="main_menu" title="MENU">MENU</a>
                      <div className="sub sub2">
                        <div className="sub_top">
                          <div className="sub_container">
                            <ul className="clearfix">
                              <li>
                                <dl>
                                  <dt><a href="#" title="음료">음료</a></dt>
                                  <dd><a href="#" title="콜드 브루">콜드 브루</a></dd>
                                  <dd><a href="#" title="브루드 커피">브루드 커피</a></dd>
                                  <dd><a href="#" title="에스프레소">에스프레소</a></dd>
                                  <dd><a href="#" title="프라푸치노">프라푸치노</a></dd>
                                  <dd><a href="#" title="블렌디드">블렌디드</a></dd>
                                  <dd><a href="#" title="스타벅스 피지오">스타벅스 피지오</a></dd>
                                  <dd><a href="#" title="티(티바나)">티(티바나)</a></dd>
                                  <dd><a href="#" title="기타 제조 음료">기타 제조 음료</a></dd>
                                  <dd><a href="#" title="스타벅스 주스(병음료)">스타벅스 주스(병음료)</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="푸드">푸드</a></dt>
                                  <dd><a href="#" title="브레드">브레드</a></dd>
                                  <dd><a href="#" title="케이크">케이크</a></dd>
                                  <dd><a href="#" title="샌드위치 & 샐러드">샌드위치 & 샐러드</a></dd>
                                  <dd><a href="#" title="따뜻한 푸드">따뜻한 푸드</a></dd>
                                  <dd><a href="#" title="과일 & 요거트">과일 & 요거트</a></dd>
                                  <dd><a href="#" title="스낵 & 미니 디저트">스낵 & 미니 디저트</a></dd>
                                  <dd><a href="#" title="아이스크림">아이스크림</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="상품">상품</a></dt>
                                  <dd><a href="#" title="머그">머그</a></dd>
                                  <dd><a href="#" title="글라스">글라스</a></dd>
                                  <dd><a href="#" title="플라스틱 텀블러">플라스틱 텀블러</a></dd>
                                  <dd><a href="#" title="스테인리스 텀블러">스테인리스 텀블러</a></dd>
                                  <dd><a href="#" title="보온병">보온병</a></dd>
                                  <dd><a href="#" title="액세서리">액세서리</a></dd>
                                  <dd><a href="#" title="커피 용품">커피 용품</a></dd>
                                  <dd><a href="#" title="패키지 티(티바나)">패키지 티(티바나)</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="카드">카드</a></dt>
                                  <dd><a href="#" title="실물카드">실물카드</a></dd>
                                  <dd><a href="#" title="e-Gift 카드">e-Gift 카드</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="메뉴 이야기">메뉴 이야기</a></dt>
                                  <dd><a href="#" title="나이트로 콜드브루">나이트로 콜드브루</a></dd>
                                  <dd><a href="#" title="콜드 브루">콜드 브루</a></dd>
                                  <dd><a href="#" title="스타벅스 티바나">스타벅스 티바나</a></dd>
                                </dl>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sub_bottom">
                          <div className="sub_container">
                            <dl>
                              <dt><a href="#" title="나이트로 콜드 브루">나이트로 콜드 브루<img src="./img/icon_gnb_new.png" alt="새로운메뉴"/></a></dt>
                              <dd>나이트로 커피 정통의 물결치듯 흘러내리는 캐스케이딩과 부드러운 크림을 경험하세요.</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="main_menu" title="STORE">STORE</a>
                      <div className="sub sub3">
                        <div className="sub_top">
                          <div className="sub_container">
                            <ul className="clearfix">
                              <li>
                                <dl>
                                  <dt><a href="#" title="매장 찾기">매장 찾기</a></dt>
                                  <dd><a href="#" title="퀵 검색">퀵 검색</a></dd>
                                  <dd><a href="#" title="지역 검색">지역 검색</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="드라이브 스루 매장">드라이브 스루 매장</a></dt>
                                  <dd></dd>
                                
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="스타벅스 리저브™ 매장">스타벅스 리저브™ 매장</a></dt>
                                  <dd></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="커뮤니티 스토어 매장">커뮤니티 스토어 매장</a></dt>
                                  <dd></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="매장 이야기">매장 이야기</a></dt>
                                  <dd><a href="#" title="티바나 바 매장">티바나 바 매장</a></dd>
                                </dl>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sub_bottom">
                          <div className="sub_container">
                            <dl>
                              <dt><a href="#" title="매장찾기">매장찾기</a></dt>
                              <dd>보다 빠르게 매장을 찾아보세요.</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="main_menu" title="RESPONSIBILITY">RESPONSIBILITY</a>
                      <div className="sub sub4">
                        <div className="sub_top">
                          <div className="sub_container">
                            <ul className="clearfix">
                              <li>
                                <dl>
                                  <dt><a href="#" title="사회공헌 캠페인 소개">사회공헌 캠페인 소개</a></dt>
                                  <dd></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="지역 사회 참여 활동">지역 사회 참여 활동</a></dt>
                                  <dd><a href="#" title="희망배달 캠페인">희망배달 캠페인</a></dd>
                                  <dd><a href="#" title="재능기부 카페 소식">재능기부 카페 소식</a></dd>
                                  <dd><a href="#" title="커뮤니티 스토어">커뮤니티 스토어</a></dd>
                                  <dd><a href="#" title="청년 지원 프로그램">청년 지원 프로그램</a></dd>
                                  <dd><a href="#" title="우리 농산물 사랑 캠페인">우리 농산물 사랑 캠페인</a></dd>
                                  <dd><a href="#" title="우리 문화 지키기">우리 문화 지키기</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="환경보호 활동">환경보호 활동</a></dt>
                                  <dd><a href="#" title="친환경 활동">친환경 활동</a></dd>
                                  <dd><a href="#" title="일회용 컵 없는 매장">일회용 컵 없는 매장</a></dd>
                                  <dd><a href="#" title="커피 원두 재활용">커피 원두 재활용</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="윤리 구매">윤리 구매</a></dt>
                                  <dd><a href="#" title="윤리적 원두 구매">윤리적 원두 구매</a></dd>
                                  <dd><a href="#" title="공정무역 인증">공정무역 인증</a></dd>
                                  <dd><a href="#" title="커피 농가 지원 활동">커피 농가 지원 활동</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="글로벌 사회 공헌">글로벌 사회 공헌</a></dt>
                                  <dd><a href="#" title="윤리경영 보고서">윤리경영 보고서</a></dd>
                                  <dd><a href="#" title="스타벅스 재단">스타벅스 재단</a></dd>
                                  <dd><a href="#" title="지구촌 봉사의 달">지구촌 봉사의 달</a></dd>
                                </dl>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sub_bottom">
                          <div className="sub_container">
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="main_menu" title="STARBUCKS REWARDS">STARBUCKS REWARDS</a>
                      <div className="sub sub5">
                        <div className="sub_top">
                          <div className="sub_container">
                            <ul className="clearfix">
                              <li>
                                <dl>
                                  <dt><a href="#" title="스타벅스 리워드">스타벅스 리워드</a></dt>
                                  <dd><a href="#" title="스타벅스 리워드 소개">스타벅스 리워드 소개</a></dd>
                                  <dd><a href="#" title="등급 및 혜택">등급 및 혜택</a></dd>
                                  <dd><a href="#" title="스타벅스 별">스타벅스 별</a></dd>
                                  <dd><a href="#" title="자주 하는 질문">자주 하는 질문</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="스타벅스 카드">스타벅스 카드</a></dt>
                                  <dd><a href="#" title="스타벅스 카드 소개">스타벅스 카드 소개</a></dd>
                                  <dd><a href="#" title="스타벅스 카드 갤러리">스타벅스 카드 갤러리</a></dd>
                                  <dd><a href="#" title="등록 및 조회">등록 및 조회</a></dd>
                                  <dd><a href="#" title="충전 및 이용안내">충전 및 이용안내</a></dd>
                                  <dd><a href="#" title="분실신고/환불신청">분실신고/환불신청</a></dd>
                                  <dd><a href="#" title="자주 하는 질문">자주 하는 질문</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="스타벅스 e-Gift Card">스타벅스 e-Gift Card</a></dt>
                                  <dd><a href="#" title="스타벅스 e-Gift Card 소개">스타벅스 e-Gift Card 소개</a></dd>
                                  <dd><a href="#" title="이용안내">이용안내</a></dd>
                                  <dd><a href="#" title="선물하기">선물하기</a></dd>
                                  <dd><a href="#" title="자주 하는 질문">자주 하는 질문</a></dd>
                                </dl>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="sub_bottom">
                          <div className="sub_container">
                            <dl>
                              <dt><a href="#" title="스타벅스 카드 등록하기">스타벅스 카드 등록하기</a></dt>
                              <dd>카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><a href="#" className="main_menu" title="WHAT'S NEW">WHAT'S NEW</a>
                      <div className="sub sub6">
                        <div className="sub_top">
                          <div className="sub_container">
                            <ul className="clearfix">
                              <li>
                                <dl>
                                  <dt><a href="#" title="이벤트">이벤트</a></dt>
                                  <dd><a href="#" title="전체">전체</a></dd>
                                  <dd><a href="#" title="스타벅스 카드">스타벅스 카드</a></dd>
                                  <dd><a href="#" title="스타벅스 리워드">스타벅스 리워드</a></dd>
                                  <dd><a href="#" title="온라인">온라인</a></dd>
                                  <dd><a href="#" title=" e-프리퀀시 증정품"> e-프리퀀시 증정품</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="뉴스">뉴스</a></dt>
                                  <dd><a href="#" title="전체">전체</a></dd>
                                  <dd><a href="#" title="상품 출시">상품 출시</a></dd>
                                  <dd><a href="#" title="스타벅스와 문화">스타벅스와 문화</a></dd>
                                  <dd><a href="#" title="스타벅스 사회공헌">스타벅스 사회공헌</a></dd>
                                  <dd><a href="#" title="스타벅스 카드출시">스타벅스 카드출시</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="매장별 이벤트">매장별 이벤트</a></dt>
                                  <dd><a href="#" title="일반 매장">일반 매장</a></dd>
                                  <dd><a href="#" title="신규 매장">신규 매장</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="e-프리퀀시">e-프리퀀시</a></dt>
                                  <dd><a href="#" title="이용안내">이용안내</a></dd>
                                  <dd><a href="#" title="이용현황">이용현황</a></dd>
                                </dl>
                              </li>
                              <li>
                                <dl>
                                  <dt><a href="#" title="공지사항">공지사항</a></dt>
                                  <dd></dd>
                                </dl>
                              </li>
                            </ul>
                            <ul className="clearfix supply">
                              <li>
                                <dl>
                                  <dt><a href="#" title="월페이퍼">월페이퍼</a></dt>
                                  <dd></dd>
                                </dl>
                              </li>
                              </ul>
                          </div>
                        </div>
                        <div className="sub_bottom">
                          <div className="sub_container">
                            <dl>
                              <dt><a href="#" title="매장별 이벤트">매장별 이벤트</a></dt>
                              <dd>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</dd>
                            </dl>
                            <dl>
                              <dt><a href="#" title="월페이퍼">월페이퍼</a></dt>
                              <dd>매월 업데이트되는 월페이퍼(PC/Mobile)로 스타벅스를 더욱 가깝게 즐겨보세요!</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
                <div id="mob_nav_box">
                  <ul>
                    <li><a href="#" className="user_btn"><img src="./img/icon_user_m.png" alt="user icon"/></a></li>
                    <li><a href="#" className="map_btn"><img src="./img/icon_spot_m.png" alt="map icon"/></a></li>
                    <li><a href="#" className="berger_menu_btn"><img src="./img/btn_berger_m.png" alt="berger menu"/></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </header>                
        </React.Fragment>
      );
    }
  }

  // StarBucks > Wrap > Main
  class MainComponent extends React.Component {
    render() {
      return (
        <React.Fragment>
          <main id="main">
            <section id="section1">
              <h2 className="hide">메인 베너 Carry Merry</h2>
              <div className="container">
                <span className="star star1">
                  <img src="./img/2021_chiristmas2_bg_left.png" alt="별모양이미지1"/>
                </span>
                <span className="star star2">
                  <img src="./img/2021_chiristmas2_bg_right.png" alt="별모양이미지2"/>
                </span>
              <span className="img img1">
                <img src="./img/2021_chiristmas2_slogan.png" alt="메인슬로건"/>
              </span>
              <span className="img img2">
                <img src="./img/2021_christmas2_drink.png" alt="메인이미지1"/>
              </span>
              <span className="img img3">
                <img src="./img/2021_christmas2_drink2.png" alt="메인이미지2"/>
              </span>
              <span className="img img4">
                <img src="./img/2021_christmas2_drink3.png" alt="메인이미지3"/>
              </span>
              <span className="img img5">
                <a href="#" className="detail_btn" title="자세히 보기">자세히 보기</a>
              </span>
              </div>
            </section>
            <section id="section2">
              <div id="notice">
                <div className="container">
                  <div className="notice_box">
                    <div className="notice_title">
                      <h2>
                        <span>
                          <img src="./img/notice_ttl.png" alt="Notice Title"/>
                          <img src="./img/icon_board_speaker.png" alt="Notice Title"/>
                        </span>
                      </h2>
                    </div>
                    <div className="notice_list">
                      <ul>
                        <li className="notice"><a href="#" title="스타벅스커피 코리아 원산지 오표시 관련 고객설명문">스타벅스커피 코리아 원산지 오표시 관련 고객설명문</a></li>
                        <li className="notice"><a href="#" title="사이렌 오더 주문 건수 제한 안내(11/2~12/31)">사이렌 오더 주문 건수 제한 안내(11/2~12/31)</a></li>
                        <li className="notice"><a href="#" title="2021 플래너 쿠폰 3종 유효 기간 연장 안내">2021 플래너 쿠폰 3종 유효 기간 연장 안내</a></li>
                        <li className="notice"><a href="#" title="시스템 개선 및 점검 안내">시스템 개선 및 점검 안내</a></li>
                        <li className="notice"><a href="#" title="시스템 개선 및 점검 안내">시스템 개선 및 점검 안내</a></li>
                      </ul>
                    </div>
                    <div className="notice_detail">
                      <a href="#" title="더보기버튼"><img src="./img/btn_notice_plus.png" alt="더보기버튼"/></a>
                    </div>
                  </div>
                  <div className="prom_box">
                    <div>
                      <a href="#" className="prom_btn blind" title="스타벅스 프로모션">스타벅스 프로모션</a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="slide">
                <div className="container2">
                  <div className="slide_container">
                    <div className="slide_view">
                      <ul className="slide_wrap clearfix">
                        <li className="slide slide3"><img src="./img/slide3.jpg" alt="메인슬라이드3"/><span><a href="#" title="자세히 보기">자세히 보기</a></span></li>
                        <li className="slide slide1 on"><img src="./img/slide1.jpg" alt="메인슬라이드1"/><span><a href="#" title="자세히 보기">자세히 보기</a></span></li>
                        <li className="slide slide2"><img src="./img/slide2.jpg" alt="메인슬라이드2"/><span><a href="#" title="자세히 보기">자세히 보기</a></span></li>
                        <li className="slide slide3"><img src="./img/slide3.jpg" alt="메인슬라이드3"/><span><a href="#" title="자세히 보기">자세히 보기</a></span></li>
                        <li className="slide slide1 on"><img src="./img/slide1.jpg" alt="메인슬라이드1"/><span><a href="#" title="자세히 보기">자세히 보기</a></span></li>
                      </ul>
                    </div>
                    {/* <!-- Next & Prev Button --> */}
                    <span className="next_btn_box"><a href="#" className="next_btn blind" title="Next Button">Next Button</a></span>
                    <span className="prev_btn_box"><a href="#" className="prev_btn blind" title="Prev Button">Prev Button</a></span>
                    {/* <!-- Indicator --> */}
                    <div className="page_btn_box">
                      <span><a href="#" className="play_btn on" title="Play & Pause Button"><img src="./img/main_prom_stop.png" alt="Play & Pause Button"/></a></span>
                      <span><a href="#" className="page_btn" title="Page1 Button"><img src="./img/main_prom_on.png" alt="Page1 Button"/></a></span>
                      <span><a href="#" className="page_btn" title="Page2 Button"><img src="./img/main_prom_off.png" alt="Page2 Button"/></a></span>
                      <span><a href="#" className="page_btn" title="Page3 Button"><img src="./img/main_prom_off.png" alt="Page3 Button"/></a></span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="section3">
              <div className="container">
                <div className="left">
                  <div className="gap">
                    <div className="content">
                      <h2><img src="./img/rewards-logo.png" alt="리워드 로고"/></h2>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="top">
                    <div className="top_left">
                      <div className="content">
                        <h3>스타벅스만의 특별한 혜택,<br/><strong> 스타벅스 리워드</strong></h3>
                        <p><strong>스타벅스 회원이세요?</strong><br className="las_br"/> 로그인을 통해<br className="fir_br"/> 나만의 리워드를 확인해보세요.</p>
                        <p><strong>스타벅스 회원이 아니세요?</strong><br/> 가입을 통해 리워드 혜택을 즐기세요.</p>
                      </div>
                    </div>
                    <div className="top_right">
                      <div className="content">
                        <a href="#" className="signup_btn" title="회원가입">회원가입</a>
                        <a href="#" className="login_btn" title="로그인">로그인</a>
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="bot_left">
                      <div className="content">
                        <p>회원 가입 후, 스타벅스 e-Gift Card를<strong><br/> "나에게 선물하기"로 구매하시고,<br className="las_br"/> 편리하게 등록하세요!</strong>
                          </p>
                        <p>
                          카드를 등록하여 스타벅스 리워드 회원이 되신 후,<br/> 첫 구매를 하시면 무료 음료쿠폰을 드립니다!
                        </p>
                      </div>
                    </div>
                    <div className="bot_right">
                      <div className="content">
                        <a href="#" className="gift_btn" title="e-Gift Card 선물하기">e-Gift Card 선물하기</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="section4">
              <div className="container">
                <div className="img_box">
                  <div className="wrap">
                    <h2><img src="./img/2021_chrsitmas_bean.png" alt="블론드 이미지"/></h2>
                  </div>
                </div>
                <div className="txt_box">
                  <div className="wrap">
                    <h2><img src="./img/2021_chrsitmas_bean_txt.png" alt="블론드 텍스트"/></h2>
                    <p><a href="#" title="자세히 보기">자세히 보기</a></p>
                  </div>
                </div>
              </div>
            </section>
            <section id="section5">
              <div className="container">
                <div className="title">
                  <h2><img src="./img/reserve_christmas_bean_title_211018.png" alt="Reserve The Merry"/></h2>
                  <p><a href="#" title="자세히 보기">자세히 보기</a></p>
                </div>
              </div>
            </section>
            <section id="section6">
              <div className="container">
                <div className="left">
                  <h2><img src="./img/fav_prod_txt01.png" alt="Pick Your..."/></h2>
                  <h3><img src="./img/fav_prod_txt02.png" alt="다양한 메뉴를..."/></h3>
                  <p><a href="#" title="자세히 보기">자세히 보기</a></p>
                </div>
                <div className="right">
                  <img src="./img/2021_christmas2_fav.png" alt="Pick Your..."/>
                </div>
              </div>
            </section>
            <section id="section7">
              <div className="container">
                <div className="left">
                  <h2><img src="./img/reserve_text_pc.png" alt="Reserve Magazine"/></h2>
                  <p><a href="#" title="자세히 보기">자세히 보기</a></p>
                </div>
                <div className="right">
                  <img src="./img/reserve_visual_pc.png" alt="Reserve Magazine Image"/>
                </div>
              </div>
            </section>
            <section id="section8">
              <div className="container">
                <div className="wrap">
                  <div className="left">
                    <span><img src="./img/store_exp_img01.png" alt="커피이미지"/></span>
                  </div>
                  <div className="right">
                    <h2><img src="./img/store_txt01.png" alt="store_txt"/></h2>
                    <h3><img src="./img/store_txt02.png" alt="store_txt"/></h3>
                    <p><a href="#" title="매장 찾기">매장 찾기</a></p>
                  </div>
                </div>
              </div>
            </section>
          </main>         
        </React.Fragment>
      );
    }
  }
  
  // StarBucks > Wrap > Footer
  class FooterComponent extends React.Component {
    render() {
      return (
        <React.Fragment>
          <footer id="footer">
            <div className="container">
                <div className="top">
                  <div className="wrap">
                    <ul>
                      <li className="mobile">
                        <dl>
                          <dt><a href="#" title="CUSTOMER SERVICE & IDEAS">CUSTOMER SERVICE & IDEAS</a></dt>
                          <dd><a href="#" title="자주 하는 질문">자주 하는 질문</a></dd>
                          <dd><a href="#" title="고객의 소리">고객의 소리</a></dd>
                          <dd className="mobile_arrow"><a href="#" title="스타벅스 이용 팁">스타벅스 이용 팁</a></dd>
                          <dd><a href="#" title="고객 경험 설문조사">고객 경험 설문조사</a></dd>
                          <dd><a href="#" title="비회원 전자영수증 조회">비회원 전자영수증 조회</a></dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt><a href="#" title="COMPANY">COMPANY</a></dt>
                          <dd><a href="#" title="한눈에 보기">한눈에 보기</a></dd>
                          <dd><a href="#" title="스타벅스 사명">스타벅스 사명</a></dd>
                          <dd className="mobile_arrow"><a href="#" title="스타벅스 소개">스타벅스 소개</a></dd>
                          <dd><a href="#" title="국내 뉴스룸">국내 뉴스룸</a></dd>
                          <dd><a href="#" title="세계의 스타벅스">세계의 스타벅스</a></dd>
                          <dd><a href="#" title="글로벌 뉴스룸">글로벌 뉴스룸</a></dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt><a href="#" title="CORPORATE SALES">CORPORATE SALES</a></dt>
                          <dd><a href="#" title="단체 및 기업 구매 안내">단체 및 기업 구매 안내</a></dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt><a href="#" title="PARTNERSHIP">PARTNERSHIP</a></dt>
                          <dd><a href="#" title="신규 입점 제의">신규 입점 제의</a></dd>
                          <dd><a href="#" title="협력 고객사 등록신청">협력 고객사 등록신청</a></dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt><a href="#" title="ONLINE COMMUNITY">ONLINE COMMUNITY</a></dt>
                          <dd><a href="#" title="페이스북">페이스북</a></dd>
                          <dd><a href="#" title="트위터">트위터</a></dd>
                          <dd><a href="#" title="유튜브">유튜브</a></dd>
                          <dd><a href="#" title="인스타그램">인스타그램</a></dd>
                        </dl>
                      </li>
                      <li>
                        <dl>
                          <dt><a href="#" title="RECRUIT">RECRUIT</a></dt>
                          <dd><a href="#" title="채용 소개">채용 소개</a></dd>
                          <dd><a href="#" title="채용 지원하기">채용 지원하기</a></dd>
                        </dl>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="middle">
                  <div className="wrap">
                    <span><a href="#" title="여성가족부장관상"><img src="./img/footer_award23.jpg" alt="여성가족부장관상"/></a></span>
                    <span><a href="#" title="행정안전부장관 표창"><img src="./img/footer_award24.jpg" alt="행정안전부장관 표창"/></a></span>
                    <span><a href="#" title="농림축산식품부 장관상"><img src="./img/footer_award25.jpg" alt="농림축산식품부 장관상"/></a></span>
                    <span><a href="#" title="국회산업통상자원중소벤처위원회장상"><img src="./img/footer_award26.jpg" alt="국회산업통상자원중소벤처위원회장상"/></a></span>
                    <span><a href="#" title="태통령직속 일자리위원회 부위원장상"><img src="./img/footer_award27.jpg" alt="태통령직속 일자리위원회 부위원장상"/></a></span>
                    <span><a href="#" title="동반성장위원회 위원장상"><img src="./img/footer_award28.jpg" alt="동반성장위원회 위원장상"/></a></span>
                  </div>
                </div>
                <div className="bottom">
                  <ul>
                    <li>
                      <div>
                        <span><a href="#" title="개인정보처리방침">개인정보처리방침</a></span>
                        <span><i></i></span>
                        <span><a href="#" title="영상정보처리기기 운영관리 방침">영상정보처리기기 운영관리 방침</a></span>
                        <span><i></i></span>
                        <span><a href="#" title="홈페이지 이용약관">홈페이지 이용약관</a></span>
                        <span><i></i></span>
                        <span><a href="#" title="위치정보 이용약관">위치정보 이용약관</a></span>
                        <span><i></i></span>
                        <span><a href="#" title="스타벅스 카드 이용약관">스타벅스 카드 이용약관</a></span>
                        <span><i></i></span>
                        <span><a href="#" title="비회원 이용약관">비회원 이용약관</a></span>
                        <span><i></i></span>
                        <span><a href="#" title="My DT Pass 서비스 이용약관">My DT Pass 서비스 이용약관</a></span>
                        <span><i></i></span>
                        <span><a href="#" title="윤리경영 핫라인">윤리경영 핫라인</a></span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span><a href="#" title="찾아오시는 길">찾아오시는 길</a></span>
                        <span><a href="#" title="신규입점제의">신규입점제의</a></span>
                        <span><a href="#" title="사이트 맵">사이트 맵</a></span>
                      </div>
                    </li>
                    <li>
                      <address>
                        <p>사업자등록번호 : 201-81-21515</p>
                        <p>(주)스타벅스커피 코리아 대표이사 : 송 데이비드 호섭</p>
                        <p>TEL : 1522-3232</p>
                        <p>개인정보 책임자 : 하익성</p>
                      </address>
                    </li>
                    <li>
                      <p>&copy; 2021 Starbucks Coffee Company. All Rights Reserved.</p>
                    </li>
                  </ul>
                </div>
            </div>
          </footer>          
        </React.Fragment>
      );
    }
  }

  // StarBucks > MobileMenu
  class MobileMenuComponent extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div id="mobile_menu">
            <div className="m_container">
              <ul>
                <li>
                  <form name="searchform" method="post" action="abc.php">
                    <div className="m_search_box">
                      <input type="text" name="m_search" id="m_search"/>
                      <button>Search</button>
                    </div>
                  </form>
                </li>
                <li>
                  <a href="#" className="m_menu_btn">My Starbucks</a>
                  <div className="mob_sub">
                    <ul>
                      <li><a href="#">한눈에 보기</a></li>
                      <li>
                        <a href="#" className="sub_arrow">My 리워드</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">리워드 및 혜택</a></li>
                            <li><a href="#">별 히스토리</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">My 스타벅스 카드</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">보유 카드</a></li>
                            <li><a href="#">카드 등록</a></li>
                            <li><a href="#">카드 충전</a></li>
                            <li><a href="#">분실신고/잔액이전</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">My 스타벅스 e-Gift Card</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">선물하기</a></li>
                            <li><a href="#">선물 내역</a></li>
                            <li><a href="#">장바구니 내역</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">My 쿠폰</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">등록하기</a></li>
                            <li><a href="#">선물하기</a></li>
                            <li><a href="#">사용하기</a></li>
                          </ul>
                        </div>
                      </li>
                      <li><a href="#">My 캘린더</a></li>
                      <li><a href="#">My 메뉴</a></li>
                      <li><a href="#">My 고객의 소리</a></li>
                      <li><a href="#">전자영수증</a></li>
                      <li><a href="#">개인컵 리워드 설정</a></li>
                      <li><a href="#">My DT Pass</a></li>
                      <li>
                        <a href="#" className="sub_arrow">개인정보관리</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">개인정보확인 및 수정</a></li>
                            <li><a href="#">회원 탈퇴</a></li>
                            <li><a href="#">비밀번호 변경</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" className="m_menu_btn">COFFEE</a>
                  <div className="mob_sub">
                    <ul>
                      <li><a href="#">한눈에 보기</a></li>
                      <li>
                        <a href="#" className="sub_arrow">커피</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">스타벅스 원두</a></li>
                            <li><a href="#">스타벅스 비아</a></li>
                            <li><a href="#">스타벅스앳홈 by 캡슐</a></li>
                          </ul>
                        </div>
                      </li>
                      <li><a href="#">나와 어울리는 커피</a></li>
                      <li>
                        <a href="#" className="sub_arrow">스타벅스 리저브™</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">RESERVE MAGAZINE</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">에스프레소 음료</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">도피오</a></li>
                            <li><a href="#">에스프레소 마키아또</a></li>
                            <li><a href="#">아메리카노</a></li>
                            <li><a href="#">마키아또</a></li>
                            <li><a href="#">카푸치노</a></li>
                            <li><a href="#">라떼</a></li>
                            <li><a href="#">모카</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">최상의 커피를 즐기는 법</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">커피 프레스</a></li>
                            <li><a href="#">푸어 오버</a></li>
                            <li><a href="#">아이스 푸어 오버</a></li>
                            <li><a href="#">커피 메이커</a></li>
                            <li><a href="#">리저브를 매장에서 다양하게 즐기는 법</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">커피 이야기</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">농장에서 우리의 손으로</a></li>
                            <li><a href="#">최상의 아라비카 원두</a></li>
                            <li><a href="#">스타벅스 로스트 스펙트럼</a></li>
                            <li><a href="#">스타벅스 디카페인</a></li>
                            <li><a href="#">클로버® 커피 추출 시스템</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" className="m_menu_btn">MENU</a>
                  <div className="mob_sub">
                    <ul>
                      <li><a href="#">한눈에 보기</a></li>
                      <li>
                        <a href="#" className="sub_arrow">음료</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">전체보기</a></li>
                            <li><a href="#">콜드 브루</a></li>
                            <li><a href="#">브루드 커피</a></li>
                            <li><a href="#">에스프레소</a></li>
                            <li><a href="#">프라푸치노</a></li>
                            <li><a href="#">블렌디드</a></li>
                            <li><a href="#">스타벅스 피지오</a></li>
                            <li><a href="#">티(티바나)</a></li>
                            <li><a href="#">기타 제조 음료</a></li>
                            <li><a href="#">스타벅스 주스(병음료)</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">푸드</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">전체보기</a></li>
                            <li><a href="#">브레드</a></li>
                            <li><a href="#">케이크</a></li>
                            <li><a href="#">샌드위치 & 샐러드</a></li>
                            <li><a href="#">따뜻한 푸드</a></li>
                            <li><a href="#">과일 & 요거트</a></li>
                            <li><a href="#">스낵 & 미니 디저트</a></li>
                            <li><a href="#">아이스크림</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">상품</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">전체보기</a></li>
                            <li><a href="#">머그</a></li>
                            <li><a href="#">글라스</a></li>
                            <li><a href="#">플라스틱 텀블러</a></li>
                            <li><a href="#">스테인리스 텀블러</a></li>
                            <li><a href="#">보온병</a></li>
                            <li><a href="#">액세서리</a></li>
                            <li><a href="#">커피 용품</a></li>
                            <li><a href="#">패키지 티(티바나)</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">카드</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">전체보기</a></li>
                            <li><a href="#">실물카드</a></li>
                            <li><a href="#">e-Gift 카드</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">메뉴 이야기</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">나이트로 콜드브루</a></li>
                            <li><a href="#">콜드 브루</a></li>
                            <li><a href="#">스타벅스 티바나</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" className="m_menu_btn">STORE</a>
                  <div className="mob_sub">
                    <ul>
                      <li><a href="#">한눈에 보기</a></li>
                      <li>
                        <a href="#" className="sub_arrow">매장 찾기</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">빠른 검색</a></li>
                            <li><a href="#">지역 검색</a></li>
                          </ul>
                        </div>
                      </li>
                      <li><a href="#">드라이브 스루 매장</a></li>
                      <li><a href="#">스타벅스 리저브™ 매장</a></li>
                      <li><a href="#">커뮤니티 스토어 매장</a></li>
                      <li>
                        <a href="#" className="sub_arrow">매장 이야기</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">티바나 바 매장</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" className="m_menu_btn">RESPONSIBILITY</a>
                  <div className="mob_sub">
                    <ul>
                      <li><a href="#">한눈에 보기</a></li>
                      <li><a href="#">사회공헌 캠페인 소개</a></li>
                      <li>
                        <a href="#" className="sub_arrow">지역 사회 참여 활동</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">희망배달 캠페인</a></li>
                            <li><a href="#">재능기부 카페 소식</a></li>
                            <li><a href="#">커뮤니티 스토어</a></li>
                            <li><a href="#">청년 지원 프로그램</a></li>
                            <li><a href="#">우리 농산물 사랑 캠페인</a></li>
                            <li><a href="#">우리 문화 지키기</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">환경보호 활동</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">친환경 활동</a></li>
                            <li><a href="#">일회용 컵 없는 매장</a></li>
                            <li><a href="#">커피 원두 재활용</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">윤리 구매</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">윤리적 원두 구매</a></li>
                            <li><a href="#">공정무역 인증</a></li>
                            <li><a href="#">커피 농가 지원 활동</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">글로벌 사회 공헌</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">윤리경영 보고서</a></li>
                            <li><a href="#">스타벅스 재단</a></li>
                            <li><a href="#">지구촌 봉사의 달</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" className="m_menu_btn">Starbucks Rewards</a>
                  <div className="mob_sub">
                    <ul>
                      <li><a href="#">한눈에 보기</a></li>
                      <li>
                        <a href="#" className="sub_arrow">스타벅스 리워드</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">스타벅스 리워드 소개</a></li>
                            <li><a href="#">등급 및 혜택</a></li>
                            <li><a href="#">스타벅스 별</a></li>
                            <li><a href="#">자주 하는 질문</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">스타벅스 카드</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">스타벅스 카드 소개</a></li>
                            <li><a href="#">스타벅스 카드 갤러리</a></li>
                            <li><a href="#">등록 및 조회</a></li>
                            <li><a href="#">충전 및 이용안내</a></li>
                            <li><a href="#">분실신고/환불신청</a></li>
                            <li><a href="#">자주 하는 질문</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">스타벅스 e-Gift Card</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">스타벅스 e-Gift Card 소개</a></li>
                            <li><a href="#">이용안내</a></li>
                            <li><a href="#">선물하기</a></li>
                            <li><a href="#">자주 하는 질문</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" className="m_menu_btn">WHAT'S NEW</a>
                  <div className="mob_sub">
                    <ul>
                      <li><a href="#">한눈에 보기</a></li>
                      <li>
                        <a href="#" className="sub_arrow">이벤트</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">전체</a></li>
                            <li><a href="#">스타벅스 카드</a></li>
                            <li><a href="#">스타벅스 리워드</a></li>
                            <li><a href="#">온라인</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">뉴스</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">전체</a></li>
                            <li><a href="#">상품 출시</a></li>
                            <li><a href="#">스타벅스와 문화</a></li>
                            <li><a href="#">스타벅스 사회공헌</a></li>
                            <li><a href="#">스타벅스 카드출시</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="sub_arrow">매장별 이벤트</a>
                        <div className="mob_sub_sub">
                          <ul>
                            <li><a href="#">일반 매장</a></li>
                            <li><a href="#">신규 매장</a></li>
                          </ul>
                        </div>
                      </li>
                      <li><a href="#">공지사항</a></li>
                      <li><a href="#">월페이퍼</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="close_box">
                <a href="#" className="m_menu_cl_btn blind">메뉴 닫기</a>
              </div>
            </div>
          </div>          
        </React.Fragment>
      );
    }
  }

  // StarBucks > QuickMenu
  class QuickMenuComponent extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div className="quick_menu">
            <a href="#"><img src="./img/lIpY1G_20211130084912188.png" alt="스타벅스 현대카드"/></a>
          </div>         
        </React.Fragment>
      );
    }
  }

  // StarBucks > GoTopButtonBox
  class GoTopComponent extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div className="go_top_box">
            <a href="#" className="go_top_btn"><img src="./img/arrow_right_on.png" alt="Go Top Button"/></a>
          </div>               
        </React.Fragment>
      );
    }
  }

  // StarBucks > Validator
  class ValidatorComponent extends React.Component {
    render() {
      return (
        <React.Fragment>
          <div className="validator">
            <p className="validator_html">
              <a href="http://validator.kldp.org/check?uri=referer">
                <img src="http://validator.kldp.org/w3cimgs/validate/html5-blue.png" alt="Valid HTML 5" height="15" width="80"/></a>
            </p>
            <p className="validator_css">
              <a href="http://jigsaw.w3.org/css-validator/check/referer">
                  <img style={{border:'0',width:'80px',height:'15px'}}
                      src="http://validator.kldp.org/w3cimgs/validate/css-blue.png"
                      alt="올바른 CSS입니다!"/>
                  </a>
              </p>
          </div>               
        </React.Fragment>
      );
    }
  }


  ReactDOM.render(
    <StarBucks/>,
    document.getElementById('root')
  );