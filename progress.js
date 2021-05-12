var currentCellNumber = 1;

var moverIntervalId;
const intervalTimeOut = 500;

function mover() {
    moverIntervalId = setInterval(function () {

        function markCellAsProgressed(cellNumber) {
            var elem = document.getElementById(`cell-${currentCellNumber}`);
            elem.style.backgroundColor = "green";
        }

        if (currentCellNumber <= 15) {
            markCellAsProgressed(currentCellNumber)
            currentCellNumber++;
        } else {
            console.log("clearing interval id = " + moverIntervalId)
            clearInterval(moverIntervalId);
        }
    }, intervalTimeOut);
}

function stop() {
    clearInterval(moverIntervalId);
}

function reset() {
    
    function markCellAsUnprogressed(cellNumber) {
        var elem = document.getElementById(`cell-${cellNumber}`);
        elem.style.backgroundColor = "white";
    }

    for (let index = 1; index <= 15; index++) {
        markCellAsUnprogressed(index)
    }

    clearInterval(moverIntervalId);
    currentCellNumber = 1;
}