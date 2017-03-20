import {lettersArray} from '../constants/char-array/char-array';

export function generateLetter() {
	//Take care of Z
	let cell = Math.floor(Math.random() * lettersArray.length);
	return lettersArray[cell];
}

