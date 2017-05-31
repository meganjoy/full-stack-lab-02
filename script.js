var friends = ['Tim', 'Jillayne', 'Katie', 'Laura', 'my mom'];
var arrayLength = friends.length;

for (var j = 0; j < arrayLength; j++) {
    console.log(friends[j]);
    for (var i = 99; i >= 1; i--) {
        if (i > 1) {
            var countDown = i - 1; 
            console.log(countDown);
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ' + countDown + ' lines of code in the file');
        }  else  {
            console.log(i + ' line of code in the file, ' + i + ' line of code; ' + friends[j] + 'strikes one out, clears it all out, no more lines of code in the file'); 
            var i = 0;
        }
    };
};


    










