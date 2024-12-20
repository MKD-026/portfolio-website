document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  function downloadResume() {
    const resumeUrl = 'https://drive.google.com/file/d/1_ORjZqsT9fNOBvkRgE8M4jFaOosdPkLg/view?usp=sharing';

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'your_resume_filename.pdf'; // Set the desired download filename

    // Simulate a click on the link to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);   

}

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');   

});
