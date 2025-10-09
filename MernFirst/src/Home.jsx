import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Home() {
  return (
    <div>
    
    
    {/* Add your main content here */}
    <h1 style={{textAlign:"center",fontFamily:"fantasy"}}>MERN CRUD PROJECT</h1>
    <div class="jumbotron bg-warning">
<h1 class="display-4 font-weight-bold">Welcome To My Crud Application</h1>
<p class="lead text-center font-weight-bold">It serves as a simple yet powerful tool for performing the fundamental operations required for data management: Create, Read, Update, and Delete.</p>
<hr class="my-4" />
<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
<div className='text-center'>
  <a class="btn btn-primary btn-lg " href="#" role="button">Learn more</a>

</div>
</div>

   
    
  </div>
  )
}

export default Home