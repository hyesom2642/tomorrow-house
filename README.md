# TOMORROW-HOUSE

### 1. GNB

- NOTE : 로그인을 한 경우

```html
<div class="gnb-button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a href="#" class="sm-hidden" aria-label="스크랩북 페이지로 이동">
    <i class="ic-bookmark gnb-icon-button"></i>
  </a>

  <a
    href="#"
    class="sm-hidden gnb-icon-button"
    aria-label="내소식 페이지로 이동"
  >
    <i class="ic-bell"></i>
    <strong class="badge">999+</strong>
  </a>

  <a href="#" class="gnb-icon-button" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <strong class="badge">7</strong>
  </a>

  <button
    class="sm-hidden gnb-avatar-button"
    type="button"
    aria-label="마이페이지 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/user-01.jpg" alt="user-profile1" />
    </div>
  </button>
</div>
```

- NOTE : 로그인을 하지 않은 경우

```html
<div class="gnb-button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a href="#" class="gnb-icon-button" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <strong class="badge">7</strong>
  </a>
  <div class="gnb-auth sm-hidden">
    <a href="#" aria-label="로그인"> 로그인 </a>
    <a href="#" aria-label="회원가입"> 회원가입 </a>
  </div>
</div>
```

### 2. Sidebar

- NOTE : 로그인을 한 경우

```html
<div class="sidebar-user">
  <a href="#">
    <div class="avatar-24">
      <img src="./assets/images/user-01.jpg" alt="유저프로필" />
    </div>
    <strong class="username">춘식이</strong>
  </a>
</div>
```

- NOTE : 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a href="#" class="btn-40 btn-outlined">로그인</a>
  <a href="#" class="btn-40 btn-fill-primary">회원가입</a>
</div>
```
