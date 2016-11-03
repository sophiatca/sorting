describe('Split Array function', function() {
  it('is able to split an empty array', function() {
    expect(split([])).toEqual([[],[]]);
  });
  it('is able to split an array with one element', function() {
    expect(split([1])).toEqual([[1],[]]);
  });
  it('is able to split an array with two elements', function() {
    expect(split([1,2])).toEqual([[1],[2]]);
  });
  it('is able to split an array with three elements', function() {
    expect(split([1,2,3])).toEqual([[1,2],[3]]);
  });
});



describe('Merge ', function(){

  it('handles two empty arrays', function(){
    expect( merge([],[]) ).toEqual([]);
  });

  it('handles a single element array and an empty array', function(){
    expect( merge([1],[]) ).toEqual( [1] );
  });

  it('handles two arrays with one element each', function(){
    expect( merge([2],[1]) ).toEqual( [1,2] );
  });

   it('handles two sorted arrays with multiple element (interleave)', function(){
    expect( merge([1,3,5,7],[2,4,6,8]) ).toEqual( [1,2,3,4,5,6,7,8] );
  });

    it('handles two sorted arrays with multiple elements (not only interleave)', function(){
    expect( merge([2,3,5,7],[1,9,10,11]) ).toEqual( [1,2,3,5,7,9,10,11] );
  });
});

describe('Merge Sort', function(){

  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles a single element array', function(){
    expect( mergeSort([1]) ).toEqual( [1] );
  });

  it('handles an array with two or more elements', function(){
    expect( mergeSort([3,2,1,5,4]) ).toEqual( [1,2,3,4,5] );
  });

   it('handles an array with two or more string elements', function(){
    expect( mergeSort(['a','b','A','c','Ab','ABC']) ).toEqual( ['A',"ABC","Ab","a","b","c"] );
  });

});
