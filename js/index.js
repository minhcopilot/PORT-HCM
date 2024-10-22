document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.news-categories .nav-link');
    const contentSections = document.querySelectorAll('.featured-news .news-category-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Hide all content sections
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the corresponding content section
            const contentId = this.getAttribute('data-content');
            const contentToShow = document.getElementById(contentId);
            if (contentToShow) {
                contentToShow.style.display = 'block';
            } else {
                console.error('Content section not found:', contentId);
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const multimediaLinks = document.querySelectorAll('.multimedia-link');
    const multimediaContents = document.querySelectorAll('.multimedia-content');
    const multimediaSubcontents = document.querySelectorAll('.multimedia-subcontent');

    multimediaLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links and hide their styled spans
            multimediaLinks.forEach(l => {
                l.classList.remove('active');
                const styledSpan = l.querySelector('span:not(.normal-text)');
                const normalSpan = l.querySelector('.normal-text');
                if (styledSpan) styledSpan.classList.add('d-none');
                if (normalSpan) normalSpan.classList.remove('d-none');
            });

            // Add active class to clicked link and show its styled span
            this.classList.add('active');
            const styledSpan = this.querySelector('span:not(.normal-text)');
            const normalSpan = this.querySelector('.normal-text');
            if (styledSpan) styledSpan.classList.remove('d-none');
            if (normalSpan) normalSpan.classList.add('d-none');

            // Hide all content sections
            multimediaContents.forEach(content => {
                content.style.display = 'none';
            });

            // Hide all subcontent sections
            multimediaSubcontents.forEach(subcontent => {
                subcontent.style.display = 'none';
            });

            // Show the corresponding content section
            const contentId = this.getAttribute('data-content');
            const contentToShow = document.getElementById(contentId);
            if (contentToShow) {
                contentToShow.style.display = 'block';
            } else {
                console.error('Content section not found:', contentId);
            }

            // Show the corresponding subcontent section
            const subcontentId = contentId.replace('-content', '-subcontent');
            const subcontentToShow = document.getElementById(subcontentId);
            if (subcontentToShow) {
                subcontentToShow.style.display = 'block';
            } else {
                console.error('Subcontent section not found:', subcontentId);
            }
        });
    });
});