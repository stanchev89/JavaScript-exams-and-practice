function inventory(input) {
	let items = input.shift().split(', ');

	for (let line of input) {
		line = line.split(' - ');
		let command = line.shift();
		if (command !== 'Craft!') {
			action(items, command, ...line);
		} else {
			console.log(items.join(', '));
			break;
		}
	}

	function action(items, command, param) {
		switch (command) {
			case 'Collect':
				if (!items.includes(param)) {
					return items.push(param);
				}
				break;
			case 'Drop':
				if (items.includes(param)) {
					let index = items.indexOf(param);
					return items.splice(index, 1);
				}
				break;
			case 'Combine Items':
				param = param.split(':');
				if (items.includes(param[0])) {
					let index = items.indexOf(param[0]);
					return items.splice(index + 1, 0, param[1]);
				}
				break;
			case 'Renew':
				if (items.includes(param)) {
					let index = items.indexOf(param);
					items.splice(index, 1);
					return items.push(param);
				}
				break;
		}
	}
}
inventory([ 'Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!' ]);
