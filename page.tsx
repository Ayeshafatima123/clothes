import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer' 
 import Image from 'next/image'
 


 

function page() {
  return (
  
    
    <div>
      <h1 className='text-5xl font-bold'>
        Shop.Co

      </h1>
      <div className='text-4xl flex justify-around '>
        <button>
      <ul><li>
        SHOP
      </li>
      </ul>
      <ul><li> OnSale</li>
      </ul>
      <ul> New Arrival<li></li>
      </ul>
      <ul><li> Brand</li>
      </ul>
          </button>  
    </div>
    <div>
      <p className='text-5xl font-semibold flex justify-start'>
        FIND CLOTHES THAT MATCHES YOUR STYLES
      </p>
  
</div>
<div>
  <h1>
  <button className='text-white bg-black flex justify-center'>
     Shop Now
          </button>
</h1>

  
    <div className='container'></div>
    <Image src='/image.png'  width={1550}height={640}
     alt='image'></Image>
    </div>
    
    <div>


      
<div className=' text-white bg-black flex justify-around'>   
   <ul><li> VERACE</li></ul>
   <ul> <li> ZARI</li></ul>
   <ul> <li> GUCCI</li></ul>
   <ul><li> PRACC</li></ul>
   <ul><li> Calvic klein</li></ul>
  
  
</div>
</div>

<div>
<h1 className='text-6xl flex justify-center'> New Arrival</h1>
<div className='container'></div>
<Image src="/image copy.png" width={140} height={44}alt='image copy'></Image>
<h1 className='text-2xl'>
  T.shirt white tape /Detail
</h1>

  $120
<div>
  <div className='hero- selection:'></div>
  <div className='container'> </div>
  <Image src ="/image 8 (1).jpg"width= {140} height={44} alt='image 8 (1)'></Image>
<h1 className='text-2xl'>
  Courage Graphical T.shirt </h1>


  $145
  
</div>
<div className="hero-section">
</div>
<div className="container"></div>
<Image src ="/image 9.jpg" width ={140} height ={44}alt="image.9"></Image>
<div className="text-2xl">
  Cheakered Shirt
    $180
<div>
  <Image src="/image 9 (1).jpg" width ={149} height= {44}alt="image 9(1)"></Image>
  </div> 
  <div className='text-2xl'>Loosse Fit Shorts Bermuda 
    $80
    </div>   


<div  className='text-6xl flex justify-center' >Sales/Brands
</div>
</div>
<Image src="/image 10.jpg" width ={140 } height ={44}alt='image 10'></Image>

<h1> Sleeves striped T.shirt
  $130
</h1>
<Image src="/image 8.jpg"width={140} height={44}alt='image 8'></Image>
<h1> Skinny fit Jeans  $ 240 </h1>
  
  <div className='text-6xl flex justify-center'>BBOWES BY DRESS STYLES</div>
    <div className='container'></div>
  <Image src="/image 11.jpg" width ={140} height={44}alt='image 11'></Image>
<div className='text-black'> formal

   <div className =' container' ></div>

  <Image src="/image 12.jpg" width ={300} height={50}alt='image 12'></Image>
    < div className='text-black'>Party</div>
</div>
< div className='container'></div>
 
  <Image src="/image 13.jpg"width ={300}height ={50}alt='image 13'></Image>
 <div className='text-black'>Causal
 
</div>
</div>

<div className='contanier'>
  <Image src='/image 14.jpg'width ={149}height={44}alt='image 14'></Image>
  <div className='text-2xl'> GYM</div>


</div>.
</div>







  

  )


  
 
  

  
}

export default page
