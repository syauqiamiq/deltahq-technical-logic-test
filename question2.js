const CapitalizeFirstChar = (str) => {
	// pisahkan menjadi array setiap kata yang dipisahkan dengan " "
	let strArr = str.split(" ");

	// ubah awalan setiap kata menjadi huruf kapital
	const fixedArr = strArr.map((element) => {
		element = element.charAt(0).toUpperCase() + element.slice(1);
		return element;
	});

	// gabungkan kembali array menjadi kalimat
	const result = fixedArr.join(" ");

	return result;
};

console.log(CapitalizeFirstChar("hello world"));
console.log(CapitalizeFirstChar("i ran there"));
