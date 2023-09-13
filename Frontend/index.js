document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('shayari-form');
    const shayariResult = document.getElementById('shayari-result');
    const generateButton = document.getElementById('generate-button');
  
    generateButton.addEventListener('click', async () => {
      const keyword = document.getElementById('keyword').value || "any topic";
  
      try {
        document.getElementById("loader").style.visibility="visible"
        const response = await fetch( `https://azure-deer-kit.cyclic.app/shayari?c=${keyword}`);
        if (response.ok) {
           
         
          const data = await response.json();
          console.log(data.content)
          
          shayariResult.innerHTML = `<p>${data.content}</p>`;
        } else {
          shayariResult.innerHTML = '<p>Failed to generate Shayari</p>';
        }
        document.getElementById("loader").style.visibility="hidden"
      } catch (error) {
        console.error(error);
        shayariResult.innerHTML = '<p>Error occurred</p>';
      }
    });
  });
  