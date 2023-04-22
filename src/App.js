import { useState } from 'react';
import Button from './components/Button';
import Dropdown from './components/Dropdown';
import Nav from './components/Nav';
import SingleNews from './components/SingleNews';
import Modal from './components/Modal'



function App() {

  const [selection, setSelection] = useState('');

  const [showModal, setShowModal] = useState(false);


  const handleOpen = () =>{
    setShowModal(true);
  }
  const handleClose = () =>{
    setShowModal(false);
    console.log('halo')
  }

  const actionBar = (
    <div className='flex justify-between w-2/3 m-auto'>
      <Button danger onClick={handleClose}>
        Nope
      </Button>
      <Button accept onClick={handleClose}>
        OK
      </Button>
    </div>
  )

  const modal = (
    <Modal onChange={handleClose} actionBar={actionBar}>
      <p> Blah blahblah blah blah blah blah blahblahblahblahblah blahblahblah blahblahblahblah blahblahblahblah</p>
    </Modal>
  )


  const options = [
    { label: 'Option1', value: 'option1'},
    { label: 'Option2', value: 'option2'},
    { label: 'Option3', value: 'option3'},
    { label: 'Option4', value: 'option4'}
  ]

  const onSelect = (option) =>{
    setSelection(option);
  }

  let url = "https://picsum.photos/500/300";
  let urlSmallImg = "https://picsum.photos/300/200";
  return (
    <div className="bg-zinc-900 h-full">
      <Nav />
      <div className="pt-20">
        <Button accept rounded>OK!</Button>
        <Button secondary>Ups</Button>
      </div>
      <div className='m-2'> 
        <Dropdown options={options} onChange={onSelect} value={selection}/>
      </div>
      <div>
        <SingleNews big headValue={'Tutyl moze byc taki'} image={url}> Blah blahblah blah blah blah blah blah blahblahblah blahblahblahblah blahblahblahblahblahblah blahblahblah blahblahblahblah blahblahblahblah</SingleNews>
      </div>
      <div>
        <SingleNews small headValue={'Tutyl moze byc taki'} image={urlSmallImg}> Blah blahblah blah blah blah blah blah blahblahblah blahblahblahblah blahblahblahahblah blahblahblah blahblahblahblah blahblahblahblah</SingleNews>
      </div>
      <div  className='p-2'>
        <Button onClick={handleOpen} primary>
          Opening
        </Button>
        {showModal && modal}
      </div>
    </div>
  );
}

export default App;
