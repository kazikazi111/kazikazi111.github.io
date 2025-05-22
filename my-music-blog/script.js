document.addEventListener('DOMContentLoaded', function() {
    // 主要記事のカード画像を取得
    const articleCards = document.querySelectorAll('.featured-articles .article-card img');

    articleCards.forEach(img => {
        img.addEventListener('mouseenter', function() {
            // マウスが乗ったら画像を少し大きくする
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease'; // スムーズな変化
        });

        img.addEventListener('mouseleave', function() {
            // マウスが離れたら元のサイズに戻す
            this.style.transform = 'scale(1)';
        });
    });

    // もしカード全体を少し大きくしたいなら、CSSの :hover を使うのが簡単だよ！
    // 例: .article-card:hover img { transform: scale(1.05); }
    // このJavaScriptは、画像のみを対象にしています。
});