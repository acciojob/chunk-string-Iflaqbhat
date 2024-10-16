function stringChop(str, size) {
  // your code here
	let result=[];
	if(str.length<=size){
		result.push(str);
	}else{
	for(let i=0;i<str.length;i+=size){
	result.push(str.slice(i,i+size));
		}
	
	}
	return result;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
