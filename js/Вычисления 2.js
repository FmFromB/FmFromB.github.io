function numbers(){
	let M = document.area.M.value;
	let N = document.area.N.value;
	for (let i = M; i <= N; i++) { 
		let count = 0;
		for (let j = 1; j <= i; j++) {
			if(i%j) {
				continue;
			}
			count += 1;
		}
		if (count == 2) document.write(" " + i);
	}
}	