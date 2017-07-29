module.exports = (function ClozeCard (text, cloze){
	if (!text.toLowerCase().includes(cloze.toLowerCase())){
		return console.log('Oops the value is not included in the full text');
		};
	this.cloze = cloze;
	this.full = text;
	this.partial = text.replace(cloze, '_________');

});