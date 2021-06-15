import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button"
import "./Card.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log("this.props===>",props.data)
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.data.name}
        // subheader="September 14, 2016 ----> September 15, 2016"
      />
      <CardMedia
        className={classes.media}
        // image={props.data.imageURL}
        image={props.data.imageURL.default}
        title="Weekly Plan"
        
      />
      {console.log("props==>",props.data)}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {/* className={"Description-text"} */}
          {props.data.description}
        </Typography><br/>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.averagePricePerPerson}$
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button variant="contained" color="primary">
  Subscribe Now
</Button>
      </CardActions>
         </Card>
  );
}
