import Button from '../components/Button'
import Modal from '../components/Modal';
import { useState } from 'react';


function ButtonsPage() {


    
  const [showModal, setShowModal] = useState(false);


  const handleOpen = () =>{
    setShowModal(true);
  }
  const handleClose = () =>{
    setShowModal(false);
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

    return (
        <div className="bg-zinc-900 h-screen pt-20">
            <Button accept rounded>OK!</Button>
            <Button secondary>Ups</Button>


            <div className='p-2'>
                <Button onClick={handleOpen} primary>
                    Opening
                </Button>
                {showModal && modal}
            </div>
        </div>
    )
}
export default ButtonsPage;