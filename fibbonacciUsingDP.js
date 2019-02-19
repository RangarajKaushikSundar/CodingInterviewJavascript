function fibbonacci(n, memoized) {
	if(Boolean(memoized[n]) === true) {
		return memoized[n];
	}
	let value;
	if(n === 1 || n === 2 ) {
		return 1;
	} else {
		value = fibbonacci(n-1, memoized) + fibbonacci(n-2, memoized);
	}

	memoized[n] = value;

	return value;
}

console.log(fibbonacci(25, new Array()));
