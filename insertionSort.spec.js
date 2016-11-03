describe('Insertion Sort', function(){



  it('handles an empty array', function(){
    expect( insertionSort([]) ).toEqual( [] );
  });

  it('handles a single element array', function(){
    expect( insertionSort([1]) ).toEqual( [1] );
  });

  it('handles an array with two or more elements', function(){
    expect( insertionSort([3,2,1,5,4]) ).toEqual( [1,2,3,4,5] );
  });

   it('handles an array with two or more string elements', function(){
    expect( insertionSort(['a','b','A','c','Ab','ABC']) ).toEqual( ['A',"ABC","Ab","a","b","c"] );
  });

});






