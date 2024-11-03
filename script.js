// property gallery
const gallery = document.querySelector('.gallery-container');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const popupImg = document.querySelector('.popup-img');
const images = Array.from(document.querySelectorAll('.gallery-item img'));
const thumbnailNav = document.querySelector('.thumbnail-nav');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const browseGallery = document.querySelector('.browse-gallery');
let galleryIndex = 0;

if (gallery) {
  gallery.addEventListener('click', (e) => {
    if (e.target.matches('.gallery-item img')) {
      popup.classList.add('active');
      galleryIndex = images.indexOf(e.target);
      updateImage();
    }
  });
}

if (browseGallery) {
  browseGallery.addEventListener('click', () => {
    if (images.length > 0) {
      popup.classList.add('active');
      galleryIndex = 0;
      updateImage();
    }
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });
}

images.forEach((img, index) => {
  const thumbnail = document.createElement('img');
  thumbnail.src = img.src;
  thumbnail.classList.add('thumbnail');
  if (thumbnail) {
    thumbnail.addEventListener('click', () => {
      galleryIndex = index;
      updateImage();
    });
    thumbnailNav.appendChild(thumbnail);
  }
});

function updateImage() {
  popupImg.src = images[galleryIndex].src;
  // Update thumbnails
  document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
    thumb.classList.toggle('active', index === galleryIndex);
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    galleryIndex = (galleryIndex - 1 + images.length) % images.length;
    updateImage();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    galleryIndex = (galleryIndex + 1) % images.length;
    updateImage();
  });
}

// Close on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popup.classList.remove('active');
  }
});

// Close when clicking outside the image
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('active');
  }
});
