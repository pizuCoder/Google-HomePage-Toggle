document.addEventListener('DOMContentLoaded', () => {

  const themeStylesheet = document.getElementById('theme');
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
      // if it's light -> go dark
      if(themeStylesheet.href.includes('light')){
          themeStylesheet.href = 'dark-theme.css';
          themeToggle.innerText = 'light mode';
          document.getElementById('logo').src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png";
          
      } else {
          // if it's dark -> go light
          themeStylesheet.href = 'light-theme.css';
          themeToggle.innerText = 'dark mode';
          document.getElementById('logo').src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
      }
  })
})


    
