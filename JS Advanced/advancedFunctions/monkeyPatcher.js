function solution(option) {
	const actions = {
		upvote: () => {
			return (this.upvotes += 1);
		},
		downvote: () => {
			return (this.downvotes += 1);
		},
		score: () => {
			return checkScore(this);
		}
	};

	return actions[option]();

	function checkScore(obj) {
		let upvotes = obj.upvotes;
		let downvotes = obj.downvotes;

		let rating = "";
		let diff = upvotes - downvotes;
		let majority = (upvotes + downvotes) * 0.66;
		if (upvotes > majority) {
			rating = "hot";
		}
		if (rating === "" && diff >= 0 && (upvotes > 100 || downvotes > 100)) {
			rating = "controversial";
		} else if (diff < 0) {
			rating = "unpopular";
		}

		if (upvotes + downvotes < 10 || rating === "") {
			rating = "new";
		}
		const sumVotes = upvotes + downvotes;
		const higherVotes = Number(Math.max(upvotes, downvotes));
		if (sumVotes > 50) {
			let adder = higherVotes * 0.25;
			obj.modUpvotes = Number(Math.ceil(upvotes + adder));
			obj.modDownvotes = Number(Math.ceil(downvotes + adder));
		}

		if (obj.hasOwnProperty("modUpvotes")) {
			[ upvotes, downvotes ] = [ obj.modUpvotes, obj.modDownvotes ];
		}

		return [ upvotes, downvotes, diff, rating ];
	}
}

let post = {
	id: "3",
	author: "emil",
	content: "wazaaaaa",
	upvotes: 132,
	downvotes: 68
};

let score = solution.call(post, "score"); // [127, 127, 0, 'controversial']
console.log(score);
