const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(index) {
    pages.forEach(page => {
        page.style.display = 'none';
        page.style.transform = 'rotateY(0deg)';
        page.style.transition = 'transform 0.6s';
    });

    // ページめくりエフェクトを追加
    pages[index].style.display = 'block';
    pages[index].style.transform = 'rotateY(00deg)'; // ページをめくるように回転
    pages[index].style.transition = 'transform 0.6s';

    // 現在のページの動画を停止
    pages.forEach(page => {
        const video = page.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });

    // 現在のページの動画を自動再生
    const currentVideo = pages[index].querySelector('video');
    if (currentVideo) {
        currentVideo.play();
    }
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);