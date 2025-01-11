// api/proxy.js
import axios from "axios";
import {API_KEY, API_SECRET} from "~/constants/index.jsx";

export default async function handler(req, res) {
  try {
    const response = await axios.post('https://xumm.app/api/v1/platform/payload', {
      txjson: { TransactionType: "SignIn" },
      options: {
        pathfinding_fallback: false,
        force_network: "testnet"
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
        'X-API-Secret': API_SECRET,
        'Accept': 'application/json'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response ? error.response.data : error.message });
  }
}
