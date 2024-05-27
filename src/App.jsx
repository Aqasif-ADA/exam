import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import { CiMedicalCase } from "react-icons/ci";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { TbRelationManyToMany } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { IoCaretForwardCircleOutline } from "react-icons/io5";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className='navbar'>
          <div className='homes'>FOUNDATION</div>
          <div className='navsag'>
            <div className='home'>Home</div>
            <div>About</div>
            <div>Discover</div>
            <div>Donate</div>
            <div>Blog</div>
            <div>Contact</div>
          </div>
        </nav>

        <div className='image'></div>

        <div className='h3'>
          <div className='h31'><div className='h311'><h2 className='sozler'>RESCUE AN ORPHAN</h2><br /> <h4 className='sozler2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis ad obcaecati maxime corporis reiciendis nobis in, commodi quo non!</h4>  </div></div>
          <div className='h32'><div className='h322'> <h2 className='sozler'> FEED THE HUNGRY   </h2><br />  <h4 className='sozler2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis ad obcaecati maxime corporis reiciendis nobis in, commodi quo non!</h4> </div></div>
          <div className='h33'><div className='h333'> <h2 className='sozler'>FREE EDUCATION   </h2><br />  <h4 className='sozler2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis ad obcaecati maxime corporis reiciendis nobis in, commodi quo non!</h4> </div></div>
        </div>


        <div className='ada'>
          <div className='sag'><h1>Video</h1></div>
          <div className='sol'><h2 className='soz'>OUR MISSION</h2>  <br /><br /> <h4>Accusantium dignissimos voluptas rem consequatur blanditiis error ratione illo sit quasi ut, praesentium magnam, pariatur quae, necessitatibusDolor <br /> <br />, eligendi voluptate ducimus itaque esse autem perspiciatis sint! Recusandae dolor aliquid inventore sit,</h4></div>
        </div>


        <div className='ad'>
          <div><h1 className='reqem'>15</h1><h1 className='xet'>______</h1>  </div>
          <div><h1 className='reqem'>392</h1><h1 className='xet'>________</h1> </div>
          <div><h1 className='reqem'>3,293</h1><h1 className='xet'>____________</h1></div>
          <div><h1 className='reqem'>1,212</h1><h1 className='xet'>____________</h1></div>
        </div>


        <div className='discover'> <br /><br /><br /><br /><br /> <center><h2 className='discoveri'>Discover</h2><br /> <h4 className='discoveri2'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aperiam unde natus <br /> voluptates placeat accusamus vel laborum cupiditate. Reiciendis commodi perferendis <br /> dignissimos, amet quis.</h4></center></div>



        <div className='img'>

          <div className='image2'></div>
          <div className='image3'> <h1 className='discoveri'>BUILD SCHOOLS IN AFRICA</h1> <br />  <h4 className='discoveri2'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aperiam unde natus <br /> voluptates placeat accusamus vel laborum cupiditate. Reiciendis commodi perferendis <br /> dignissimos, amet quis.</h4> <br />
          <div className='imgi'>  <div><h1 className='reqem'>15</h1> <h1 className='xet'>______</h1><h3>Schools</h3></div>  <div><h1 className='reqem'>1,039</h1> <h1 className='xet'>______</h1><h3>Students</h3> </div> </div>
        
          </div>
        </div>

        <div className='img'>

<div className='image22'></div>
<div className='image3'> <h1 className='discoveri'>BUILD SCHOOLS IN AFRICA</h1> <br />  <h4 className='discoveri2'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aperiam unde natus <br /> voluptates placeat accusamus vel laborum cupiditate. Reiciendis commodi perferendis <br /> dignissimos, amet quis.</h4> <br />
<div className='imgi'>  <div><h1 className='reqem'>15</h1> <h1 className='xet'>______</h1><h3>Schools</h3></div>  <div><h1 className='reqem'>1,039</h1> <h1 className='xet'>______</h1><h3>Students</h3> </div> </div>

</div>
</div>

    

<div className='white'> <br /><br />

<center><h1 className='sozler'>Make A Donation Now! You May <br /> Change Lives Forever</h1><br /><br />

<button className='btn'>Donate now</button></center>
</div>

<div  className='dd'>

