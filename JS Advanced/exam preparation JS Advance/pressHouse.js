function pressHouse() {
	class Article {
		constructor(title, content) {
			this.title = title;
			this.content = content;
		}

		toString() {
			return `Title: ${this.title}\nContent: ${this.content}`;
		}
	}

	class ShortReports extends Article {
		constructor(title, content, originalSearch) {
			super(title, content);
			this.comments = [];
			this._originalSearch = null;
			this.originalSearch = originalSearch;
		}

		set content(val) {
			if (val.length < 150) {
				return (this._content = val);
			}
			throw new Error("Short reports content should be less then 150 symbols.");
		}

		get content() {
			return this._content;
		}

		set originalSearch(val) {
			if (val.hasOwnProperty("title") && val.hasOwnProperty("author")) {
				this._originalSearch = val;
				return this._originalSearch;
			}
			throw new Error("The original research should have author and title.");
		}

		get originalSearch() {
			return this._originalSearch;
		}

		addComment(comment) {
			this.comments.push(comment);
			return "The comment is added.";
		}

		toString() {
			let result = `\nOriginal Research: ${this.originalSearch.title} by ${this.originalSearch.author}`;
			if (this.comments.length > 0) {
				result += "\nComments:" + "\n" + this.comments.join("\n");
			}
			return super.toString(this.title, this.cotent) + result;
		}
	}

	class BookReview extends Article {
		constructor(title, content, book) {
			super(title, content);
			this.book = book;
			this.clients = [];
		}

		addClient(clientName, orderDescription) {
			const curObj = {
				clientName,
				orderDescription
			};
			const isExist = this.clients.filter((client) => client.clientName === curObj.clientName);
			if (isExist.length > 0) {
				throw new Error("This client has already ordered this review.");
			}
			this.clients.push(curObj);
			return `${curObj.clientName} has ordered a review for ${this.book.name}`;
		}

		toString() {
			let result = `\nBook: ${this.book.name}`;
			if (this.clients.length > 0) {
				result += "\nOrders:\n";
				this.clients.forEach((e) => {
					result += `\n${e.clientName} - ${e.orderDescription}`;
				});
			}
			return super.toString(this.title, this.content) + result;
		}
	}

	return {
		Article,
		ShortReports,
		BookReview
	};
}

let classes = pressHouse();
let short = new classes.ShortReports(
	"SpaceX and Javascript",
	"Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?",
	{ title: "Dragon 2", author: "wikipedia.org" }
);
short.addComment("Thank god they didn't use java.");
output = short.addComment("In the end JavaScript’s features are executed in C++ — the underlying language.");
output += "\n" + short.toString();
expectedOutput = `The comment is added.
Title: SpaceX and Javascript
Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?
Original Research: Dragon 2 by wikipedia.org
Comments:
Thank god they didn't use java.
In the end JavaScript’s features are executed in C++ — the underlying language.`;
console.log(output);

("The Guardian has ordered a review for The Great Gatsby\nGoodreads has ordered a review for The Great Gatsby\nTitle: The Great Gatsby is so much more than a love story\nContent: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...\nBook: The Great Gatsby\nOrders:\nThe Guardian - 100 symbols\nGoodreads - 30 symbols");
("The Guardian has ordered a review for The Great Gatsby\nGoodreads has ordered a review for The Great Gatsby\nTitle: The Great Gatsby is so much more than a love story\nContent: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...Book: The Great Gatsby\nOrders:\nThe Guardian - 100 symbolsGoodreads - 30 symbols");
