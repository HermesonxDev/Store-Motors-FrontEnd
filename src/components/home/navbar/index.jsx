import MenuLogo from './icons/list.svg'
import LocalLogo from './icons/geo-alt-fill.svg'

function NavBar() {
    return (
        <div className="bg-yellow-200 " flex>
            <nav className="p-10 flex flex-row justify-center justify-between" >
                <div ><a href=""><img width={'30px'} height={'30px'} src={MenuLogo}alt="-icone-menu"/></a></div>
                <div><h1 className='text-2xl'>Store</h1></div>
                <div><a href=""><img width={'30px'} height={'30px'} src={ LocalLogo}alt="icone-gps"/></a></div>
            </nav>
        </div>
    )
}
export default NavBar