import ethers  from "ethers"
const starknet  =  require("starknet")
import {getSelectorFromName } from "starknet/utils/hash"

// export const main = async (contractAddress:string,funcName:string,provideType:string) => {
//     const provider = new  starknet.Provider({
//         sequencer: {
//           network: "goerli-alpha" // 'mainnet-alpha' // or 'goerli-alpha'
//         }
//       })

//     let key = getSelectorFromName(funcName)
//     let val = await provider.getStorageAt(contractAddress,key)
//     // console.log(val);
//     console.log(key);

//       console.log(getSelectorFromName("name()"));

//       return val.toString();



// }

// main("0x06be6be4e99cffd1e39867d8fa895fb3195fca412fb74bd5a6f4b78db76974d5","balance","goerli-alpha")
export const main = async (contractAddress,funcName,provideType) => {
  const provider = new starknet.Provider({
      sequencer: {
        network: 'goerli-alpha'// 'mainnet-alpha' // or 'goerli-alpha'
      }
    })
console.log(provider)
  let key = getSelectorFromName(funcName)
  let val = await provider.getStorageAt(contractAddress,key)
  return val
}
async function start() {
  console.log(await main("0x06be6be4e99cffd1e39867d8fa895fb3195fca412fb74bd5a6f4b78db76974d5","balance",""))
}

// start()