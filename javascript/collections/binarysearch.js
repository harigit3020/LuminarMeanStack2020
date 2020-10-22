//BINSRCH[arr,low,mid,element]
// Input array have to be sorted
var arr = [5,4,6,7,3,1]
// var sarr = arr.sort((i, j) => i - j);
// console.log(sarr)

for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }console.log(arr);
var low = 0;
var elmt = 6;
var flag = 0;
var up = arr.length - 1;
while (low < up) {
     mid = Math.floor((low + up) / 2);
    if (elmt == arr[mid]) {
        flag += 1;
        break;
    } else if (elmt < arr[mid]) {
        up = mid - 1;
    } else if (elmt > arr[mid]) {
        low = mid + 1;

    }
}
if (flag > 0) {
    console.log("element  found at "+arr[mid-1]);

} else {
    console.log("element not found");

}