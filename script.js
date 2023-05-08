const YEAR_WIDTH = 1000 // How wide is a year on our page?
const START_DATE = new Date('January 1, 2009 00:00:00')
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)

    const dataSet = data

    // Loop through data and start building out the visual elements on the page
    dataSet.forEach(function(point) {
      // For each point, create an element with class "point"
      const element = document.createElement('div')
            element.classList.add('point')

      // Calculate the time elapsed from the starting date to the point date
      const pointDate = new Date(point.Start_Date)
      const elapsedTimeInMs = pointDate - START_DATE
      const elapsedTimeInYears = elapsedTimeInMs * (1/31556952000)

      // If the point date was *after* the start date...
      if (elapsedTimeInYears > 0) {
        // Set the 'left' position based on the elapsed time
        const left = elapsedTimeInYears * YEAR_WIDTH
        element.style.left = Math.round(left) + 'px'
        
        // Set the vertical position and background color randomly
        element.style.top = (window.innerHeight * 0.75 * Math.random()) + 'px'
        element.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)

        // Add the element to the page
        document.body.appendChild(element)
      }
    })
  })
