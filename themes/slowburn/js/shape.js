/**
 * shape
 */
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('shape');

    setInterval(() => {
        if (!container.classList.contains('circle')) {
            container.classList.toggle('circle');
        } else {
            container.classList.remove('circle');
        }
    }, 1500);
});

