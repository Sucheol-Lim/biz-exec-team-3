# workspace_biz_3rd 과제 문서 사이트

Altimedia OTT · Smart TV · 차량 인포테인먼트 · IoT 클라이언트 과제 20건의 기능 설명 정적 사이트입니다. 각 과제의 주요 기능마다 **시퀀스 다이어그램 · 클래스 다이어그램 · 코드 스니펫**을 담은 상세 페이지(총 285개)를 제공합니다.

## 구조

```
index.html              # 전체 과제 목록 (진입점)
assets/                 # 공유 자산
  detail.css            #   상세 페이지 공용 스타일
  detail.js             #   Mermaid 초기화 (라이트/다크)
  mermaid.min.js        #   Mermaid v11 로컬 번들 (오프라인 렌더)
<repo>/                 # 과제별 폴더 (20개)
  index.html            #   과제 개요 (기능 카드 → 상세 이동)
  f01.html … fNN.html   #   기능 상세 페이지
```

모든 내부 링크는 상대 경로라 하위 경로(`https://<user>.github.io/<repo>/`)에서도 그대로 동작합니다.

## 로컬에서 보기

```bash
cd project-docs
python3 -m http.server 8000
# → http://127.0.0.1:8000/
```

`open index.html`(file://)로도 열리지만, 폴더 인덱스/일부 동작 때문에 로컬 서버 사용을 권장합니다.

## GitHub Pages 배포

1. GitHub에 저장소 생성 후 push.
2. 저장소 **Settings → Pages → Build and deployment → Source: Deploy from a branch** 선택.
3. **Branch: `main` / 폴더: `/ (root)`** 지정 후 Save.
4. 잠시 뒤 `https://<user>.github.io/<repo>/` 에서 공개됩니다.

> 참고. GitHub Pages로 발행된 사이트는 저장소가 private이더라도 URL을 아는 누구나 접근 가능합니다(접근 제어 Pages는 Enterprise Cloud 전용). 사이트 내 사내 호스트/Bitbucket·Confluence 링크는 각 서비스의 권한자만 실제로 사용할 수 있습니다.

## 비고

- 내부 도구·백업(`.specs/`, `_verify.html`, `_template.html`)은 `.gitignore`로 배포에서 제외됩니다.
- 다이어그램은 Mermaid를 로컬 번들해 오프라인에서도 렌더됩니다.
