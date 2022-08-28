export default  function Navbar(){
    return (
        <div className="contain">
        
        <div className="navb  "> 
            <div>Studiance</div>
            <ul id="nav-ul">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
               <button className="btn btn-danger">Explore universities</button>
             
           
            </ul>  
        
 </div>
 
 <div class="botnav">
  <h1 class="h1">Take an exclusive</h1>
  <h2 class="h3">tour on our website</h2>
  <p>Find the best solution for your study goal</p>
  <button  type='button'class="btn btn-danger">Explore</button>
</div>
         
         </div>
    )
}