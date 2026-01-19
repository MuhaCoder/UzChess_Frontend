import {contactBreadcrumb, contactInfo} from "../../data/data.js";
import ContactBreadcrumb from "../../components/breadcrumb/ContactBreadcrumb.jsx";
import ContactMain from "../../components/main/ContactMain/ContactMain.jsx";


export default function Contact() {
    return (
        <>
            {contactBreadcrumb.map(info => <ContactBreadcrumb key={info.id} info={info}/>)}
            {contactInfo.map(info => <ContactMain key={info.id} info={info}/>)}
        </>
    )
}