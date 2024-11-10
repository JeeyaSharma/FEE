import Student from "./Student";
function App() {
  return (
    <>
      <Student name="Fault in our stars" author="John Green" isStudent={true}></Student>
      <Student name="Fault in  stars" author="John Green" isStudent={false}></Student>
      <Student name="Fault" author="John Green" isStudent={true}></Student>
      <Student></Student>
    </>
  );
}
export default App;