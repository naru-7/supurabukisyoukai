document.addEventListener('DOMContentLoaded', () => {
    // 画面全体を覆うオーバーレイ要素を自動生成
    const overlay = document.createElement('div');
    overlay.classList.add('screen-overlay');
    document.body.appendChild(overlay);

    // .works 内のリンクやタイトルを取得
    const targets = document.querySelectorAll('.works a, .works .section-title');

    targets.forEach(target => {
        target.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href && href !== '#') {
                // 1. 即時の画面切り替えをストップ
                e.preventDefault();

                // 2. 円形アニメーションを開始（0.8秒間）
                overlay.classList.add('is-active');

                // 3. ぴったり0.8秒後にページを切り替える
                setTimeout(() => {
                    if (this.getAttribute('target') === '_blank') {
                        window.open(href, '_blank');
                        overlay.classList.remove('is-active');
                    } else {
                        window.location.href = href;
                    }
                }, 500); // 0.5秒（500ms）ぴったりで切り替え
            } else {
                // リンク先がない要素の場合はアニメーション表示のみ行う
                overlay.classList.add('is-active');
                setTimeout(() => {
                    overlay.classList.remove('is-active');
                }, 800);
            }
        });
    });
});