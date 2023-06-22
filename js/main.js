$(document).ready(function() {
  let $btns = $('.project-title .btn-group button');

  $btns.click(function() {
    $('.project-title .btn-group button').removeClass('active');
    $(this).addClass('active');

    let selector = $(this).attr('data-filter');
    $('.project-title .grid').isotope({
      filter: selector
    });
  });

  $('.project-title .grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });

  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Get all the filter buttons
    const filterButtons = document.querySelectorAll(".butt");

    // Get all the project items
    const projectItems = document.querySelectorAll(".element-item");

    // Add click event listeners to the filter buttons
    filterButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Remove the "active" class from all buttons
        filterButtons.forEach(function(btn) {
          btn.classList.remove("active");
        });

        // Add the "active" class to the clicked button
        this.classList.add("active");

        // Get the filter value from the data-filter attribute
        const filterValue = this.getAttribute("data-filter");

        // Show/hide project items based on the filter value
        projectItems.forEach(function(item) {
          if (filterValue === ".all") {
            item.style.display = "block";
          } else {
            if (item.classList.contains(filterValue)) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          }
        });
      });
    });
  });

  // owl carousel
  $('.site-main .about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      544: {
        items: 2
      }
    }
  });
});