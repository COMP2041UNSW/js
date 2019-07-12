function isGood(s) {
	return s.singer === 'Carley Ray Jepson';
}

const ipod = [];

ipod.push({
	name: 'black heart',
	singer: 'Carley Ray Jepson'
})
ipod.push({
	name: 'Hello',
	singer: 'Adelle'
})
ipod.push({
	name: 'Party Rock Anthem',
	singer: 'LMFAO'
})
ipod.push({
	name: 'Call Me Maybe',
	singer: 'Carley Ray Jepson'
})

console.log(ipod[0].name);
console.log(ipod[0]['singer']);
console.log(ipod.filter(isGood));
