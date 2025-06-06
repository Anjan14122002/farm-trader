import logo from '../assets/logo.png'

function Footer () {
    return (<>
        <footer className="bg-primary text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Company Logo" className="h-16 mr-2" />
          <span className="font-semibold text-lg">AgroTrader</span>
        </div>

        {/* Services */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Services</h4>
          <ul>
            <li><a href="#" className="hover:underline">Service 1</a></li>
            <li><a href="#" className="hover:underline">Service 2</a></li>
            <li><a href="#" className="hover:underline">Service 3</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
      </div>
    </footer> 
    </>)

}

export default Footer;