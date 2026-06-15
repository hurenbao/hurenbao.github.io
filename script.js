document.addEventListener('DOMContentLoaded', function() {
    // 轮播图功能（首页用）
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel && prevBtn && nextBtn) {
        let index = 0;
        const slides = carousel.children.length;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + slides) % slides;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            index = (index + 1) % slides;
            updateCarousel();
        });

        // 自动轮播，每5秒切换一次
        setInterval(() => {
            index = (index + 1) % slides;
            updateCarousel();
        }, 5000);
    }

    // 表单验证功能（用户调研页用）
    const form = document.getElementById('surveyForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // 第1题：必须选
            const visited = document.querySelector('input[name="visited"]:checked');
            const visitedError = document.getElementById('visitedError');
            if (!visited) {
                visitedError.classList.remove('hidden');
                isValid = false;
            } else {
                visitedError.classList.add('hidden');
            }

            // 第2题：至少选一个
            const cities = document.querySelectorAll('input[name="cities"]:checked');
            const citiesError = document.getElementById('citiesError');
            if (cities.length === 0) {
                citiesError.classList.remove('hidden');
                isValid = false;
            } else {
                citiesError.classList.add('hidden');
            }

            // 第3题：必须选
            const companions = document.querySelector('select[name="companions"]');
            const companionsError = document.getElementById('companionsError');
            if (!companions.value) {
                companionsError.classList.remove('hidden');
                isValid = false;
            } else {
                companionsError.classList.add('hidden');
            }

            // 第4题：必须选
            const days = document.querySelector('input[name="days"]:checked');
            const daysError = document.getElementById('daysError');
            if (!days) {
                daysError.classList.remove('hidden');
                isValid = false;
            } else {
                daysError.classList.add('hidden');
            }

            // 第5题：建议框可不填，不做验证

            // 验证通过，提交表单并弹出提示
            if (isValid) {
                alert('感谢您的参与！');
                form.reset();
            }
        });
    }
});