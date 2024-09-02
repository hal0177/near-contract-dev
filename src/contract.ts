// Find all our documentation at https://docs.near.org
import { NearBindgen, near, view } from 'near-sdk-js';
import { encodeFunctionCall } from "web3-eth-abi"

@NearBindgen({})
class EncodeData {

  @view({})
  encode_function_call(): string {
    const abi_transfer_fragment = {
      name: "transfer",
      type: "function",
      inputs: [
        {
          type: "address",
          name: "recipient"
        },
        {
          type: "uint256",
          name: "amount"
        }
      ]
    }

    const transfer_calldata = ["0xabcdef0123abcdef0123abcdef0123abcdef0123", "1000000000000000000"]
    const encoded_data = encodeFunctionCall(abi_transfer_fragment, transfer_calldata)
    near.log(encoded_data)
    return encoded_data
  }
}
