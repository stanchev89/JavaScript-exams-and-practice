function emojiDetector(input) {
	let text = input[0];
	const reducer = (accumulator, currentValue) => accumulator * currentValue;
	let coolThreshold = text.match(/\d/g).map(Number).reduce(reducer);
	let patternEmojis = /([\:\*]{2})[A-Z][a-z]{2,}\1/g;
	console.log(`Cool threshold: ${coolThreshold}`);
	let emojis = text.match(patternEmojis);
	if (emojis !== null) {
		console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
		emojis.forEach((emoji) => {
			let word = emoji.match(/\w+/g)[0];
			let currSum = 0;
			for (const char of word) {
				currSum += char.charCodeAt();
			}
			if (currSum > coolThreshold) {
				console.log(emoji);
			}
		});
	} else {
		console.log(`0 emojis found in the text. The cool ones are:`);
	}
}
emojiDetector([
	'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);
