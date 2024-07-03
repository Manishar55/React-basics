//whenever you are creating components name of the file should start with capital letter bcz the default written 
// html elements are always starts with small letters so to differenciate bet the native written html and 
//user defined components it uses capital letter 

  //class keyword is reserved for creating classes
  //if you write class here as well for writing css js will confuse
  //so if want to give class property in jsx then you have to write className

  import './DogDescription'
import DogDescription from './DogDescription';
import './DogTile.css'


//function DogTile(image, para){ 
function DogTile(props){   
    //return React.createElement("div", {}, React.createElement("img"), React.cloneElement("h3"));
  
        // function abc(){              //dont write component inside component
        //     return <div>hi</div>    //this might slow down your web page or coz bugs 
        // }

    //return <div>Dog</div>; //for single line
    const text="Cute";
    const imgURL="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
    const customStyle={color:'yellow'}
    return (
      <div className="first">
        {/* <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" alt="dogimage"></img> */}
        {/* <img src={imgURL} alt='puppy'></img> */}
        
        <img src={props.image} alt='puppy'></img>
        <h3 style={{fontSize: '20px', color:'red'}}>cute puppy</h3>
        <h2 style={customStyle}>{text}</h2>
        <p>{props.para}</p>
       
        <DogDescription DDescription={props.description}/>
        {props.children}
      </div>
    )
  }

  export default DogTile;

//props parameter is an object inside this object whatever you pass from the parent component when you are calling
//the child compoment whatever props you are passing from the parent components rae accesibl inside it

