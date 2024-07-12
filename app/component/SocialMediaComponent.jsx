import '../css/social_media.css'
import { LuFacebook, LuInstagram, LuMessageCircle} from "react-icons/lu";

const SocialMedia = () =>{
    return(
        <ul className="social_media">
            <li><a className='what' target='_blank' href="https://wa.me/+12018939132"><LuMessageCircle/> </a><span>(201) 893-9132</span></li>
            <li><a className='face' target='_blank' href="https://www.facebook.com/profile.php?id=61560731580431"><LuFacebook/>   </a></li>
            <li><a className='ins'  target='_blank' href="https://www.instagram.com/4hdprint?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><LuInstagram/>  </a></li>
        </ul>
    )
}

export default SocialMedia