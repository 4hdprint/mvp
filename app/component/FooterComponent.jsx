import Image  from "next/image"
import SocialMedia from "./SocialMediaComponent"
import '../css/footer.css'

const Footer =()=>{
    return(
        <footer>
          <Image
                width={400}
                height={286}
                alt='4hd Print Negative Logo' 
                className='' 
                src = '/images/logo-negativo-4hd-print.png'
            />
            <div className="col">
                <ul>
                    <li>Copyright © 2024 4hd print</li>
                    <li>Union Avenue, Rutherford New Jersey, US 07070</li> 
                </ul>
                <SocialMedia/>
            </div>
        </footer>
    )
}

export default Footer