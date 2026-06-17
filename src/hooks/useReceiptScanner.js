import { useState } from "react"
import { scanReceipt } from "../services/receiptService";

export const useReceiptScanner = () =>{
    
    const [loading,setLoading] = useState(false);
    const [ocrText,setOcrText] = useState("");

    const processReceipt = async (file) => {
        setLoading(true);
        try {
            
            const text = await scanReceipt(file);

            setOcrText(text)

        } catch (error) {
            console.log("Error occured ", error);
            
        }finally{
            setLoading(false)
        }
    }

   return {loading,ocrText,processReceipt}
}