import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}
// RESPONSE OBJECT FOR "previous close" of GME
// {
//   "ticker": "GME",
//   "queryCount": 1,
//   "resultsCount": 1,
//   "adjusted": false,
//   "results": [
//    {
//     "T": "GME",
//     "v": 43121664,
//     "vw": 98.0939,
//     "o": 112.01,
//     "c": 92.41,
//     "h": 113.3999,
//     "l": 85.25,
//     "t": 1612386000000
//    }
//   ],
//   "status": "OK",
//   "request_id": "da92d01f72f304c165852df4e91a4c72",
//   "count": 1
//  }

//  https://api.polygon.io/v1/last/stocks/GME?&apiKey=p7johxNF98BLOTkUbplxQH7MZc4R2ids

