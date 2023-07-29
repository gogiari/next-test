import Cats from "@/lib/cats/cats.model";
import dbConnect from "@/lib/db/dbConnect"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === "GET"){
        try {
            dbConnect();
            // const cats = Cats;
            const allCats = await Cats.find().sort({"id" : 1}).exec();
            res.status(200).json(allCats);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}