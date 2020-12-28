let defaultConfig = {
	api:"https://domain-trang-khoa-hoc",
	apiVersion: "v1",
	other: "other"
}

let exerciseConfig = {
	...defaultConfig,
	api: "https://domain-trang-bai-tap"
}

// console.log(exerciseConfig);

function sumMany(...listNumber){
	console.log(listNumber);
}

//sumMany(1,2,3,4,5);

function highlight(...rest){
	console.log(rest);
}

let brand = "minthe";
let course = "Javascript";

highlight`Learn programming ${course} at ${brand}`;
