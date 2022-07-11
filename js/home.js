function handleSubmit() {
	const list = getInputList();

	let flag = true;

	for (let input of list)
		if (!input.value) {
			input.className += " error";
			flag = false;
		}

	const h1 = document.getElementsByTagName("h1")[0];

	if (flag) h1.innerHTML = "Thanks  👍🏻 ";
}

function handleReset() {
	const list = getInputList();

	for (let input of list) {
		input.value = "";

		input.className = input.className.replace("error", "");
	}
}

function getInputList() {
	let list1 = document.getElementsByTagName("input");
	let list2 = document.getElementsByTagName("textarea");

	return [...list1, ...list2];
}
