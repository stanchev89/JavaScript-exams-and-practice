// TODO: Require Controllers...
const cubeModel = require("../controllers/cube");
module.exports = (app) => {
	app.get("/", cubeModel.getCubes);
	app.get("/details/:id", cubeModel.getCubeById);
	app.get("/edit/:id", cubeModel.getCubeById);
	app.get("/delete/:id", cubeModel.deleteCube);
	app.get("/create", cubeModel.getCreate);
	app.post("/edit/:id", cubeModel.editCube);
	app.post("/create", cubeModel.postCreate);
	app.post("/sort", cubeModel.sortCubes);

	app.get("/about", function(req, res) {
		res.render("about", { layout: false });
	});

	app.get("/*", function(req, res) {
		res.render("404", { layout: false });
	});
};
