function showPage(pageId) {
  const pages = document.querySelectorAll('.container');
  const logo = document.querySelector('.sti-logo');

  // Show or hide each container
  pages.forEach(page => {
    if (page.id === pageId) {
      page.classList.remove('hidden');
    } else {
      page.classList.add('hidden');
    }
  });

  // Show the logo only on the home page
  if (pageId === 'home') {
    logo.classList.remove('hidden');
  } else {
    logo.classList.add('hidden');
  }
}

function changeRoom(currentRoomId, nextPageId) {
  const currentRoom = document.getElementById(currentRoomId);

  // Pause and reset all videos inside the current room
  const videos = currentRoom.querySelectorAll('video');
  videos.forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  // Switch to the next page
  showPage(nextPageId);
}

// Initial load goes to home
window.onload = () => showPage('home');
