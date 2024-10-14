//array mit allen Elementen, die einen Linktext enthalten
const linkTextElements = document.getElementsByClassName("linkText");

const originalTextContents = [];

for (let i = 0; i < linkTextElements.length; i++) {
	const element = linkTextElements.item(i);
	originalTextContents.push(element.textContent);
}

const maxTextLength = Math.max(...originalTextContents.map((text) => text.length));

const intervalID = setInterval(() => {
	for (let i = 0; i < linkTextElements.length; i++) {
		const element = linkTextElements.item(i);
		setRandomBits(element, i, 0);
	}
}, 50);

setTimeout(() => {
	clearInterval(intervalID);
	let counter = 0;
	const interval2ID = setInterval(() => {
		for (let i = 0; i < linkTextElements.length; i++) {
			const element = linkTextElements.item(i);
			setRandomBits(element, i, counter);
		}

		if (counter >= maxTextLength) {
			clearInterval(interval2ID);
		}

		counter++;
	}, 50);
}, 2000);

function setRandomBits(element, index, numberOfOriginalLetters) {
	const linkTextlength = element.textContent.length;

	let encryptedString = originalTextContents[index];
	for (let i = numberOfOriginalLetters; i < linkTextlength; i++) {
		const randomBit = Math.round(Math.random()).toString();
		encryptedString = encryptedString.replaceAt(i, randomBit);
	}

	element.textContent = encryptedString;
}

String.prototype.replaceAt = function (index, replacement) {
	return this.substring(0, index) + replacement + this.substring(index + replacement.length);
};
