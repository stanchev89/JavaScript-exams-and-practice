function solution() {
	const proto = {};
	const instance = Object.create(proto);
	instance.extend = (template) => {
		for (const prop in template) {
			if (typeof template[prop] === "function") {
				proto[prop] = template[prop];
			} else {
				instance[prop] = template[prop];
			}
		}
	};

	return instance;
}

var template = {
	extensionMethod: function() {
		console.log("From extension method");
	},
	name: "Stefan",
	lastname: "Stanchev"
};
var myInstance = solution();
myInstance.extend(template);
console.log(Object.getPrototypeOf(myInstance));
console.log(myInstance);
