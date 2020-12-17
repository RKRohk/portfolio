import { connectToDatabase } from "../../utils/mongodb"

export default async (req, res) => {
    const response = await connectToDatabase();
    const db = response.db
    console.log(response)
    res.json({type:typeof(response)})
}