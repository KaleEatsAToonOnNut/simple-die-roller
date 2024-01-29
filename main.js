function roll(die, count, modifier){
	let total = 0;
	for(let i = 0; i < count; i++){
		total += (Math.ceil(Math.random() * die) + modifier);
	}
	return total;
}

let obj = document.getElementById("sub");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

obj.addEventListener("click", function(){
	document.getElementById("out").innerHTML = roll(parseInt(one.value), parseInt(two.value), parseInt(three.value));
});