const pet =(props) => {
	return React.createElement("div",{},[
		React.createElement("h1",{},props.name),
		React.createElement("h2",{},props.animal),
		React.createElement("h2",{},props.breed),
	]);
};
const App=() => {
		  return React.createElement("div",{},
			  [
			  React.createElement("h1",{},"Adopt Me"),
			  React.createElement(pet,
				  {
					  animal:"dog",
					  name:"Luna",
					  breed:"havanesse"
				  }),
			  React.createElement(pet,
				  {
					  animal:"cat",
					  name:"Sam",
					  breed:"Bat-cat"
				  }),
			  React.createElement(pet,
				  {
					  animal:"Hippo",
					  name:"Ben",
					  breed:"MAMUS-HIPPO"
				  }),
			 
]
		  );
};
const container = document.getElementById('root');
const root =ReactDOM.createRoot(container);
root.render(React.createElement(App));
