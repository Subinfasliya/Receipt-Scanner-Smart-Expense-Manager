import { extractAmount } from "../utils/amountExtractor"
import { extractCategory } from "../utils/categoryExtractor"
import { extractDate } from "../utils/dateExtractor"
import { extractStore } from "../utils/storeExtractor"

export const parseReceipt = (text) =>{
    return{
        store:extractStore(text),
        date:extractDate(text),
        category:extractCategory(text),
        amount: extractAmount(text),
        note:"",
    }
}