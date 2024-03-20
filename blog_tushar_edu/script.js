document.addEventListener("DOMContentLoaded", function() {
    const boy = document.getElementById('boy');
    const school = document.getElementById('school');
    const sceneWidth = document.querySelector('.scene').offsetWidth;
    const boyWidth = boy.offsetWidth;
  
    // Function to move the boy to school
    function goToSchool() {
      boy.style.left = `calc(${sceneWidth}px - ${boyWidth}px)`;
      setTimeout(() => {
        boy.style.left = '50px'; // Reset position
      }, 2000); // Wait for 2 seconds before resetting position
    }
  
    // Start the animation
    setInterval(goToSchool, 3000); // Repeat animation every 3 seconds
  });
  