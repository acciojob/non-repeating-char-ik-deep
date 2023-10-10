function firstNonRepeatedChar(str) {
 // Write your code here
let char = '';
	let i=0;
	while(i<str.length()-1){
		char = str.charAt(i);
		var s = str.subString(i+1,str.length+1);
		if(!s.contains(char){
			return char;
		}
		return null;
	}
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
