import React,{useState,useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from "./Card.js"
import Grid from "@material-ui/core/Grid"
import logo from "./../logo.svg"



/*function Content() {

  const [seller, setSeller]= useState([]);
  const url ='https://raw.githubusercontent.com/alphasingh/mocking-api/master/sellers.json';
  
  useEffect(()=>{
     let fetchData = async()=> {
        
        const request = await axios.get(url);
        //console.log(request.data.sellers);
        setSeller(request.data.sellers);
        return request;
      }
     
      fetchData();
             
  },[url]);**/
  

 
const arr = [{ key: ['WEEKLY','MONTHLY','YEARLY']}] 
let weekly = arr.filter(item => item.key.includes('WEEKLY'));
let monthly = arr.filter(item => item.key.includes('MONTHLY'));
let yearly = arr.filter(item => item.key.includes('YEARLY'));



const mainWeeklyList=[
    {
        "planTypes" : ['WEEKLY'],
        "name":"Week1",
        "description":"5 conatiners including veg curries + 14 chappatis + 1 large pulao rice or steam rice + dessert + pickle + chutney ",
        "averagePricePerPerson":200,  
        "imageURL":require("./../logo.svg")     ,
        
    },
    {
        "planTypes" : ['WEEKLY'],
        "name":"Week2",
        "description":"5 conatiners including veg curries + 7 chappatis + 1 large pulao rice or steam rice + dal + dessert + pickle + chutneyshfdfdjfh dewkfhew",
        "averagePricePerPerson":200,     
        "imageURL":require("./../logo.svg")      
    },
    {
        "planTypes" : ['WEEKLY'],
        "name":"Week3",
        "description":"Punjabi dish + 1 sweet + 1 glass buttermilk ",
        "averagePricePerPerson":200,    
        "imageURL":require("./../logo.svg")       
    },
    {
        "planTypes" : ['WEEKLY'],
        "name":"Week4",
        "description":"Mexican Cuisine + 1 soup + dessert",
        "averagePricePerPerson":200,   
        "imageURL":require("./../logo.svg")        
    },

]

const mainMonthlyList=[
    {
        "planTypes" : ['MONTHLY'],
        "name":"Month1",
        "description":"this is the month 1 list providing the details of gujarati dish ",
        "averagePricePerPerson":500,  
        "imageURL":require("./../logo.svg")     
    },
    {
        "planTypes" : ['MONTHLY'],
        "name":"Month 2",
        "description":"we will provide you some punjabi dishes",
        "averagePricePerPerson":600,     
        "imageURL":require("./../logo.svg")      
    },
    // {
    //     "planTypes" : ['MONTHLY'],
    //     "planName":"Month 3",
    //     "planDescription":"how about mexican cuisines this time",
    //     "rate":800,    
    //     "imageURL":require("./../logo.svg")       
    // },
    // {
    //     "planTypes" : ['MONTHLY'],
    //     "planName":"Month 4",
    //     "planDescription":"missing indian taste...!!!we provide you with same taste and some dishes",
    //     "rate":1000,   
    //     "imageURL":require("./../logo.svg")        
    // },

]

const mainYearlyList=[
    {
        "planTypes" : ['YEARLY'],
        "name":"year 1",
        "description":"providing the details of gujarati dish ",
        "averagePricePerPerson":900,  
        "imageURL":require("./../logo.svg")     
    },
    {
        "planTypes" : ['YEARLY'],
        "name":"year 2",
        "description":"we will provide you some punjabi dishes",
        "averagePricePerPerson":1200,     
        "imageURL":require("./../logo.svg")      
    },
    // {
    //     "planTypes" : ['YEARLY'],
    //     "planName":"year 3",
    //     "planDescription":"how about mexican cuisines this time",
    //     "rate":1900,    
    //     "imageLink":require("./../logo.svg")       
    // },
    // {
    //     "planTypes" : ['YEARLY'],
    //     "planName":"year 4",
    //     "planDescription":"missing indian taste...!!!we provide you with same taste and some dishes",
    //     "rate":1000,   
    //     "imageLink":require("./../logo.svg")        
    // },

]


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

// const [seller, setSeller]= useState([]);
  
//   useEffect(()=>{
//      let fetchData = async()=> {
        
//         const request = await axios.get('https://raw.githubusercontent.com/alphasingh/mocking-api/master/sellers.json');
//         //console.log(request.data.sellers);
//         setSeller(request.data.sellers);
//         return request;
//       }
     
//       fetchData();
             
//   },[]);

  
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Weekly" {...a11yProps(0)} />
          <Tab label="Monthly" {...a11yProps(1)} />
          <Tab label="Yearly" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
   
        <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid container spacing={2}>
                {mainWeeklyList && mainWeeklyList.map((item,index)=>{
                    return(
                        <Grid item xs={12} md={4} lg={4} sm={4}>
                            {console.log("iotem===>",item)}
                        <Card
                        data={item}/>
                        </Grid>
                    )
                })}
{/*                
                <Grid item xs={12} md={4} lg={4} sm={4}>
                <Card/>
                </Grid>
                <Grid item xs={12} md={4} lg={4} sm={4}>
                <Card/>
                </Grid> */}
            </Grid>
         
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container spacing={2}>
                {mainMonthlyList && mainMonthlyList.map((item,index)=>{
                    return(
                        <Grid item xs={12} md={4} lg={4} sm={4}>
                            {console.log("iotem===>",item)}
                        <Card
                        data={item}/>
                        </Grid>
                    )
                })}
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid container spacing={2}>
                {mainYearlyList && mainYearlyList.map((item,index)=>{
                    return(
                        <Grid item xs={12} md={4} lg={4} sm={4}>
                            {console.log("iotem===>",item)}
                        <Card
                        data={item}/>
                        </Grid>
                    )
                })}
            </Grid>
        {/* <Grid container spacing={2}>
          {seller.map((item,index)=>{
         return(
          <Grid item xs={12} md={4} lg={4} sm={4}>
          {console.log("iotem===>",item)}
          <Card
              data={item}/>
      </Grid>
             
            )
          }
       
          )}
          </Grid> */}
        </TabPanel>
    </div>
  );
}
