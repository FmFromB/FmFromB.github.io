function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function CreateAnArray(rows, columns) {
    var arr = new Array();
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array();
        for (var j = 0; j < columns; j++) {
            arr[i][j] = getRandomInt(0, 10);
        }
    }
    return arr;
}

function getCountsAverages(matrix) {
    var result = [];
    for (var i = 0; i < matrix.length; i++) {
        var sum = 0;
        for (var j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
        var average = sum / matrix[i].length;
        result[i] = 0;
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > average) {
                result[i] += 1;
            }
        }
        console.log("row " + (i + 1) + ": " + matrix[i], "average: " + average, "summary: " + result[i]);
    }
    return result;
}

var myMatrix = CreateAnArray(8, 6);
getCountsAverages(myMatrix);
console.log("result: " + getCountsAverages(myMatrix));