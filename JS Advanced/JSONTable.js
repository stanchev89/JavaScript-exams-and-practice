function solve(input) {
	console.log('<table>');

	let persons = input.map((per) => JSON.parse(per)).forEach((person) => {
		console.log(`       <tr>
                            <td>${person.name}</td>
                            <td>${person.position}</td>
                            <td>${person.salary}</td>
       </tr>`);
	});

	console.log('</table>');
}
solve([
	'{"name":"Pesho","position":"Promenliva","salary":100000}',
	'{"name":"Teo","position":"Lecturer","salary":1000}',
	'{"name":"Georgi","position":"Lecturer","salary":1000}'
]);
