function getArticleGenerator(articles) {
	const copyOfArticles = articles.slice();
	return insertDiv;
	function insertDiv() {
		if (copyOfArticles.length === 0) {
			return;
		}
		const currentArticle = copyOfArticles.shift();
		const newArticle = document.createElement("article");
		newArticle.textContent = currentArticle;
		document.getElementById("content").appendChild(newArticle);
	}
}
