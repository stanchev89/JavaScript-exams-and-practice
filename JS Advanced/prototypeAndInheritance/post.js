function solve() {
	class Post {
		constructor(title, content) {
			this.title = title;
			this.content = content;
		}
		toString() {
			return `Post: ${this.title}\nContent: ${this.content}`;
		}
	}

	class SocialMediaPost extends Post {
		constructor(title, content, likes, dislikes) {
			super(title, content);
			this.likes = likes;
			this.dislikes = dislikes;
			this.comments = [];
		}
		addComment(comment) {
			this.comments.push(comment);
		}

		toString() {
			let output = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
			this.comments.length > 0 ? (output += `\nComments:\n * ${this.comments.join("\n * ")}`) : output;
			return output;
		}
	}

	class BlogPost extends Post {
		constructor(title, content, views) {
			super(title, content);
			this.views = views;
		}
		view() {
			this.views += 1;
			return this;
		}

		toString() {
			return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
		}
	}

	return {
		Post,
		SocialMediaPost,
		BlogPost
	};
}
const check = solve();
const test = new check.SocialMediaPost("TestTitle", "TestContent", 5, 10);
console.log(test.toString());



'Post: TestTitle\nContent: TestContent\nRating: -5\nComments:\n\' * \'1\n * 2\n * 3'
'Post: TestTitle\nContent: TestContent\nRating: -5\nComments:\n ...
