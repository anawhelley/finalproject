//fetch('data.json')
  //.then(response => response.json())
  //.then(data => {
    //console.log(data)

    // Loop through data and start building out the visual elements on the page

function createCirclesFromJson(jsonUrl) {
  // Load the JSON file
  fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      // Get a reference to the canvas element
      const canvas = document.getElementById("canvas");

      // Get the canvas context
      const context = canvas.getContext("2d");

      // Loop through the data and create a circle for each item
      data.forEach(item => {
        if (item["Data Value"]) {
          // Set the fill color of the circle based on the data value
          const value = item["Data Value"];
          context.fillStyle = value < 50 ? "red" : "green";

          // Calculate the radius of the circle based on the data value
          const radius = value * 2;

          // Create the circle based on the item's properties
          context.beginPath();
          context.arc(item.x, item.y, radius, 0, Math.PI * 2);
          context.fill();
        }
      });
    });
  }

  createCirclesFromJson("data.json");
  console.log.data