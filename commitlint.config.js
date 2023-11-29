module.exports = {
	extends: ['@commitlint/config-conventional'],
	plugins: ['commitlint-plugin-function-rules'],
	rules: {
		'type-enum': [0],
		'type-empty': [0],
		'type-case': [0],
		'scope-case': [0],
		'subject-empty': [0],
		'subject-case': [0],
		'function-rules/type-enum': [
			2,
			'always',
			(parsed) => {
				const headerRegex = /^((NUT|BUG|UP)-(\d*)):\s(.*)$/;
				const isHeaderValid = parsed.header.match(headerRegex);
				if (isHeaderValid) {
					return [true];
				}
				return [
					false,
					`header must match format --> BUG-XXX: <message>, UP-XXX: <message> \n` +
					`\n BUG = Bug, UP = Update or upgrade or new feature`,
				];
			},
		],
	}
};