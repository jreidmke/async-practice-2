it('should return the entered number + 1', () => {
    expect(addOne(1)).toEqual(2);
});

it('should return a number fact', () => {
    $('input').val('1');
    expect(fetchData()).toBeInstanceOf(Promise);

    $('input').val('1,2,3,4,5');
    expect(fetchData()).toBeInstanceOf(Promise);    
})
