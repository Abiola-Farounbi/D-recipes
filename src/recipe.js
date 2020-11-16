import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { amber } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Link from '@material-ui/core/Link';


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
    backgroundColor: amber[500],
  },
}));


const Recipe = ({title,calories,image,ingredients,procedure,time}) =>{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return(
     <div className='margins'>

<Card className={classes.root}>
  
  <CardHeader
  avatar={           <Avatar aria-label="recipe" className={classes.avatar}>
  🟠 
    </Avatar>}
    title={ title}
  
  />
  <CardMedia
    className={classes.media}
    image={image} 
    title={ title}
  
  />
  <CardContent>
  <Typography variant="body2" color="textPrimary" component="p">
  <Link href={procedure} target="_blank" >
  Procedures 👨🏼‍🍳
  </Link> 
    </Typography>
    <Typography variant="body2" color="textPrimary" component="p">
   Duration:  {time} mins
    </Typography>
  </CardContent>
  <CardActions disableSpacing>

    <Typography variant="body2" color="textPrimary" component="p">
      Recipes
    </Typography>
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
      <Typography paragraph>List:</Typography>
       {ingredients.map(ingredient => (

                  <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar aria-label="recipe" className={classes.avatar}>
                      ✍🏾
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                   
                      primary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                             {ingredient.text}
                          </Typography>
                        
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  </List>

       ))}
     

    </CardContent>
    </Collapse>



</Card>
     </div>
   
    );
}
export default  Recipe;  








