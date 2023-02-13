import { FunctionComponent, useContext } from "react";
import { Modal } from "react-bootstrap";
import { SiteTheme } from "../App";
import Card from "../interfaces/card";
import { updateCardByDes } from "../services/cardList";

interface ColorModalProps{
    show: boolean;
    onHide: Function;
    cardInfo: Card;
    setChange: Function;
    change: boolean
}

const ColorModal: FunctionComponent<ColorModalProps> = ({show,onHide,cardInfo,change,setChange}) => {
    const theme = useContext(SiteTheme);
    return <>
    <Modal
        show={show}
        onHide={() => onHide()}
        // size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >

      <Modal.Body style={{ color: theme.color, backgroundColor: theme.background, borderRadius:"10px" }}>
        <div id="colorBtns" style={{backgroundColor: theme.background, color: theme.color}}>
            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:"#F4FF00"},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor:"#F4FF00"}} className="btn"></button>

            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:"#002EFF"},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor:"#002EFF"}} className="btn"></button>

            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:"#00FF23"},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor:"#00FF23"}} className="btn"></button>

            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:"#F82D31"},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor:"#F82D31"}} className="btn"></button>

            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:"#A200F4"},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor:"#A200F4"}} className="btn"></button>

            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:"black"},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor:"black"}} className="btn"></button>

            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:"#F4A200"},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor:"#F4A200"}} className="btn"></button>

            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:"#2CFFB0"},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor:"#2CFFB0"}} className="btn"></button>

            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:"#026602"},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor:"#026602"}} className="btn"></button>

            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:"red"},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor:"red"}} className="btn"></button>

            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:"#FF64F2"},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor:"#FF64F2"}} className="btn"></button>

            <button onClick={() => {
                updateCardByDes(JSON.parse(localStorage.getItem("userId") as string),
                {businessAddress: cardInfo.businessAddress,businessDescription:cardInfo.businessDescription,businessImage:cardInfo.businessImage,businessName:cardInfo.businessName,businessPhone:cardInfo.businessPhone,cardColor:""},
                cardInfo.businessDescription).then(() => {onHide(); setChange(!change) })
            }}style={{margin:"15px", width:"40px", height:"40px", backgroundColor: theme.background,border:`5px solid ${theme.color}`}} className="btn"></button>
        </div>
       </Modal.Body>


    </Modal>
    </>
}

export default ColorModal;