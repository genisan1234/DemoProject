
  describe('is true',function(){
  it('should be 2',function(){
    var url = 'http://127.0.0.1:8080/employees/';
    var searchurl=url+"name/"+'Sh';
      $.get(searchurl,function(data){
      var employeesData = data;
      expect(employeesData.length).toBe(2);
      });
  });

    
it('should return true',function(){
  var v = true;
  expect(v).toBe(true);
});
});
