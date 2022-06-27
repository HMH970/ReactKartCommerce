import "./categories.styles.scss"


const App = () => {

const categories = [
  {
    id: 1,
    title: 'Chassis',
    color: "blue"
  },
  {
    id: 2,
    title: 'Engine',
    color: "yellow"
  },
  {
    id: 3,
    title: 'Oil & Chems',
    color: "gray"
  },
  {
    id: 4,
    title: 'Parts',
    color: "purple"
  },
  {
    id: 5,
    title: 'Safety Gear',
    color: "pink"
  },
  {
    id: 6,
    title: 'Turn-key Karts',
    color: "green"
  },
  {
    id: 7,
    title: 'Classifieds',
    color: "red"
  }
]

  return (
    <div className='categories-container' >
      {categories.map((category) => (
        <div className='category-container'>
        <div className="category-img" style={{backgroundColor: "blue"}}/>
        <div className="category-body-container">
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default App;
