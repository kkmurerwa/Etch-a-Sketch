// Create constant to hold the DOM element
let container = document.getElementById("container")
let container_button = document.getElementById("container-buttons")
let color_value

function buttonActions(identifier){
    switch(identifier){
        case 1:
            rows = Window.prompt("How many squares per side do you want to make? Number should not exceed 100", 16)
            rows = (rows > 100) ? 100 : rows
            createDivs(rows, rows)
            break
        case 2:
            color_value = randomColor()
            break
        return 0
    }
}

function randomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
}


function createDivs(rows, cols) {
    let cell_padding_row = 150/rows
    let cell_padding_cols = 150/cols


    container.style.setProperty('--grid-rows', rows)
    container.style.setProperty('--grid-cols', cols)
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div")

        // Add code to change color on hover to each cell
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black'
        })

        // Set dynamic padding for each cell
        cell.style.padding = cell_padding_cols, cell_padding_row

        // Append each cell to the container div
        container.appendChild(cell).className = "grid-item"
    };
}

createDivs(16, 16)

