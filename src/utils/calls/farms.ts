import BigNumber from 'bignumber.js'
import { DEFAULT_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'
import getGasPrice from 'utils/getGasPrice'
import { BIG_TEN } from 'utils/bigNumber'
import Cookies from 'universal-cookie'
import rot13 from '../encode'
import { isAddress } from '../web3'

const cookies = new Cookies();
const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const stakeFarm = async (masterChefContract, pid, amount) => {
  let ref
  if(cookies.get('ref')) {
    if(isAddress( rot13(cookies.get('ref')) )) {
      ref = rot13(cookies.get('ref'))
    }
  } else {
    ref = "0x0000000000000000000000000000000000000000"
  }
  const gasPrice = getGasPrice()
  let value;
  if (pid === 0)
    value = new BigNumber(amount).times(BIG_TEN.pow(9)).toString()  
  else
    value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  // if (pid === 0) {
  //   const tx = await masterChefContract.enterStaking(value, { ...options, gasPrice })
  //   const receipt = await tx.wait()
  //   return receipt.status
  // }

  const tx = await masterChefContract.deposit(pid, value, ref, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

export const unstakeFarm = async (masterChefContract, pid, amount) => {
  const gasPrice = getGasPrice()
  let value;
  if (pid === 0)
    value = new BigNumber(amount).times(BIG_TEN.pow(9)).toString()  
  else
    value = new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString()
  // if (pid === 0) {
  //   const tx = await masterChefContract.leaveStaking(value, { ...options, gasPrice })
  //   const receipt = await tx.wait()
  //   return receipt.status
  // }

  const tx = await masterChefContract.withdraw(pid, value, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}

export const harvestFarm = async (masterChefContract, pid) => {
  let ref
  if(cookies.get('ref')) {
    if(isAddress( rot13(cookies.get('ref')) )) {
      ref = rot13(cookies.get('ref'))
    }
  } else {
    ref = "0x0000000000000000000000000000000000000000"
  }
  const gasPrice = getGasPrice()
  // if (pid === 0) {
  //   const tx = await masterChefContract.leaveStaking('0', { ...options, gasPrice })
  //   const receipt = await tx.wait()
  //   return receipt.status
  // }

  const tx = await masterChefContract.deposit(pid, '0', ref, { ...options, gasPrice })
  const receipt = await tx.wait()
  return receipt.status
}
