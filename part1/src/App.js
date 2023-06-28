const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>      
    </div>

  )
}

const Content = (props) => {
  return(
    <div>
      <Parts part1 = 'Fundamentals of React' exercises1 = {10} />
      <Parts part2 = 'Using props to pass data' exercises2 = {7}/>
      <Parts part3 = 'State of a component' exercises3 = {14}/>
    </div>
  )
}

const Parts = (props) => {
  return(
    <div>
      <p>{props.part1}  {props.exercises1}</p>
      <p>{props.part2}  {props.exercises2}</p>
      <p>{props.part3}  {props.exercises3}</p>
    </div>
  )

}

const Total = (props) => {
    return (
      <div>
        <p>Total number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
      </div>
    )
}

const App = () => {

   return (
    <div>
      <Header course = 'Half stack application development' />
      <Content />   
      <Total exercises1 = {10}  exercises2 = {7} exercises3 = {14} />
   
           
    </div>
)
} 

export default App