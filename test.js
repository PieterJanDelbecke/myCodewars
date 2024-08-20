function getGrade(s1, s2, s3) {
	let average = (s1 + s2 + s3) / 3;
	if (average >= 90) return "A";
	if (average >= 80) return "B";
	if (average >= 70) return "C";
	if (average >= 60) return "D";
	return "F";
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(100, 85, 96));
console.log(getGrade(92, 93, 94));

console.log(getGrade(70, 70, 100));
console.log(getGrade(82, 85, 87));
console.log(getGrade(84, 79, 85));
console.log(getGrade(89, 89, 90));
