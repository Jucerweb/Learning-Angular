describe('toDoCtrl', function() {
  beforeEach(module('toDoList.controller'));

  var $controller, $localStorageService;

  beforeEach(inject(function(_$controller_, _localStorageService_){
    $controller = _$controller_('toDoCtrl');
    $localStorageService = _localStorageService_;
  }));

  afterEach(function() {
    $localStorageService.clearAll()
  });

  it('initializes the todo array', function() {
    expect($controller.todo).to.eql([]);
  });

  it('adds a new activity', function() {
    $controller.addActv();
    expect($controller.todo).not.to.eql([]);
  });

  it('delete all activities', function(){
    $controller.addActv();
    expect($controller.todo).not.to.eql([]);
    $controller.clean();
    expect($controller.todo).to.eql([]);
  });

});
