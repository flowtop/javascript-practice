const genDesk = (size) => {

	let opts = [" #".repeat(size / 2), "# ".repeat(size / 2)]; // Options of desk line

	let desk = "";

	for (let i = 0; i < size; i++) {
		desk += opts[i % 2] + "\n";
	}

	return desk;
}

console.log(genDesk(8));