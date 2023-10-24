// 1. Types
type FontSizeMapping = {
	[key: number]: {
		fontSize: number;
		lineHeight: number;
	};
};

// eslint-disable-next-line no-unused-vars
type setDescriptionStyleType = (sentence: string, refEl: HTMLElement | null, enabled: boolean) => void;

// 2. Constants and Implementations
const fontSizes: FontSizeMapping = {
	1: {
		fontSize: 14,
		lineHeight: 19
	},
	2: {
		fontSize: 18,
		lineHeight: 28
	},
	3: {
		fontSize: 24,
		lineHeight: 36
	},
	4: {
		fontSize: 36,
		lineHeight: 48
	},
	5: {
		fontSize: 48,
		lineHeight: 60
	}
};

const setDescriptionStyle: setDescriptionStyleType = (sentence, refEl, enabled) => {
	if (!refEl) {
		return;
	}

	refEl.style.fontSize = 'auto';
	refEl.style.lineHeight = 'auto';
	const refElWidth = refEl.clientWidth;

	if (refElWidth === 0) {
		return;
	}

	if (!enabled) {
		return;
	}

	const tmp = document.createElement('div');
	tmp.style.display = 'inline-block';
	tmp.style.fontSize = '10px';
	tmp.style.fontWeight = '600';
	tmp.style.lineHeight = '10px';
	tmp.style.position = 'absolute';
	tmp.style.whiteSpace = 'pre-wrap';
	tmp.style.wordWrap = 'break-word';
	tmp.style.pointerEvents = 'none';
	tmp.style.visibility = 'hidden';
	document.body.appendChild(tmp);

	let size;

	const words = sentence.split(' ');

	const wordLengths = words.map((word) => {
		tmp.textContent = word.toString();
		return tmp.clientWidth;
	});

	const maxWordLength = Math.max(...wordLengths);
	const maxPx = Math.floor((refElWidth * 10) / maxWordLength);

	if (maxPx < 18) {
		size = 1;
	} else if (maxPx >= 18 && maxPx < 24) {
		size = 2;
	} else if (maxPx >= 24 && maxPx < 36) {
		size = 3;
	} else if (maxPx >= 36 && maxPx < 48) {
		size = 4;
	} else if (maxPx >= 48) {
		size = 5;
	}

	let { lineHeight, fontSize } = fontSizes[size as number];

	tmp.textContent = sentence;
	tmp.style.width = `${refElWidth}px`;
	tmp.style.fontSize = `${fontSize}px`;
	tmp.style.lineHeight = `${lineHeight}px`;

	const lineCount = tmp.clientHeight / lineHeight;

	if (lineCount > 4 && lineCount < 6) {
		size = 4;
	} else if (lineCount >= 6 && lineCount < 9) {
		size = 3;
	} else if (lineCount >= 9 && lineCount < 11) {
		size = 2;
	} else if (lineCount >= 11) {
		size = 1;
	}

	document.body.removeChild(tmp);

	lineHeight = fontSizes[size as number].lineHeight;
	fontSize = fontSizes[size as number].fontSize;
	refEl.style.fontSize = `${fontSize}px`;
	refEl.style.lineHeight = `${lineHeight}px`;
};

export default setDescriptionStyle;
