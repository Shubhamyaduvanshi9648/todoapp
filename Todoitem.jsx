function Todoitem(){
    let todoname="By Milk";
    let tododate="4/10/2024";
    return  <div class="container">
  
    <div class="row">
    <div class="col-6">
    {todoname}
    </div>
    <div class="col-4">
  {tododate}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">Delete</button>
    </div>

  </div>
  </div>


}
export default Todoitem;