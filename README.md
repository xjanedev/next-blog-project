# 🚀 Blog project

## 📍 About Project

> Next.js 13 버전으로 만든 블로그 프로젝트 입니다. 나만의 커스텀블로그를 직접 기
> 획/구현 해보았습니다. <br/> 현재 블로그 포스트 추가와 리팩토링 진행예정 입니다
> .

<br/>
### ⚙️ Demo

https://github.com/xxslx/mylog-project/assets/127685269/fe0a1f87-30b4-4740-9219-42fd7f17768d

<br/>

### 📍 Screenshot

<img width="1786" alt="스크린샷 2023-07-19 오전 2 57 12" src="https://github.com/xxslx/mylog-project/assets/127685269/0d0b1794-e6c7-4a98-8dfb-abcac5fbe20b">

<br/>
<br/>

## 🛠️ Technical details

<div display=flex >
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>

<br/>

## 📍 Highlights

| feature                     | description                                                                  |
| --------------------------- | ---------------------------------------------------------------------------- |
| 카테고리 분류               | 카테고리 별로 포스트 분류하기                                                |
| 포스트 선별적 분류          | 메인 페이지에 보여주고 싶은 페이지만 선별적으로 보여주고 최신순으로 분류하기 |
| 반응형 지원                 | 반응형 UI로 모바일 최적화                                                    |
| 이전과 다음 포스트 보여주기 | 포스트 페이지 하단에 이전, 다음 포스트로 이동하기                            |
| 다크모드                    | 토글형식으로 다크/라이트 모드 손쉽게 변경하기                                |

<br/>

## 📍 Next.js 선정 이유

- SEO 최적화: Next.js의 SSR 기능으로 검색 엔진 최적화가 가능함 <br/>
- 사전 렌더링: Next.js는 사이트의 모든 페이지를 사전에 생성하여 빠른 로딩 속도와
  성능 제공 <br/>
- 이미지 최적화: Next.js의 Image 컴포넌트로 사용자의 스크롤위치에 따라 해당 이미
  지를 fetching 하여 <br/> 초기 로딩 속도 향상시켜 효율적인 데이터 관리 가능
  <br/>
- 서버와 클라이언트 구분: Next.js는 작은 컴포넌트 단위로 필요한 부분만 서버 또는
  클라이언트에서 렌더링하여 <br/> 자바스크립트 번들링 크기를 줄여주고 성능을 향
  상 시킴 <br/>
- 확장성과 유연성: 다양한 플러그인과 API 라우팅 기능을 통해 블로그의 확장성과 유
  연성을 높임 <br/>

<br/>

## 📚 File Structure

```
mylog-project/
  ├─ public/      # 어플리케이션에 사용되는 정적 파일들
  │   └── assets/
  │        ├── images/
  │        └── posts/
  │
  ├─ src/
  │   ├─ app/            # 페이지 라우팅
  │   │   ├── about/
  │   │   └── posts/             # Posts 동적으로 불러옴
  │   │       └── [slug].tsx
  │   │       └── page.tsx
  │   │
  │   │   ├── globals.css        # Global CSS
  │   │   ├── layout.tsx         # Layout component
  │   │   └── page.tsx
  │   │
  │   ├─ components/             # Reusable React components
  │   ├─ services/               # Services 비지니스 로직 분류
  │   └─ Providers.tsx           # 다크모드 관리
  │
  └─ README.md


```

<br/>

## 📍 프로젝트 후기

> Next.js 13버전을 사용한 정적 블로그 웹사이트 프로젝트

- 나만의 커스텀 블로그를 만들어봤다는 점과 Next.js 의 새로운 기능과 개선된성능을
  경험하고 학습할 수 있어 <br/> 만족스러운 경험이었습니다. 특히 라우팅, 컴포넌트
  기반 개발을 간편하게 처리할 수 있어 생산성을 높일 수 있는 점도 배울 수 있었습
  니다. <br/>
- SEO 측면에서는 필요한 페이지 별로 적합한 metadata를 정의 하여 관리하고 이에 따
  라 검색 결과에 표시되는 제목 설명 <br/> 등도 조정할 수 있었습니다. 아래는
  Next.js에서 새롭게 느낀점과 다시한번 배울 수 있었던 점들을 정리하였습니다.
  <br/>

<br/>

> 1. 컴포넌트 단위로 렌더링 방식 규정 <br/>

- 더이상 페이지 단위가 아니라 컴포넌트 단위로 렌더링 방식을 규정하여서 살짝 복잡
  하다고 느꼈지만, 오히려 server, client 컴포넌트를 혼합해서 사용이 가능하여 페
  이지의 어떤 부분을 클라이언트 컴포넌트로 만들것인지 또 어떠한 부분을 서버 컴포
  넌트로 구성해야 하는지를 생각하면서 구성할 수 있었습니다. 또 한가지는 클라이언
  트에서 API 요청을 따로 하지 않아도 되는 점이 편리하였습니다.

> 2. cache 함수 사용 <br/>

- 자동으로 중복 제거가 되어 한번만 데이터를 불러올 수 있는 fetch함수와는 다르게
  데이터 베이스에 접근하거나 파일을 읽는 함수들은 여러번 호출이 필요한 경우 자동
  으로 중복 방지가 되지않아, cache 함수로 감싸 성능을 개선해주는 방법입니다. 한
  페이지 안에서 인자가 한 번 호출되고 동일한 인자라면, 그 후 불러오는 값은 이전
  에 캐싱된 값을 반환하여 중복을 방지 할 수 있어 페이지 로딩 속도를 개선 할 수있
  었습니다.

> 3. generateStaticParams()로 원하는 포스트를 미리 생성하기 <br/>

- generateStaticParams 함수는 동적 라우트 세그먼트와 결합하여 라우트를 빌드 시간
  에 정적으로 생성하여 데이터를 효율적으로 관리할 수 있었습니다. 특정 페이지를
  SSG로 만들기 위해 generateStaticParams함수를 사용하여 메인페이지 같은 사용자접
  근이 많은 곳에 보여주고 싶은 포스트를 미리 생성하여 사용자 경험을 향상 시킬 수
  있다고 느꼈습니다.

<br/>
