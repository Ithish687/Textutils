import React,{useContext,useEffect} from 'react';
import NoteContext from '../context/notes/NoteContext';

const About = () => {
  const a=useContext(NoteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  },[])
  return (
    <div>
        my name is {a.state.name} and i am studying in {a.state.class}
    </div>
  )
}

export default About;