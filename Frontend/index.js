document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('shayari-form');
    const shayariResult = document.getElementById('shayari-result');
    const generateButton = document.getElementById('generate-button');
  
    generateButton.addEventListener('click', async () => {
      const keyword = document.getElementById('keyword').value;
  
      try {

        const response = await fetch( `http://localhost:4000/?c=music`);
        if (response.ok) {
          const data = await response.json();
          console.log(data.choices);
          shayariResult.innerHTML = `<p>${data.choices[0].text.trim()}</p>`;
        } else {
          shayariResult.innerHTML = '<p>Failed to generate Shayari</p>';
        }
      } catch (error) {
        console.error(error);
        shayariResult.innerHTML = '<p>Error occurred</p>';
      }
    });
  });
  