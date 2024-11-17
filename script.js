// Toggle additional content in the About Me section
document.getElementById('toggleContent').addEventListener('click', function() {
    const extraContent = document.getElementById('extraContent');
    extraContent.classList.toggle('hidden');
    if (extraContent.classList.contains('hidden')) {
      this.textContent = "Read More";
    } else {
      this.textContent = "Read Less";
    }
  });
  
