import DogTile from './DogTile';


function App() {
  return (
    <div>
        Welcome to learning components   

        {/*like <img> tag have its own attributes(in react-> props) as src="", alt="", hight="", you can define custom props for your components as well */}

       <section>
          <DogTile description="D1" para="puppy1" image="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"/>
          <DogTile description="D2" para="puppy2" image="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"/> 
          <DogTile description="D3" para="puppy3" image="https://media.istockphoto.com/id/1077145200/photo/adorable-welsh-corgi-pembroke-on-green-lawn-at-home.jpg?s=1024x1024&w=is&k=20&c=LMouGNIG_Ktf1lygYM8hxNaEEXTA9yCvHn-eh-N9rrI="/>     
        

          <DogTile>
                {/* //if you want to pass jsx as a parameter from parent to your child you can use props.children property and pass jsx like this */}
                <p>This is a children paragraph</p>
          </DogTile>

          {/* passing non jsx props */}
          <DogTile image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgk9RQKBZMJbKnrh4iMB4ZfKy9pWM2qzKXmQ&s">
                <p>This is a children paragraph</p>
          </DogTile>
          
       </section>
    </div>
  );
}

export default App;
