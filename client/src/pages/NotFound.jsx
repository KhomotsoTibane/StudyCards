import React from 'react'

function NotFound() {

  const page_404 = { padding:'40px 0', background:'#fff', fontFamily: 'Arvo'}
  const four_zero_four_bg={
  backgroundImage: 'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',height: '400px',backgroundPosition: 'center'
  }
  const h1={ fontSize:'80px' }
  const h3 = {fontSize:'80px'}		 
	const link_404={color: '#fff!important', padding: '10px 20px',  margin: '20px 0', display: 'inline-block'}
	const contant_box_404={ marginTop:'-50px'}
       
  return (
    <section style={page_404}>
	    <div className="container">
		    <div className="row">	
		      <div className="col-sm-12 ">
		        <div className="col-sm-12 col-sm-offset-1  text-center">
		          <div style={four_zero_four_bg}>
			          <h1 style={h1}>404</h1>
              </div>
		          <div style={contant_box_404}>
		            <h3 style={h3}>Look like you're lost</h3><p>the page you are looking for not avaible!</p>
		            <a href="/home" style={link_404}>Go to Home</a>
	            </div>
		        </div>
		      </div>
		    </div>
	    </div>
    </section>
  )
}

export default NotFound