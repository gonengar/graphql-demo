const charA = 'a';
const charZ = 'z';

function genCharArray(): Array<string> {
	let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
	for (; i <= j; ++i) {
		a.push(String.fromCharCode(i));
	}
	return a;
}

export let lettersArray = genCharArray();
