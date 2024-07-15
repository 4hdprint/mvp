import Image  from "next/image"
import SocialMedia from "./SocialMediaComponent"
import '../css/footer.css'

const Footer =()=>{
    return(
        <footer>
            <img src="https://4hdprint.com/images/Logo-negativo-4hd-print.png"/>
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