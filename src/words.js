function words(string)
{
	var strings = string.split(/[\s,\t\n]+/);
	var result = {};
	for(var i = 0; i <= strings.length - 1; i++)
	{
		word = strings[i];
		numOfTimes = 0;
		for(var j = 0; j <=strings.length - 1; j++)
		{
			if(strings[j] == word)
			{
				numOfTimes += 1;
			}
		}
		result[strings[i]] = numOfTimes;
	}

	return result;
}