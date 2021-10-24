import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
  const activeStyles = {
    color:"white"
  }

  let active = 'home';
  const handleClick = (str)=>{
    active = str;
  }
  return (
    <div>
      <nav className="border-b p-6" style = {{backgroundColor:"#082850"}}>
        <p className="text-4xl font-bold" style = {{color:"white"}}>NFT KISHAN KUNJ</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-gray-500" style = {(active == 'home') ? activeStyles : {}} onClick={handleClick('home')}>
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-gray-500" style = {(active == 'digital_asset') ? activeStyles : {}} onClick={handleClick('digital_asset')}>
              Add To Marketplace
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-gray-500" style = {(active == 'my') ? activeStyles : {}} onClick={handleClick('my')}>
              My Digital Assets
            </a>
          </Link>
          <Link href="/creator-dashboard" style = {(active == 'creator') ? activeStyles : {}} onClick={handleClick('creator')}>
            <a className="mr-6 text-gray-500">
              Creator Dashboard
            </a>
          </Link>
          <a href="https://radiant-mesa-29894.herokuapp.com/" target = "_blank">
            <a className="mr-6 text-gray-500" style = {(active == 'predict') ? activeStyles : {}} onClick={handleClick('predict')}>
              Predict Quality of Crops
            </a>
          </a>
          <Link href="/news">
            <a className="mr-6 text-gray-500" style = {{cursor:"pointer"}}>
              Agro News
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace