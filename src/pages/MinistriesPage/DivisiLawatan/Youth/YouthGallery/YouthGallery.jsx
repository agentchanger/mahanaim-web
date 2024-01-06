import React from 'react'
import './YouthGallery.css'
import assets from '../../../../../assets'

const YouthGallery = () => {
  return (
    <div className='youth-gallery-wrapper'>
        <div className='youth-gallery-content'>
            <div className='youth-gallery-row-odd'>
                <img className='youth-img' src={assets.YouthImage1} />
                <div className='youth-gallery-text'>
                    <h3>KKR Indoor</h3>
                    <p className='text-body-black'>Menjangkau jiwa-jiwa, dan membangkitkan pasukan Tuhan lewat KKR demi KKR, membawa setiap jiwa kepada Tuhan, untuk dibebaskan dan menang dari setiap belenggu dosa. Setiap KKR akan berlanjut dengan pendaftaran untuk menjadi pasukan yang dilatih dan dimuridkan secara khusus, untuk dibekali dengan kemampuan untuk menjadi pasukan Tuhan</p>
                </div>
            </div>
            <div className='youth-gallery-row-even'>
                <div className='youth-gallery-text'>
                    <h3>Berdoa Bagi Bangsa</h3>
                    <p className='text-body-black'>Setiap jiwa diajar dan dilatih untuk berdiri bagi bangsa, bersyafaat untuk bangsa yang kita cintai. Dituntun untuk menjadi generasi yang tahu menjadi pasukan yang menjaga bangsa</p>
                </div>
                <img className='youth-img' src={assets.YouthImage2} />
            </div>
            <div className='youth-gallery-row-odd'>
                <img className='youth-img' src={assets.YouthImage3} />
                <div className='youth-gallery-text'>
                    <h3>Penginjilan</h3>
                    <p className='text-body-black'>Digiring untuk menjadi penggenap firman, untuk pergi ke semua tempat, memberitakan firman, menumpangkan tangan kepada yang sakit, membawa kabar baik dan pelayanan pendamaian kepada seluruh umat manusia. Kami memberitakan injil kepada setiap kalangan, mulai dari mereka yang menderita berbagai macam penyakit, mereka yang dipandang sebelah mata oleh masyarakat, dan berbagai kalangan lainnya.</p>
                </div>
            </div>
            <div className='youth-gallery-row-even'>
                <div className='youth-gallery-text'>
                    <h3>KKR Provinsi</h3>
                    <p className='text-body-black'>Tidak berhenti hanya di kota-kota besar, kami melanjutkan pelayanan youth ini sampai ke berbagai provinsi, lawatan terjadi dimana-mana, lapangan-lapangan dipenuhi oleh generasi muda yang siap untuk dilanda roh Tuhan, dan dipenuhi oleh rohNya yang kudus</p>
                </div>
                <img className='youth-img' src={assets.YouthImage4} />
            </div>
            <div className='youth-gallery-row-odd' id='final'>
                <img className='youth-img' src={assets.YouthImage5} />
                <div className='youth-gallery-text'>
                    <h3>KKR Bangsa-Bangsa</h3>
                    <p className='text-body-black'>Tidak cukup untuk api ini hanya berhenti di Indonesia, kami melanjutkan api ini sampai ke Laos, Filipina, Canada, Taiwan, Serbia, Colombia, Dubai, Malaysia, Jepang, Australi, Brazil dan Burundi, dan akan terus bertambah, karena api ini tidak boleh berhenti sekarang. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YouthGallery