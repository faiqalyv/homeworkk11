let numbers =[-3,8,7,6,5,-4,3,2,1]
numbers.sort((a,b)=>a-b);
console.log(numbers)


function union(array1,array2) {
    array2.splice(1,2)
    const array3=array1.concat(array2)
    array3.sort((a,b)=>a-b)
 
        
    console.log(array3);
        
}

console.log(union([1,2,3],[100,2,1,10]));



function Myfunc(array)
{
    let result=[]
    for (const iterator of array) 
        
     {
        if (iterator%iterator==0){
            result.push(iterator)
        }
    }
    console.log(result)
}
Myfunc([NaN,0,15,false,-22, , undefined,47,null])



var library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
  ];

function compare_to_sort(x,y) 
{
 if (x.title < y.title)
   return -1;
 if (x.title > y.title)
   return 1;
 return 0;
}

console.log(library.sort(compare_to_sort));


function test(nums) { 
  for (var i = 0; i < nums.length - 1; i++) 
  {
    if (nums[i+1] % nums[i] != 0) {
      return false;            
    }
    nums[i]=nums[i]/2
    if(nums[i]==1)
    {
      return true;
    }
    
  }
  return false
  
}
console.log(test([4,8,16,24]));