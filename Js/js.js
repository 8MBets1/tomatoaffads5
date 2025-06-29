function shakeChild(index) {
    var flowChildren = document.querySelectorAll('.flow-child');
    flowChildren.forEach(function(child, idx) {
        if (idx === index) {
            child.classList.add('shaking');
        } else {
            child.classList.remove('shaking');
        }
    });
}

function shakeLoop() {
    var index = 0;
    setInterval(function() {
        shakeChild(index);
        index = (index + 1) % 3;
    }, 3000); // Repeat the animation every 3 seconds
}

shakeLoop();


// ******************click on top and appear bottom contents 

document.addEventListener('DOMContentLoaded', function() {
    var topTitles = document.querySelectorAll('.top-tittle');

    topTitles.forEach(function(tittle) {
        tittle.addEventListener('click', function() {
            var mediaPhoto = tittle.nextElementSibling;
            var isActive = mediaPhoto.classList.contains('active');

            if (!isActive) {
                mediaPhoto.classList.add('active');
            } else {
                mediaPhoto.classList.remove('active');
            }
        });
    });
});

  



        // ****************Downloading time popup 

        document.addEventListener('DOMContentLoaded', function() {
            var downloadButtons = document.querySelectorAll('.download-button');
            var loadingOverlay = document.getElementById('loading-overlay');
        
            downloadButtons.forEach(function(downloadButton) {
                downloadButton.addEventListener('click', function() {
                    // Show loading overlay
                    loadingOverlay.textContent = 'Downloading 0%';
                    loadingOverlay.classList.add('active');
        
                    var progress = 0;
                    var interval = setInterval(function() {
                        progress += 1;
                        loadingOverlay.textContent = 'Downloading ' + progress + '%';
                        if (progress >= 100) {
                            clearInterval(interval);
                            // Change text to "Downloaded"
                            loadingOverlay.textContent = 'Downloaded ✔️';
                            // After 2 seconds, hide loading overlay
                            setTimeout(function() {
                                loadingOverlay.classList.remove('active');
                            }, 2000);
                        }
                    }, 8); // Adjust the interval here for faster counting
                });
            });
        });



        // Select all img elements on the page
const images = document.querySelectorAll('img');

// Loop through each img element and set its loading attribute to "lazy"
images.forEach(img => {
    img.setAttribute('loading', 'lazy');
});


 // Register link control
  const affLink = "https://aff.8mbets.net/en-bd/register?aff=5e18ff53d3";

  // Apply it to all anchor tags with class ccolor or ccolor2
  document.querySelectorAll("a.ccolor, a.ccolor2").forEach(function(anchor) {
    anchor.setAttribute("href", affLink);
  });



   // Live chat link update by Malaysia Time
  const now = new Date();
  const malaysiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" }));
  const hour = malaysiaTime.getHours();

  // Define links
  const defaultLink = "https://direct.lc.chat/15562614/";
  const malaysiaLink = "https://direct.lc.chat/19210451/";

  // Find the chat link by href or icon class
  const chatLink = document.querySelector('a[href="https://direct.lc.chat/15562614/"]');

  // Update link based on Malaysia time
  if (chatLink) {
    chatLink.href = (hour >= 11 && hour < 23) ? malaysiaLink : defaultLink;
  }

//Telegram link update 
document.querySelectorAll('a[href="https://t.me/affiliate8mbet"]').forEach(link => {
  link.href = "https://t.me/aff8m";
});
