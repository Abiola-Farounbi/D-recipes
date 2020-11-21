import React, { useEffect,useState} from 'react'; 
import './App.css';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Logo from './logo1.png';


import Recipe from './recipe';



function App() {
  // const APP_ID = ' 60b4e713' ;
  // const APP_KEY='  8e394acbf18b45c0bdbcb0854bfef0a4  '	;
  // const APP_KEY='ac9d8f069e424e57a4ecae57358bfaf0';

  const [recipes,setRecipes]= useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('birthday cakes ')

 
  useEffect(() => {
   getRecipes()},[query])// eslint-disable-line react-hooks/exhaustive-deps


  const getRecipes =async  () => {
  
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=60b4e713&app_key=%208e394acbf18b45c0bdbcb0854bfef0a4`)
    
    const data = await response.json();
  setRecipes(data.hits)
 
 
   

  }

const updateSearch = e =>{
  setSearch(e.target.value)
}

const getSearch =e =>{
  e.preventDefault();
  setQuery(search)

  setSearch(' ')
}

  return (
   
    <div className="App">
      <header>
    <div className='background'>   </div>
    <div className='overlay'></div>
    <div className='headerText'>
    <img src={Logo} className='imageLogo' alt='logo'/>
      

<p className='animations'>

  <span>
  &mdash;  For the best recipes  &mdash;
  </span>

</p>
    </div>
   
    

    </header>
      
   <div className='section'>
  
     <form onSubmit ={ getSearch} className='searchForm'>
   
      <div className='searchBox'>
      <TextField
          className='searchInput'
          id="filled-basic" label="Find recipe  📝" variant="filled"
            type='text' value={search}   onChange={updateSearch}
           
  
            
          />

<Button
        variant="contained"
        size="small"
        className='searchButton' type='submit'
        
      >
      🔎
      </Button>  </div>              
       
       </form> 
   
       <Grid container spacing={24}>
       
       {recipes.map(recipe => ( 
         <Grid item xs={12} sm={6} lg={4} xl={3}>
       <Recipe
       key={recipe.recipe.label}
       title={recipe.recipe.label}
       procedure={recipe.recipe.url}
       time={ recipe.recipe.totalTime }
       image={recipe.recipe.image }
       ingredients={recipe.recipe.ingredients}

       />
        </Grid>
     ))}  
        
      
       </Grid>
       <div className='footer'>
       <div className="neon">
  <span className="text" data-text="">
  Designed by <a href='http://abiolaesther.me/'> Abiola </a>
  
  </span>
  <span className="gradient"></span>
  <span className="spotlight"></span>
</div>
       
        </div>
     </div>

     </div>
  
        
    
    
  );
}

     
export default App;
  