module.exports = (function ClozeCard (text, cloze){

	this.cloze = cloze;
	this.text = text;
	this.clozeBuild = function(){
		if (this.text.includes(this.cloze)){
		var removed = this.text.split(this.cloze);
		 return removed.join('_________');
		} else {
			this.errorCloze();
		};
	};
	this.errorCloze = function(){
		return this.cloze = 'oops';
		// this.partial = `This doesn't work`;
		console.log('this word isnt included');

	};
	this.partial = this.clozeBuild();
	
});