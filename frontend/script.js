
    console.log("Script started loading.");
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector('.block');
    
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
      });
        
      document.querySelector('.relative button').addEventListener('click', function() {
        // Toggle the visibility of the dropdown menu
        this.parentNode.querySelector('.absolute').classList.toggle("hidden");
        });
    
       
       var container = document.getElementById('editor');
       var editor = new Quill(container);

       var options = {
        debug: 'info',
        modules: {
            toolbar: '#toolbar'
        },
        placeholder: 'Compose an epic...',
        readOnly: false,
        theme: 'snow'
       };
       var editor = new Quill(container,options);