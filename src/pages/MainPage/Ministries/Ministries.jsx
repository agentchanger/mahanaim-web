import React, { useRef } from 'react'
import './Ministries.css'
import { Link } from 'react-router-dom'

const Ministries = () => {
  const switchRefOne = useRef(null)
  const switchRefTwo = useRef(null)
  const switchRefThree = useRef(null)
  const switchRefFour = useRef(null)
  const switchRefFive = useRef(null)
  const switchRefSix = useRef(null)

  const switchCard = (switchRef) => {
    // console.log("Button clicked!")
    const classList = switchRef.current.classList
    if (classList.contains("switch-front")) {
      classList.remove("switch-front");
      classList.add("switch-back");
    } else if (classList.contains("switch-back")) {
      classList.remove("switch-back");
    } else {
      classList.add("switch-front");
    }
  }
  
  return (
    <div className='ministries-wrapper' id='ministries-anchor-tag'>
      <div className='ministries-content'>
        <p className='header-black'>MINISTRIES</p>
        <div className='cards'>
          <div className='ministry-card' onClick={() => switchCard(switchRefOne)}>
            <div className='card' ref={switchRefOne}>
              <div className='front' id='one'>
                <h1>Pujian dan Tarian</h1>
              </div>
              <div className='back'>
                <p>Membawa umat Tuhan kepada level dan dimensi Tuhan yang lebih dalam dan dahsyat lewat pujian penyembahan dan tarian.</p>
                <Link to='/divisi-pujian-dan-tarian'>See more</Link>
              </div>
            </div>
          </div>
          <div className='ministry-card' onClick={() => switchCard(switchRefTwo)}>
            <div className='card' ref={switchRefTwo}>
              <div className='front' id='two'>
                <h1>Akademik</h1>
              </div>
              <div className='back'>
                <p>Melahirkan generasi yang takut akan Tuhan, menjadi penerus dan pemimpin bangsa di hari depan.</p>
                <Link to='/divisi-akademik'>See more</Link>
              </div>
            </div>
          </div>
          <div className='ministry-card' onClick={() => switchCard(switchRefThree)}>
            <div className='card' ref={switchRefThree}>
              <div className='front' id='three'>
                <h1>Sosial</h1>
              </div>
              <div className='back'>
                <p>Pelayanan kepada masyarakat, melalui berbagai bantuan yang ditawarkan.</p>
                <Link to='/divisi-sosial'>See more</Link>
              </div>
            </div>
          </div>
          <div className='ministry-card' onClick={() => switchCard(switchRefFour)}>
            <div className='card' ref={switchRefFour}>
              <div className='front' id='four'>
                <h1>Lawatan</h1>
              </div>
              <div className='back'>
                <p>Ujung tombak dari pelayanan Mahanaim, menjadi visi dan mimpi utama yang Tuhan berikan bagi Mahanaim.</p>
                <Link to='/divisi-lawatan'>See more</Link>
              </div>
            </div>
          </div>
          <div className='ministry-card' onClick={() => switchCard(switchRefFive)}>
            <div className='card' ref={switchRefFive}>
              <div className='front' id='five'>
                <h1>Bisnis</h1>
              </div>
              <div className='back'>
                <p>Menopang kegerakan dan penjangkauan lewat keuangan.</p>
                <Link to='/divisi-bisnis'>See more</Link>
              </div>
            </div>
          </div>
          <div className='ministry-card' onClick={() => switchCard(switchRefSix)}>
            <div className='card' ref={switchRefSix}>
              <div className='front' id='six'>
                <h1>More coming</h1>
              </div>
              <div className='back'>
                <p>More ministries coming soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ministries