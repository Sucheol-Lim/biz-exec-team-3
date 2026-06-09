// Mermaid 다이어그램을 라이트/다크 테마에 맞춰 초기화하는 부트스트랩 (로컬 번들 mermaid.min.js 의존)
(function () {
  function start() {
    if (!window.mermaid) { return; }
    var dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var fontFamily = '-apple-system,BlinkMacSystemFont,"Apple SD Gothic Neo",Pretendard,"Noto Sans KR",sans-serif';
    window.mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: dark ? 'dark' : 'neutral',
      themeVariables: {
        fontFamily: fontFamily,
        fontSize: '14px',
        primaryColor: dark ? '#1f6feb22' : '#2563eb14',
        lineColor: dark ? '#9198a1' : '#59636e'
      },
      sequence: { useMaxWidth: true, mirrorActors: false, showSequenceNumbers: false },
      class: { useMaxWidth: true },
      flowchart: { useMaxWidth: true, htmlLabels: true }
    });
    window.mermaid.run({ querySelector: '.mermaid' });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
