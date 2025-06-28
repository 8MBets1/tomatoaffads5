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



   // malay time livechat
const images = document.querySelectorAll('img');

// Loop through each img element and set its loading attribute to "lazy"
images.forEach(img => {
    img.setAttribute('loading', 'lazy');
});



  // Get Malaysia Time
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



//Contact links manage
const links = [
  {
    href: "https://wa.me/+12678413558",
    aClass: "WhatsApp",
    liClass: "flow-child",
    iconClass: "fa-whatsapp"
  },
  {
    href: "https://t.me/aff8m",
    aClass: "",
    liClass: "flow-child",
    iconClass: "fa-send"
  },
  {
    href: "https://direct.lc.chat/19210451/",
    aClass: "",
    liClass: "flow-child shaking",
    iconClass: "fa-comments"
  }
];

const flowDiv = document.querySelector('.flow');
const ul = document.createElement('ul');

links.forEach(link => {
  const li = document.createElement('li');
  link.liClass.split(" ").forEach(cls => li.classList.add(cls));

  const a = document.createElement('a');
  a.href = link.href;
  if (link.aClass) a.classList.add(link.aClass);

  const i = document.createElement('i');
  i.classList.add('fa', link.iconClass);

  a.appendChild(i);
  li.appendChild(a);
  ul.appendChild(li);
});

flowDiv.appendChild(ul);
