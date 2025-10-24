document.addEventListener("DOMContentLoaded", function () {
    const wrappers = document.querySelectorAll(".carousel_wrapper");

    // Throttling function (same as before)
    function throttle(callback, delay) {
        let timeoutId = null;
        return function () {
            if (timeoutId) return;
            timeoutId = setTimeout(() => {
                callback();
                timeoutId = null;
            }, delay);
        };
    }

    wrappers.forEach(wrapper => {
        const carouselContainer = wrapper.querySelector(".thumbnail_white_container.carousel");
        const scrollLeftBtn = wrapper.querySelector(".scroll-left");
        const scrollRightBtn = wrapper.querySelector(".scroll-right");

        // Function to check scroll position and update button opacity for the current carousel
        function updateButtonOpacity() {
            if (!carouselContainer || !scrollLeftBtn || !scrollRightBtn) return;

            scrollLeftBtn.style.opacity = carouselContainer.scrollLeft <= 0 ? "0.5" : "1";
            
            const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
            scrollRightBtn.style.opacity = carouselContainer.scrollLeft >= maxScrollLeft - 1 ? "0.5" : "1";
        }

        // Add scroll functionality to the buttons
        if (scrollLeftBtn && scrollRightBtn && carouselContainer) {
            scrollLeftBtn.addEventListener("click", () => {
                const thumbnail = carouselContainer.querySelector(".thumbnail_white_960");
                const thumbnailWidth = thumbnail ? thumbnail.offsetWidth : 0;
                const scrollDistance = thumbnailWidth + 15;
                carouselContainer.scrollBy({ left: -scrollDistance, behavior: "smooth" });
                // Check opacity after smooth scroll completes
                setTimeout(updateButtonOpacity, 300);
            });

            scrollRightBtn.addEventListener("click", () => {
                const thumbnail = carouselContainer.querySelector(".thumbnail_white_960");
                const thumbnailWidth = thumbnail ? thumbnail.offsetWidth : 0;
                const scrollDistance = thumbnailWidth + 15;
                carouselContainer.scrollBy({ left: scrollDistance, behavior: "smooth" });
                // Check opacity after smooth scroll completes
                setTimeout(updateButtonOpacity, 300);
            });
        }

        // Initial check on page load
        updateButtonOpacity();

        // Update button opacity on scroll using a throttled event listener
        const throttledUpdate = throttle(updateButtonOpacity, 100);
        carouselContainer.addEventListener("scroll", throttledUpdate);
        
        // Drag and touch events (not shown for brevity, but should be contained within this forEach loop)
        // ...
    });
});