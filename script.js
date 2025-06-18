document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const events = this.querySelector('.events');
            events.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            const events = this.querySelector('.events');
            events.style.display = 'none';
        });
    });
});

document.addEventListener("mousemove", function (e) {
    let cursor = document.createElement("div");
    cursor.classList.add("cursor-trail");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    document.body.appendChild(cursor);

    setTimeout(() => {
        cursor.remove();
    }, 500);
});