<div> <center> <CiMedicalCase className='icon'/> <br /><h2 className='yazi'>Make Donation</h2>  <br /> <h4 className='discoveri2'>Accusantium dignissimos voluptas rem <br /> consequatur ratione illo sit quasi.</h4></center></div>
<div><center><GiEarthAfricaEurope className='icon'/> <br /><h2 className='yazi'>Make Donation</h2> <br /> <h4 className='discoveri2'>Accusantium dignissimos voluptas rem <br /> consequatur ratione illo sit quasi.</h4></center></div>
<div><center><TbRelationManyToMany className='icon'/> <br /><h2 className='yazi'>Make Donation</h2> <br /> <h4 className='discoveri2'>Accusantium dignissimos voluptas rem <br /> consequatur ratione illo sit quasi.</h4></center></div>
</div>   
<div  className='dd'>
<div><center><FaCarSide className='icon'/> <br /><h2 className='yazi'>Make Donation</h2><br /> <h4 className='discoveri2'>Accusantium dignissimos voluptas rem <br /> consequatur ratione illo sit quasi.</h4></center></div>
<div><center>< CiShoppingCart className='icon'/> <br /><h2 className='yazi'>Make Donation</h2><br /> <h4 className='discoveri2'>Accusantium dignissimos voluptas rem <br /> consequatur ratione illo sit quasi.</h4></center></div>
<div><center><IoCaretForwardCircleOutline className='icon'/> <br /><h2 className='yazi'>Make Donation</h2><br /> <h4 className='discoveri2'>Accusantium dignissimos voluptas rem <br /> consequatur ratione illo sit quasi.</h4></center></div>
</div>


  <div> 

 <h1 className='boyuk'>OUR LEADERSHIP</h1><br />
  <center><h4 className='discoveri2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis, eius, eos <br /> consectetur consequuntur sit. Aut, perspiciatis, reprehenderit.</h4></center>
  </div>

<div className='profil'>
  <div>
    <div className='div' > <img src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg.webp" className='foto' /> </div>
  </div>
  <div  className='div' >
      <img  src="https://preview.colorlib.com/theme/foundation/images/person_2.jpg.webp" alt="" className='foto'  />
  </div >
  <div className='div'> <img src="https://preview.colorlib.com/theme/foundation/images/person_3.jpg" alt="" className='foto'  /></div>
</div>




 <center><h1 >OUR BLOG</h1></center><br />
<center> <h4 className='discoveri2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ab possimus fugiat <br />, autem aliquid, commodi quod voluptatum consectetur</h4></center>
<br /><br />
<div>




<div className='our'>
  <div><img src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg.webp" alt="" className='fotol'/> <br /> <h1 className='yazi'>How to Invest In Investing Company</h1 >  <br /><h4>JANUARY 18, 2019 BY JAMES COOPER</h4 > <br /> <h4 className='discoveri2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit <br /> iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab <br /> enim nisi, itaque, libero fuga veritatis culpa quis!</h4></div>
  <div><img src="https://preview.colorlib.com/theme/foundation/images/person_3.jpg" alt="" className='fotol' /><h1 className='yazi'>How to Invest In Investing Company</h1 >  <br /><h4>JANUARY 18, 2019 BY JAMES COOPER</h4 > <br /> <h4 className='discoveri2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit <br /> iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab <br /> enim nisi, itaque, libero fuga veritatis culpa quis!</h4></div>
</div><br /><br />



</div>


<div className='son'> 
 <div><h2 className='sozson'>ABOUT US</h2> <br /> <h4 className='discoveri2'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Neque facere laudantium <br /> magnam voluptatum autem. Amet <br />aliquid nesciunt veritatis aliquam.</h4></div>

<div> <h2 className='sozson'>FEATURES</h2> <br /> <h3>About Us</h3> <br /><h3>Testimonials</h3>  <br /><h3>Terms of Service</h3  >   <br /><h3>Privacy</h3>  <br /><h3>Contact Us</h3>  </div>

<div> <h2 className='sozson'>SOME PARAGRAPH</h2> <br /><h4 className='discoveri2'>Lorem ipsum dolor sit amet, consectetur  <br />adipisicing elit. Repellat nostrum libero iusto <br /> dolorum vero atque aliquid.</h4>
<br />
<h2 className='sozson'>SUBSCRIBE TO NEWSLETTER</h2>
<br />
<input type="text" className='email' /> email<br /><br />

<h2 className='sozson'>FOLLOW US</h2>






</div>


</div><div className='son2'><center><h1 className='discoveri2'>_______________________________________________________________________________</h1> <br /><br /> <h3 className='discoveri2'>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</h3><br /></center></div>
   
      </div>
    </>
  )
}

export default App
