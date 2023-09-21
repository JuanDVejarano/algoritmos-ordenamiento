let legendValue = [5, 2, 10, 3, 1, 24];

//#region Selection sort
function selection_sort(paramArray) {
  var len = paramArray.length;
  for (var i = 0; i < len - 1; i = i + 1) {
    var j_min = i;
    for (var j = i + 1; j < len; j = j + 1) {
      if (paramArray[j] < paramArray[j_min]) {
        j_min = j;
      } else {
      }
    }
    if (j_min !== i) {
      swap(paramArray, i, j_min);
    } else {
    }
  }
}

function swap(A, x, y) {
  var temp = A[x];
  A[x] = A[y];
  A[y] = temp;
}

//#region
