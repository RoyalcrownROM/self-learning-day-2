function reverseString(word)
{
	if(word == '')
	{
		return null;
	}
	else
	{
		var newWord = word.split('');
		newWord = newWord.reverse();
		newWord = newWord.join();
		newWord = newWord.replace(/,/g, '');
		if(newWord == word)
		{
			return true;
		}
		else
		{
			return newWord;
		}
	}
	
}