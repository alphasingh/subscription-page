import React ,{useEffect, useState} from 'react';
import './style.css';


function Gallery({url}) {

      return (
      <div>
         <div className="responsive">
         <div className="gallery">
       <a target="_blank" ><img src=" https://i.ibb.co/k1x404S/chinese-img1.jpg" width="600" height="400"></img></a>
   
</div>
</div>


<div className="responsive">
<div className="gallery">
   <a target="_blank"><img src="https://i.ibb.co/n0YhBPf/chinese-img2.jpg"  width="600" height="400"></img></a>
   
</div>
</div>

<div className="responsive">
<div className="gallery">
   <a target="_blank">
      <img src=" https://i.ibb.co/rf6fjrW/chinese-img3.jpg"  width="600" height="400"></img>
   </a>
   
</div>
</div>
<div className="responsive">
<div className="gallery">
   <a target="_blank"><img src="https://i.ibb.co/QXtLcXk/chinese-img4.jpg"  width="600" height="400"></img></a>
   
</div>
</div>
<div className="responsive">
<div className="gallery">
   <a target="_blank"><img src="https://i.ibb.co/5YYVsLR/chinese-img5.jpg"  width="600" height="400"></img></a>
   
</div>
</div>
<div className="responsive">
<div className="gallery">
   <a target="_blank"><img src="https://i.ibb.co/qjfWZxR/chinese-img6.jpg"  width="600" height="400"></img></a>
   
</div>
</div>
<div className="responsive">
<div className="gallery">
   <a target="_blank"><img src="https://i.ibb.co/grs54Xg/chinese-img7.jpg"  width="600" height="400"></img></a>
      </div>
</div>
<div className="responsive">
<div className="gallery">
   <a target="_blank"><img src="https://i.ibb.co/PMqMDWg/chinese-img8.jpg"  width="600" height="400"></img></a>
   
</div>
</div>
<div className="responsive">
<div className="gallery">
   <a target="_blank"><img src=" https://i.ibb.co/X2Xf8LR/chinese-img10.jpg"  width="600" height="400"></img></a>
      </div>
</div>


<div className="responsive">
<div className="gallery">
   <a target="_blank">
      <img src="https://i.ibb.co/wByZNr3/chinese-img9.jpg"  width="600" height="400"></img>
   </a>
   
</div>
</div>

<div className="clearfix"></div>


   </div>
   );
}

export default Gallery;