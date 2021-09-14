<p>
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.
</p> 
function friend(friends){  
    return friends.filter(function (item) { 
      return item.length === 4 });  
    }       


// You can shorten the code like this:
const friend = (friends) => friends.filter((item) => item.length === 4);

// Notice changing "function(item) {" into "(item) =>"
// You drop the function keyword and place an arrow to the other side of the parameters.
// You can also drop the "return" keyword and the { } if you just use 1 expression
