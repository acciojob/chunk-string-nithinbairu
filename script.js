function stringChop(str, size) {
  // your code here
	if(str===null&&str==="")
	let ans=[];
	let i=0;
	let j=0;
	while(i<str.length){
		let result=""
		for(let k=0;k<size;k++,i++){
			if(i<str.length){
				result+=str[i]
			}else{
				break
			}
		}
		ans[j++]=result;
	}
	return ans;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
