document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = content.classList.contains('open');

            document.querySelectorAll('.accordion-content').forEach(item => {
                item.classList.remove('open');
            });

            if (!isOpen) {
                content.classList.add('open');
            }
        });
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    const images = document.querySelectorAll('.gallery img');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            images.forEach(img => {
                if (filter === 'all') {
                    img.style.display = 'block';
                } else {
                    const categories = img.getAttribute('data-category').split(' ');
                    if (categories.includes(filter)) {
                        img.style.display = 'block';
                    } else {
                        img.style.display = 'none';
                    }
                }
            });
        });
    });

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');

    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });

    closeBtn.onclick = () => modal.style.display = 'none';
    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.style.display = 'none';
    });
});