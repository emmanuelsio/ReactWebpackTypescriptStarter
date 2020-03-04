module.exports = {
	root: true,

	parser: '@typescript-eslint/parser', // Specifies the ESLint parser

	plugins: [ '@typescript-eslint' ],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	]
};
