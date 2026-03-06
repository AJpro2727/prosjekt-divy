let board = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]

const gameGrid= document.getElementById('grid-4');

board.forEach((row,rowIndex) => {
    row.forEach((cell,colIndex)=>{
        tester= document.createElement('div');
        gameGrid.appendChild(tester);
        tester.dataset.row = rowIndex;
        tester.dataset.col = colIndex;
    })

})