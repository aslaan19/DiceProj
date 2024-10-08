function d6() {
	return Math.floor(Math.random() * 6) + 1;
  }
  
  /** Get n rolls => [num, ...]. */
  
  function getRolls(n) {
	return Array.from({ length: n }, () => d6());
  }
  
  /** Get sum of nums. */
  
  function sum(nums) {
	return nums.reduce((prev, cur) => prev + cur, 0);
  }
  
  export{sum,getRolls}