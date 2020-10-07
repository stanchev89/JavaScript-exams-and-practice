const { query } = require("express");
const cubeModel = require("../models/cubeModel");
module.exports = {
	getCubes(req, res, next) {
		const { from, search, to } = req.query;
		const queryParams = {};
		if (from) {
			queryParams.from = from;
		}
		if (to) {
			queryParams.to = to;
		}
		if (search) {
			queryParams.search = search;
		}
		cubeModel
			.getAll(queryParams)
			.then((cubes) => {
				res.render("index", { layout: false, cubes, from, search, to });
			})
			.catch(next);
	},
	getCubeById(req, res, next) {
		const id = Number(req.params.id);
		let edit;
		if (req.url.includes("edit")) {
			edit = true;
		}
		cubeModel
			.getById(id)
			.then((cube) => {
				res.render("details", { layout: false, cube, edit });
			})
			.catch(next);
	},
	editCube(req, res, next) {
		const id = Number(req.params.id);
		const { name, difficultyLevel, imageUrl, description } = req.body;
		const editedObj = {
			name: req.body.name,
			difficultyLevel: Number(req.body.difficultyLevel),
			imageUrl: req.body.imageUrl,
			description: req.body.description,
			id: id
		};
		cubeModel
			.edit(editedObj)
			.then(() => {
				res.redirect(`/details/${id}`);
			})
			.catch(next);
	},
	deleteCube(req, res, next) {
		const id = Number(req.params.id);
		cubeModel.deleteById(id).then(() => {
			res.redirect("/");
		});
	},
	getCreate(req, res) {
		res.render("create", { layout: false });
	},
	postCreate(req, res, next) {
		const { name, description, imageUrl, difficultyLevel } = req.body;
		const newCube = { name, description, imageUrl, difficultyLevel: Number(difficultyLevel) };
		cubeModel
			.insert(newCube)
			.then(() => {
				res.redirect("/");
			})
			.catch(next);
	},

	sortCubes(req, res, next) {
		const body = req.body;
		cubeModel
			.sortCubes(body.criteria, body.type)
			.then((cubes) => {
				res.render("index", { layout: false, cubes });
				return res;
			})
			.catch(next);
	}
};
