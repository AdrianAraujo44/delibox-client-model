import { useState } from 'react'
import { IoAdd, IoRemoveOutline } from 'react-icons/io5'

import {
  Item,
  Counter
} from './styles'

interface IComplements {
  complementsSelected: any
  item: any,
  setComplementsSelected: any,
  complementId: string
  mandatoryComplements: string[] 
  setMandatoryComplements: any
}

function ComplementItem({ complementsSelected, setComplementsSelected, item, complementId, mandatoryComplements, setMandatoryComplements }: IComplements) {
  const [showCounter, setShowCounter] = useState(false)
  const [amount, setAmount] = useState(1)

  const addComplement = (amount = 1) => {
    let count = 0
    complementsSelected.forEach((element: any) => {
      if (complementId == element.complementId) {
        count = count + element.amount
      }
    })

    if (count < item.rules.maxItens) {
      setComplementsSelected([...complementsSelected, { ...item, amount, complementId }])
      setShowCounter(true)
      count = count + 1
    }

    if (count >= item.rules.maxItens) {
      let auxMandatory = [...mandatoryComplements]
      auxMandatory.splice(mandatoryComplements.indexOf(complementId),1)
      setMandatoryComplements(auxMandatory)
    }
  }

  const increaseAmount = () => {
    let auxComplements = [...complementsSelected]
    complementsSelected.forEach((element: any, indice: number) => {

      if (element._id == item._id) {
        if ((item.rules.maxChoiceItem >= amount + 1)) {
          let count = 0
          complementsSelected.forEach((element: any) => {
            if (complementId == element.complementId) {
              count = count + element.amount
            }
          })

          if (count + 1 <= item.rules.maxItens) {
            auxComplements[indice].amount = amount + 1
            count = count + 1
            setAmount(amount + 1)
          }

          if (count >= item.rules.maxItens) {
            let auxMandatory = [...mandatoryComplements]
            auxMandatory.splice(mandatoryComplements.indexOf(complementId),1)
            setMandatoryComplements(auxMandatory)
          }
        }
      }
    })

    setComplementsSelected([...auxComplements])
  }

  const decreaseAmount = () => {
    let auxComplements = [...complementsSelected]
    complementsSelected.forEach((element: any, indice: number) => {
      if (element._id == item._id) {
        if (amount - 1 > 0) {
          auxComplements[indice].amount = amount - 1
          setAmount(amount - 1)
        } else {
          auxComplements.splice(indice, 1)
          setShowCounter(false)
        }

        if(mandatoryComplements.indexOf(element.complementId) < 0) {
          setMandatoryComplements([...mandatoryComplements, element.complementId])
        }
      }
    })
    setComplementsSelected([...auxComplements])
  }

  return (
    <Item>
      <div className="box">
        <label>{item.name}</label>
        <span>+ R${item.price.toFixed(2)}</span>
      </div>
      {showCounter ? (
        <Counter>
          <button type="button" onClick={decreaseAmount}>
            <IoRemoveOutline size={25} />
          </button>
          <span>{amount}</span>
          <button type="button" onClick={increaseAmount}>
            <IoAdd size={25} />
          </button>
        </Counter>
      ) : (
        <button type='button' onClick={() => addComplement()}>
          <IoAdd size={25} />
        </button>
      )}
    </Item>
  )
}

export default ComplementItem