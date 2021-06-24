import React ,{useEffect, useState} from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import './content.css';
import {Animated} from "react-animated-css";
import RestaurantRoundedIcon from '@material-ui/icons/RestaurantRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';
import { sizing } from '@material-ui/system';
import {Route, Switch,Link, BrowserRouter} from "react-router-dom";



  function Content() {

   const [seller, setSeller]= useState([]);
   const url ='https://tiffin-umbrella.herokuapp.com/get_seller_list';
   
   useEffect(()=>{
      let fetchData = async()=> {
         
         const request = await axios.get(url);
         //console.log(request.data.sellers);
         setSeller(request.data);
         return request;
       }
      
       fetchData();
              
   },[url]);
  
   function truncate(str, n){
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
   }
  //  var arr=[]
  function passIdToNext(id){
    console.log(id);

  }
   function preparations(arr){
      let v="" ;
      arr.forEach(element => {
         v += element+" ";
         
      });
      return v;
   }
    return (
       
       <div>
        
        
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
     <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        
         <section className="">
         
               <div id="carousel" className="carousel slide" data-ride="carousel" data-interval="6000">
                <div className="carousel-inner">
                       
                  <div className="carousel-item active">
                            
                     <img className="d-block w-100" src="Images/new-tiffin-2.jpeg" alt="First slide" style={{height:"600px"}}/>
                     <div className="centered">
                       <Animated animationIn="bounceInDown"  animationInDelay="2000" isVisible={true}> <p className="main"><b>Welcome to Tiffin Umbrella</b></p> </Animated>
                        <Animated animationIn="bounceInRight"  animationInDelay="3000" isVisible={true}><p className="caption">Safe and healthy food</p></Animated>
                        <Animated animationIn="bounceInUp"  animationInDelay="5000" isVisible={true}> <p className="box"><b>Call us now- 983-765-4321</b></p> </Animated>
              </div>
                          
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100 " src="Images/MainPage_2ndPic.png" alt="Second slide" style={{height:"600px"}}/>
                     <div className="centered"><Animated animationIn="bounceInDown"  animationInDelay="2000" isVisible={true}> <p className="main"><b>Welcome to Tiffin Umbrella</b></p> </Animated>
                <Animated animationIn="bounceInRight"  animationInDelay="3000" isVisible={true}><p className="caption">Delivered to your door</p></Animated>
                <Animated animationIn="bounceInUp"  animationInDelay="5000" isVisible={true}> <p className="box"><b>Call us now- 983-765-4321</b></p> </Animated>
              </div>
                  </div>
                  <div className="carousel-item">
                     <img className="d-block w-100" src="Images/new-tiffin-1.jpeg" alt="Third slide" style={{height:"600px"}}/>
                     <div className="centered">
                       <Animated animationIn="bounceInDown"  animationInDelay="2000" isVisible={true}> <p className="main"><b>Welcome to Tiffin Umbrella</b></p> </Animated>
                      <Animated animationIn="bounceInRight"  animationInDelay="3000" isVisible={true}><p className="caption">Authentic Indian Food</p></Animated>
                      <Animated animationIn="bounceInUp"  animationInDelay="5000" isVisible={true}> <p className="box"><b>Call us now- 983-765-4321</b></p> </Animated>
                    </div>
                  </div>
                  
                </div>
               </div> 
        </section> 
        <section className="bg-light" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div className="row">
                  <p className="mt-4 mb-5">Hello, we are glad that you are here! Before you place the order, let us share about this 
                  service. How we started and how we are doing.Hello, we are glad that you are here! Before you place the order, let us share about this 
                  service. How we started and how we are doing.Hello, we are glad that you are here! Before you place the order, let us share about this 
                  service. How we started and how we are doing.

                  </p>
             </div>   
          </div>   
        </section>   

        <section className="" id="tiffinproviders" style={{backgroundColor:"whitesmoke"}}>   
         <div className="container" style={{backgroundColor:"whitesmoke"}}>
             <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Tiffin Providers</h3>
               </div>
              </div>
              <div className="container-fluid" >
              <div className="row">
                 {seller.map(seller=>(
                     <div className="col-sm-4 w" >
                     <div className="card mt-4">
                        <img className="card-img-top" src={seller.imageUrl} alt=""/> 
                        <div className="card-body">
                           <h4 className="card-title text-secondary">{seller.name}</h4>
                           <p className="card-text text-secondary">{truncate(seller?.description,70)}</p>
                           <p className="card-text text-secondary"><h6><strong>Average price per person :</strong> ${seller.averagePricePerPerson}</h6></p>
                           <p className="card-text text-secondary" ><h6><strong>Categories available :</strong></h6> <h6 style={{color:"red"}}> {preparations(seller.categories)}</h6></p>
                           <p className="card-text text-secondary" style={{maxHeight:"10px", marginBottom:"30px"}}><h6><strong>Cuisines available : </strong>{preparations(seller.cuisines)}</h6></p>
                           <p className="card-text text-secondary" type="hidden" value={seller.id}></p>
                        </div>
                        <div className="card-footer" >
                           {/* <a href="/plans" className="btn btn-primary">Find Out More!</a> */}
                           <Link to="/plans" className="btn btn-primary" onClick={()=>passIdToNext(seller.id)}>Find Out More!</Link>
                        </div>
                     </div>
                  </div>
                  
                 ))}
                 
              </div>
              </div>

              <section className="bg-light" id="gallery">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Gallery</h3>
               </div>
              </div>
             <div className="row">
                <Gallery/>
                </div>
                <div className="container">
                  <div className="row">
                  {/* <img src="Images/new-tiffin-2.jpeg" alt="Cinque Terre" width="600" height="400"></img> */}
                     
                  </div>
                </div>
              
                </div>
                </section>




        </div>
       </section>  


       

    
    
   </div>
    );
  }
  
  export default Content;