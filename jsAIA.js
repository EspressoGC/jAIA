/*
Copyright (C) 2012 Edward Chernysh

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function aia_decode(_str) {
alpha = "abcdefghijklmnopqrstuvwxyz0123456789{}".split('');
    var decoded = "";
	var str = _str.toLowerCase();
    for (i = 0; i < str.length; ++i) {
        for (ii = 0; ii < alpha.length; ii++)
			if (alpha[ii] == str[i])
			{
				decoded += alpha[ii - 2];				
				break;
			}
    }
    return decoded;
}

function aia_encode(_str) {
alpha = "abcdefghijklmnopqrstuvwxyz0123456789{}".split('');
    var encoded = "";
	var str = _str.toLowerCase();
    for (i = 0; i < str.length - 2; ++i) {
        for (ii = 0; ii < alpha.length; ii++)
			if (alpha[ii] == str[i])
			{
				encoded += alpha[ii + 2];				
				break;
			}
    }
    return encoded;
}
