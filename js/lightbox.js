$(document).ready(function () {
    $('body').append(`
        <div id="lightbox-overlay" style="display: none;">
            <div id="lightbox-content">
                <img id="lightbox-image" src="" alt="Lightbox Image" />
                <button id="lightbox-close">×</button>
            </div>
        </div>
    `);

    $('#lightbox-overlay').css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    });

    $('#lightbox-content').css({
        position: 'relative',
        maxWidth: '90%',
        maxHeight: '90%',
    });

    $('#lightbox-image').css({
        width: 'auto',
        height: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '8px',
    });

    $('#lightbox-close').css({
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'rgba(255, 255, 255, 0.8)',
        border: 'none',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        fontSize: '20px',
        cursor: 'pointer',
        textAlign: 'center',
        lineHeight: '30px',
    });

    $('img').on('click', function () {
        const imgSrc = $(this).attr('src');
        $('#lightbox-image').attr('src', imgSrc);
        $('#lightbox-overlay').fadeIn();
    });

    $('#lightbox-close, #lightbox-overlay').on('click', function () {
        $('#lightbox-overlay').fadeOut();
    });
});
